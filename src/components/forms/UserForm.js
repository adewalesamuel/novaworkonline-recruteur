import { Components } from '..'

export function UserForm(props) {
    return (
        <form className='form' disabled={props.isDisabled ?? false}
        onSubmit={props.handleFormSubmit ?? null}>
            <div className='row'>
                <div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='firstname'>Firstname</label>
                        <input className='form-control' type='text' id='firstname' name='firstname' 
                        placeholder='Firstname' value={props.useUser.firstname ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useUser.setFirstname(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='lastname'>Lastname</label>
                        <input className='form-control' type='text' id='lastname' name='lastname' 
                        placeholder='Lastname' value={props.useUser.lastname ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useUser.setLastname(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='email'>Email</label>
                        <input className='form-control' type='text' id='email' name='email' 
                        placeholder='Email' value={props.useUser.email ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useUser.setEmail(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='password'>Password</label>
                        <input className='form-control' type='text' id='password' name='password' 
                        placeholder='Password' value={props.useUser.password ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useUser.setPassword(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='birth_date'>Birth_date</label>
                        <input className='form-control' type='date' id='birth_date' name='birth_date' 
                        placeholder='Birth_date' value={props.useUser.birth_date ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useUser.setBirth_date(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='gender'>Gender</label>
                        <input className='form-control' type='text' id='gender' name='gender' 
                        placeholder='Gender' value={props.useUser.gender ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useUser.setGender(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='phone_number'>Phone_number</label>
                        <input className='form-control' type='text' id='phone_number' name='phone_number' 
                        placeholder='Phone_number' value={props.useUser.phone_number ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useUser.setPhone_number(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='city'>City</label>
                        <input className='form-control' type='text' id='city' name='city' 
                        placeholder='City' value={props.useUser.city ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useUser.setCity(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='profil_img_url'>Profil_img_url</label>
                        <input className='form-control' type='text' id='profil_img_url' name='profil_img_url' 
                        placeholder='Profil_img_url' value={props.useUser.profil_img_url ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useUser.setProfil_img_url(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='api_token'>Api_token</label>
                        <input className='form-control' type='text' id='api_token' name='api_token' 
                        placeholder='Api_token' value={props.useUser.api_token ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useUser.setApi_token(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='is_active'>Is_active</label>
                        <input className='form-control' type='radio' id='is_active' name='is_active' 
                        placeholder='Is_active' value={props.useUser.is_active ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useUser.setIs_active(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='is_qualified'>Is_qualified</label>
                        <input className='form-control' type='radio' id='is_qualified' name='is_qualified' 
                        placeholder='Is_qualified' value={props.useUser.is_qualified ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useUser.setIs_qualified(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='country_id'>Country_id</label>
                        <select className='select2 form-control' id='country_id' name='country_id' value={props.useUser.country_id ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useUser.setCountry_id(e.target.value) ?? null} required>
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
                        <label htmlFor='jobtitle_id'>Jobtitle_id</label>
                        <select className='select2 form-control' id='jobtitle_id' name='jobtitle_id' value={props.useUser.jobtitle_id ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useUser.setJobtitle_id(e.target.value) ?? null} required>
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