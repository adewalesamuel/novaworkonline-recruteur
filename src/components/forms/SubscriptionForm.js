import { Components } from '..'

export function SubscriptionForm(props) {
    return (
        <form className='form' disabled={props.isDisabled ?? false}
        onSubmit={props.handleFormSubmit ?? null}>
            <div className='row'>
                <div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='type'>Type</label>
                        <input className='form-control' type='text' id='type' name='type' 
                        placeholder='Type' value={props.useSubscription.type ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useSubscription.setType(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='amount'>Amount</label>
                        <input className='form-control' type='number' id='amount' name='amount' 
                        placeholder='Amount' value={props.useSubscription.amount ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useSubscription.setAmount(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='payment_mode'>Payment_mode</label>
                        <input className='form-control' type='text' id='payment_mode' name='payment_mode' 
                        placeholder='Payment_mode' value={props.useSubscription.payment_mode ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useSubscription.setPayment_mode(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='payment_status'>Payment_status</label>
                        <input className='form-control' type='radio' id='payment_status' name='payment_status' 
                        placeholder='Payment_status' value={props.useSubscription.payment_status ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useSubscription.setPayment_status(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='expiration_date'>Expiration_date</label>
                        <input className='form-control' type='date' id='expiration_date' name='expiration_date' 
                        placeholder='Expiration_date' value={props.useSubscription.expiration_date ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useSubscription.setExpiration_date(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='subscriber_id'>Subscriber_id</label>
                        <input className='form-control' type='number' id='subscriber_id' name='subscriber_id' 
                        placeholder='Subscriber_id' value={props.useSubscription.subscriber_id ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useSubscription.setSubscriber_id(e.target.value) ?? null} required/>
                    </div>
                </div>
				
                <div className='col-12 text-right'>
                    <button disabled={props.isDisabled ?? false} type='button' className='btn btn-primary' 
                    onClick={props.handleFormSubmit}>
                        <span>Enregistrer</span>
                    </button>
                </div>
            </div>
        </form>
    )
}