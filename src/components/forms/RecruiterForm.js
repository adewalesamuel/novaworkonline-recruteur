import { Components } from '..'
import { Services } from '../../services';

export function RecruiterForm(props) {
    let abortController = new AbortController();
    
    const handleFileUpload = async file => {
        props.useRecruiter.setIsDisabled(true);
        
        try {
            const formData = new FormData();

            formData.append('img', file);
            
            const {img_url} = await Services.FileService.store(
                formData, abortController.signal);

            props.useRecruiter.setProfil_img_url(img_url);
        } catch (error) {
            
        }finally {props.useRecruiter.setIsDisabled(false)}
    }

    return (
        <form className='form' disabled={props.isDisabled ?? false} onSubmit={props.handleFormSubmit ?? null}>
            <div className='row'>
                <div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='profil_img_url'>Image de profil</label>
                        <Components.ImageFileInput img_url={props.useRecruiter.profil_img_url} 
                        handleFileChange={handleFileUpload} />
                    </div>
                </div>
                <div className='col-12 col-sm-6'>
                    <div className='form-group'>
                        <label htmlFor='firstname'>Prénom</label>
                        <input className='form-control' type='text' id='firstname' name='firstname' 
                        placeholder='Prénom' value={props.useRecruiter.firstname ?? ''} disabled={props.isDisabled} 
                        onChange={e => props.useRecruiter.setFirstname(e.target.value) ?? null} required />
                    </div>
                </div>
                <div className='col-12 col-sm-6'>
                    <div className='form-group'>
                        <label htmlFor='lastname'>Nom de famille</label>
                        <input className='form-control' type='text' id='lastname' name='lastname' 
                        placeholder='Nom de famille' value={props.useRecruiter.lastname ?? ''} disabled={props.isDisabled} 
                        onChange={e => props.useRecruiter.setLastname(e.target.value) ?? null} required />
                    </div>
                </div>
                <div className='col-12 col-sm-6'>
                    <div className='form-group'>
                        <label htmlFor='email'>Courriel</label>
                        <input className='form-control' type='text' id='email' name='email' 
                        placeholder='Courriel' value={props.useRecruiter.email ?? ''} disabled={props.isDisabled} 
                        onChange={e => props.useRecruiter.setEmail(e.target.value) ?? null} required />
                    </div>
                </div>
                <div className='col-12 col-sm-6'>
                    <div className='form-group'>
                        <label htmlFor='birth_date'>Date de naissance</label>
                        <input className='form-control' type='date' id='birth_date' name='birth_date' 
                        placeholder='Date de naissance' value={props.useRecruiter.birth_date ?? ''} disabled={props.isDisabled} 
                        onChange={e => props.useRecruiter.setBirth_date(e.target.value) ?? null} required />
                    </div>
                </div>
                <div className='col-12 col-sm-6'>
                    <div className='form-group'>
                        <label htmlFor='gender'>Genre</label>
                        <select className='form-control' type='text' id='gender' name='gender' 
                        value={props.useRecruiter.gender ?? ''} disabled={props.isDisabled} 
                        onChange={e => props.useRecruiter.setGender(e.target.value) ?? null} required>
                            <option value={"M"}>Homme</option>
                            <option value={"F"}>Femme</option>
                            <option value={"O"}>Autre</option>
                        </select>
                    </div>
                </div>
                <div className='col-12 col-sm-6'>
                    <div className='form-group'>
                        <label htmlFor='phone_number'>Numéro de téléphone</label>
                        <input className='form-control' type='text' id='phone_number' name='phone_number' 
                        placeholder='Numéro de téléphone' value={props.useRecruiter.phone_number ?? ''} disabled={props.isDisabled} 
                        onChange={e => props.useRecruiter.setPhone_number(e.target.value) ?? null} required />
                    </div>
                </div>
                <div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='location'>Localisation</label>
                        <input className='form-control' type='text' id='location' name='location' 
                        placeholder='Localisation' value={props.useRecruiter.location ?? ''} disabled={props.isDisabled} 
                        onChange={e => props.useRecruiter.setLocation(e.target.value) ?? null} required />
                    </div>
                </div>
                <div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='company_name'>Nom de l'entreprise</label>
                        <input className='form-control' type='text' id='company_name' name='company_name' 
                        placeholder="Nom de l'entreprise" value={props.useRecruiter.company_name ?? ''} disabled={props.isDisabled} 
                        onChange={e => props.useRecruiter.setCompany_name(e.target.value) ?? null} required />
                    </div>
                </div>
                <div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='country_id'>Pays</label>
                        <select className='select2 form-control' id='country_id' name='country_id' 
                        value={props.useRecruiter.country_id ?? ''} disabled={props.isDisabled} 
                        onChange={e => props.useRecruiter.setCountry_id(e.target.value) ?? null} required>
                            {
                                props.countries.map(country => {
                                    return <option key={Math.random()} value={country.id ?? ''}>{country.name}</option>
                                })
                            }
                        </select>
                    </div>
                </div>
                <div className='col-12 text-right'>
                    <button disabled={props.isDisabled ?? false} type='button' className='btn btn-primary' 
                    onClick={props.handleFormSubmit}>
                        <span>{props.isDisabled ? "Chargement..." : 'Enregistrer'}</span>
                    </button>
                </div>
            </div>
        </form>

    )
}