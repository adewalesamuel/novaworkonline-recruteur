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
        <form className='form' disabled={props.isDisabled ?? false} 
        onSubmit={props.handleFormSubmit ?? null}>
            <div className='row'>
                <div className='col-12 col-md-4'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='form-group rounded-pill d-flex mx-auto 
                            justify-content-center align-items-center' style={{
                                    border: "3px solid #2f1b66",
                                    overflow: 'hidden',
                                    width: "15rem",
                                    height: "15rem"
                                }}>
                                <Components.ImageFileInput 
                                img_url={props.useRecruiter.profil_img_url} 
                                handleFileChange={handleFileUpload} />

                            </div>
                            <div className='d-flex align-items-center col-12 mt-2 flex-column'>
                                <strong className='text-white bg-blue px-4 py-2 rounded-pill'>
                                    {props.useRecruiter.lastname} {props.useRecruiter.firstname}
                                </strong>
                                <span className='btn btn-link text-primary'>
                                    <i className='fa fa-pencil mr-2'></i>
                                    Modifier
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-12 col-md-8'>
                    <div className='row'>

                        <div className='col-12 col-sm-6'>
                            <div className='form-group'>
                                <label htmlFor='firstname'>Prénom</label>
                                <input className='form-control rounded bg-light' type='text' id='firstname' 
                                name='firstname' placeholder='Prénom' value={props.useRecruiter.firstname ?? ''} 
                                disabled={props.isDisabled} onChange={e => 
                                props.useRecruiter.setFirstname(e.target.value) ?? null} required />
                            </div>
                        </div>
                        <div className='col-12 col-sm-6'>
                            <div className='form-group'>
                                <label htmlFor='lastname'>Nom de famille</label>
                                <input className='form-control rounded bg-light' type='text' id='lastname' 
                                name='lastname' placeholder='Nom de famille' value={props.useRecruiter.lastname ?? ''} 
                                disabled={props.isDisabled} onChange={e => 
                                props.useRecruiter.setLastname(e.target.value) ?? null} required />
                            </div>
                        </div>
                        <div className='col-12'>
                            <div className='form-group'>
                                <label htmlFor='email'>E-mail</label>
                                <input className='form-control rounded bg-light' type='email' id='email' 
                                name='email' placeholder='E-mail' value={props.useRecruiter.email ?? ''} 
                                disabled={props.isDisabled} onChange={e => 
                                props.useRecruiter.setEmail(e.target.value) ?? null} required />
                            </div>
                        </div>
                        <div className='col-12 col-sm-6'>
                            <div className='form-group'>
                                <label htmlFor='gender'>Genre</label>
                                <select className='form-control bg-light rounded' type='text' id='gender' 
                                name='gender' value={props.useRecruiter.gender ?? ''} disabled={props.isDisabled} 
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
                                <input className='form-control rounded bg-light' type='text' id='phone_number' 
                                name='phone_number' placeholder='Numéro de téléphone' 
                                value={props.useRecruiter.phone_number ?? ''} disabled={props.isDisabled} 
                                onChange={e => props.useRecruiter.setPhone_number(e.target.value) ?? null} required />
                            </div>
                        </div>
                        <div className='col-12 col-sm-6'>
                            <div className='form-group'>
                                <label htmlFor='location'>Localisation</label>
                                <input className='form-control rounded bg-light' type='text' id='location' 
                                name='location' placeholder='Localisation' 
                                value={props.useRecruiter.location ?? ''} disabled={props.isDisabled} 
                                onChange={e => props.useRecruiter.setLocation(e.target.value) ?? null} required />
                            </div>
                        </div>
                        <div className='col-12 col-sm-6'>
                            <div className='form-group'>
                                <label htmlFor='company_name'>Nom de l'entreprise</label>
                                <input className='form-control rounded bg-light' type='text' id='company_name' 
                                name='company_name' placeholder="Nom de l'entreprise" 
                                value={props.useRecruiter.company_name ?? ''} disabled={props.isDisabled} 
                                onChange={e => props.useRecruiter.setCompany_name(e.target.value) ?? null} required />
                            </div>
                        </div>
                        <div className='col-12 col-sm-6'>
                            <div className='form-group'>
                                <label htmlFor='country_id'>Pays</label>
                                <select className='select2 form-control rounded bg-light' id='country_id' name='country_id' 
                                
                                value={props.useRecruiter.country_id ?? ''} disabled={props.isDisabled} 
                                onChange={e => props.useRecruiter.setCountry_id(e.target.value) ?? null} required>
                                    {
                                        props.countries.map(country => {
                                            return (country.name === "Canada" && 
                                            <option key={Math.random()} value={country.id ?? ''}>
                                                {country.name}
                                            </option>)
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                        <div className='col-12 col-sm-6 mt-4' style={{transform: 'translateY(3px'}}>
                            <div className='form-group'>
                                <button disabled={props.isDisabled ?? false} type='button' 
                                className='btn btn-primary btn-block rounded-pill' onClick={props.handleFormSubmit}>
                                    <span>{props.isDisabled ? "Chargement..." : 'Enregistrer'}</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>

    )
}