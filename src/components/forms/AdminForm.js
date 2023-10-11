import { Components } from '..'

export function AdminForm(props) {
    return (
        <form className='form' disabled={props.isDisabled ?? false}
        onSubmit={props.handleFormSubmit ?? null}>
            <div className='row'>
                <div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='firstname'>Firstname</label>
                        <input className='form-control' type='text' id='firstname' name='firstname' 
                        placeholder='Firstname' value={props.useAdmin.firstname ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useAdmin.setFirstname(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='lastname'>Lastname</label>
                        <input className='form-control' type='text' id='lastname' name='lastname' 
                        placeholder='Lastname' value={props.useAdmin.lastname ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useAdmin.setLastname(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='email'>Email</label>
                        <input className='form-control' type='text' id='email' name='email' 
                        placeholder='Email' value={props.useAdmin.email ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useAdmin.setEmail(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='password'>Password</label>
                        <input className='form-control' type='text' id='password' name='password' 
                        placeholder='Password' value={props.useAdmin.password ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useAdmin.setPassword(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='phone_number'>Phone_number</label>
                        <input className='form-control' type='text' id='phone_number' name='phone_number' 
                        placeholder='Phone_number' value={props.useAdmin.phone_number ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useAdmin.setPhone_number(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='profil_img_url'>Profil_img_url</label>
                        <input className='form-control' type='text' id='profil_img_url' name='profil_img_url' 
                        placeholder='Profil_img_url' value={props.useAdmin.profil_img_url ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useAdmin.setProfil_img_url(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='api_token'>Api_token</label>
                        <input className='form-control' type='text' id='api_token' name='api_token' 
                        placeholder='Api_token' value={props.useAdmin.api_token ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useAdmin.setApi_token(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='is_active'>Is_active</label>
                        <input className='form-control' type='radio' id='is_active' name='is_active' 
                        placeholder='Is_active' value={props.useAdmin.is_active ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useAdmin.setIs_active(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='country_id'>Country_id</label>
                        <select className='select2 form-control' id='country_id' name='country_id' value={props.useAdmin.country_id ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useAdmin.setCountry_id(e.target.value) ?? null} required>
                            {/* {
                                props.items.map(item => {
                                    return <option key={Math.random()} value={item.id ?? ''}>{item.name}</option>
                                })
                            }  */}
                        </select>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='role_id'>Role_id</label>
                        <select className='select2 form-control' id='role_id' name='role_id' value={props.useAdmin.role_id ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useAdmin.setRole_id(e.target.value) ?? null} required>
                            {/* {
                                props.items.map(item => {
                                    return <option key={Math.random()} value={item.id ?? ''}>{item.name}</option>
                                })
                            }  */}
                        </select>
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