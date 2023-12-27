const CinetPay = {
    getCheckout: ({amount, user, pack}) => {
        if (!window.CinetPay)
            throw new Error("CinetPay module not found");

        window.CinetPay.setConfig({
            apikey: process.env.REACT_APP_CINET_PAY_API_KEY,//   YOUR APIKEY
            site_id: process.env.REACT_APP_CINET_PAY_SITE_ID,//YOUR_SITE_ID
            notify_url: '',
            mode: process.env.REACT_APP_CINET_PAY_MODE
        });
        
        window.CinetPay.getCheckout({
            transaction_id: Math.floor(Math.random() * 100000000).toString(), // YOUR TRANSACTION ID
            amount: amount,
            currency: 'XOF',
            channels: 'ALL',
            description: pack.description,   
             //Fournir ces variables pour le paiements par carte bancaire
            customer_name:user.firstname ?? "recruiteur prenom",//Le nom du client
            customer_surname:user.lastname ?? "recruiteur nom",//Le prenom du client
            customer_email: user.email,//l'email du client
            customer_phone_number: user.phone_number ?? "00000000",//l'email du client
            customer_address : user.location,//addresse du client
            customer_city: user.location ?? "Canada",// La ville du client
            customer_country : "CA",// le code ISO du pays
            customer_state : "QC",// le code ISO l'état
            customer_zip_code : "G5H", // code postal

        })

        return window.CinetPay;
    }
}

export const Payment = {
    CinetPay
}