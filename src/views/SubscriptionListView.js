import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Services } from "../services";
import { Components } from "../components";

export function SubscriptionListView(props) {
    let abortController = new AbortController();
    const { SubscriptionService } = Services;

    const [searchParams,] = useSearchParams();

    const tableAttributes = {
        'montant': {},
        'statut': {},
        'date de paiement': {},
        'date d\'expiration': {}
    }
    const statusMap = {
        'expire': 'bg-secondary',
        'valide': 'bg-success'
    }
    const tableActions = [];

    const [subscriptions, setSubscriptions] = useState([]);
    const [page, setPage] = useState(searchParams.get('page') ?? 1);
    const [isLoading, setIsLoading] = useState(true);

    const init = useCallback(async () => {
        try {
            const {subscriptions} = await SubscriptionService.getAll(
                {page: page}, abortController.signal);

            const subscriptionData = subscriptions.data.map((subscription, index) => {
                const isExpired = new Date().getTime() > new Date(subscription.expiration_date).getTime();

                return {
                    'montant': subscription.amount ,
                    'statut': (<span className={`px-3 py-1 rounded-50 text-white 
                    ${statusMap[isExpired ? 'expire' : 'valide']}`}>
                        {isExpired ? "expirée" : "en cours"}</span>),
                    'date de paiement': new Date(subscription.created_at)
                    .toLocaleDateString('fr', {'dateStyle': 'medium'}),
                    'date d\'expiration': new Date(subscription.expiration_date)
                    .toLocaleDateString('fr', {'dateStyle': 'medium'})
                }
            } );

            setSubscriptions(subscriptionData);
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

    useEffect(() => {
        // loadSubscriptions();
    },[page]);

    return (
        <>
            <div className="slim-pageheader">
                <ol className="breadcrumb slim-breadcrumb">
                </ol>
                <h6 className="slim-pagetitle">Mes Abonnements</h6>
            </div> 
            <Components.Loader isLoading={isLoading}>
                <div className="row">
                    <div className="col-12">
                        <div className="card card-table mb-4">
                            <div className="card-header">
                                <h6 className="slim-card-title">Liste des abonnements</h6>
                            </div>
                            <div className="table-responsive">
                                <Components.Table controllers={{}}
                                tableActions={tableActions} tableData={subscriptions}
                                tableAttributes={tableAttributes}/>
                            </div>
                        </div>
                    </div>
                </div>
            </Components.Loader>
        </>
    )
}