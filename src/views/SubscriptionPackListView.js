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

        try {
            const {isConfirmed} = await Utils.SweetAlert.firePaymentConfirm(
                subscription_pack.price);

            if (isConfirmed) {
                useSubscription.setIsDisabled(true);
                // Payement
            }
        } catch (error) {
            console.log(error);
        }finally{useSubscription.setIsDisabled(false);}
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
                                        <h1 className="pricing-price">{subscription_pack.price} Fcfa</h1>
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