import { Components } from '..'

export function CountryForm(props) {
    return (
        <form className='form' disabled={props.isDisabled ?? false}
        onSubmit={props.handleFormSubmit ?? null}>
            <div className='row'>
                <div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='name'>Name</label>
                        <input className='form-control' type='text' id='name' name='name' 
                        placeholder='Name' value={props.useCountry.name ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useCountry.setName(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='code'>Code</label>
                        <input className='form-control' type='text' id='code' name='code' 
                        placeholder='Code' value={props.useCountry.code ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useCountry.setCode(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='phone_code'>Phone_code</label>
                        <input className='form-control' type='text' id='phone_code' name='phone_code' 
                        placeholder='Phone_code' value={props.useCountry.phone_code ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useCountry.setPhone_code(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='flag_icon_url'>Flag_icon_url</label>
                        <input className='form-control' type='text' id='flag_icon_url' name='flag_icon_url' 
                        placeholder='Flag_icon_url' value={props.useCountry.flag_icon_url ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useCountry.setFlag_icon_url(e.target.value) ?? null} required/>
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