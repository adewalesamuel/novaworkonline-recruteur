import { Components } from '..'

export function SubscriptionPackForm(props) {
    return (
        <form className='form' disabled={props.isDisabled ?? false}
        onSubmit={props.handleFormSubmit ?? null}>
            <div className='row'>
                <div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='name'>Name</label>
                        <input className='form-control' type='text' id='name' name='name' 
                        placeholder='Name' value={props.useSubscriptionPack.name ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useSubscriptionPack.setName(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='slug'>Slug</label>
                        <input className='form-control' type='text' id='slug' name='slug' 
                        placeholder='Slug' value={props.useSubscriptionPack.slug ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useSubscriptionPack.setSlug(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='description'>Description</label>
                        <input className='form-control' type='text' id='description' name='description' 
                        placeholder='Description' value={props.useSubscriptionPack.description ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useSubscriptionPack.setDescription(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='price'>Price</label>
                        <input className='form-control' type='number' id='price' name='price' 
                        placeholder='Price' value={props.useSubscriptionPack.price ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useSubscriptionPack.setPrice(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='duration'>Duration</label>
                        <input className='form-control' type='number' id='duration' name='duration' 
                        placeholder='Duration' value={props.useSubscriptionPack.duration ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useSubscriptionPack.setDuration(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='type'>Type</label>
                        <input className='form-control' type='text' id='type' name='type' 
                        placeholder='Type' value={props.useSubscriptionPack.type ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useSubscriptionPack.setType(e.target.value) ?? null} required/>
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