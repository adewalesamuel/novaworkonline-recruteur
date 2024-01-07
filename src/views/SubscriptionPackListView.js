import { useCallback, useEffect, useState } from "react";
import { Services } from "../services";
import { Hooks } from "../hooks";
import { Utils } from "../utils";
import { Components } from "../components";

export function SubscriptionPackListView(props) {
    let abortController = new AbortController();
    const { SubscriptionPackService } = Services;

    const useSubscription = Hooks.useSubscription();

    const [subscription_packs, setSubscription_packs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const handleSubscriptionPackClick = async (e, subscription_pack) => {
        e.preventDefault();

        useSubscription.setAmount(subscription_pack.price);
        useSubscription.setPayment_mode('mobile');
        useSubscription.setSubscription_pack_id(subscription_pack.id);

        try {
            const {isConfirmed} = await Utils.SweetAlert.firePaymentConfirm(
                subscription_pack.price);

            if (isConfirmed) {
                useSubscription.setIsDisabled(true);

                const paymentData = {
                    amount: subscription_pack.price,
                    user: Utils.Auth.getUser(),
                    pack: subscription_pack 
                }

                const cinetPay = Utils.Payment.CinetPay.getCheckout(paymentData);

                cinetPay.waitResponse(async (data) => {
                    if (data.status === "REFUSED") {
                        console.log("Votre paiement a échoué");
                    } else if (data.status === "ACCEPTED") {
                        const payload = {
                            amount: subscription_pack.price,
                            payment_mode: 'mobile',
                            subscription_pack_id: subscription_pack.id
                        }

                        setIsLoading(true);
        
                        await Services.SubscriptionService.create(JSON.stringify(payload), 
                        new AbortController().signal);

                        alert("Votre paiement a été effectué avec succès")
                        window.location.assign('/candidats/qualifies');
                    }
                });

                cinetPay.onError(data => {
                    console.log(data);
                    alert('Une erreur est survenue. Veuillez réessayer plus tard')
                });
            }
        } catch (error) {
            console.log(error);
        }finally{
            useSubscription.setIsDisabled(false);
        }
    }

    const init = useCallback(async () => {
        try {
            const {subscription_packs} = await SubscriptionPackService.getAll(
                abortController.signal);

            setSubscription_packs(subscription_packs);
        } catch (error) {
            console.log(error);
        } finally {setIsLoading(false)};
    }, []);

    useEffect(() => {
      init();

      return () => {
            abortController.abort();
            abortController = new AbortController();
        }
    }, [init])

    return (
        <>
            <div className="slim-pageheader">
                <ol className="breadcrumb slim-breadcrumb">
                </ol>
                <h6 className="slim-pagetitle">Abonnements</h6>
            </div> 
            <div className="card card-pricing-one">
                <Components.Loader isLoading={isLoading}>
                    <div className="row justify-content-center">
                        {subscription_packs.map((subscription_pack, index) => {
                            return (
                                <div className="col-md-4 col-sm-6 col-12" key={index}>
                                    <div className="pricing-item">
                                        <div className="pricing-icon"><i className="icon ion-model-s"></i></div>
                                        <h5 className="pricing-title">{subscription_pack.name}</h5>
                                        <p className="pricing-text">{subscription_pack.description}</p>
                                        <h1 className="pricing-price">{subscription_pack.price} $</h1>
                                        <button className="btn btn-primary btn-pricing btn-block" 
                                        onClick={e => handleSubscriptionPackClick(e, subscription_pack)}>
                                            Souscrire
                                        </button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </Components.Loader>
        </div>
        </>
    )
}