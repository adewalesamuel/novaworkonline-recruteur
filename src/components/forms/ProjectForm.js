import { Link } from "react-router-dom";

export function ProjectForm(props) {
    return (
        <form className='form' disabled={props.isDisabled ?? false}
        onSubmit={props.handleFormSubmit ?? null}>
            <div className='row'>
                <div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='name'>Name</label>
                        <input className='form-control' type='text' id='name' name='name' 
                        placeholder='Name' value={props.useProject.name ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useProject.setName(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='description'>Description</label>
                        <textarea className='form-control' id='description' name='description' 
                        placeholder='Description' value={props.useProject.description ?? ''}
                        disabled={props.isDisabled} rows={4} onChange={ e => 
                        props.useProject.setDescription(e.target.value) ?? null} required></textarea>
                    </div>
                </div>
				
                <div className='col-12 text-right'>
                    <Link className='btn btn-light mr-2' to='/projets'>
                        <span>Annuler</span>
                    </Link>
                    <button disabled={props.isDisabled ?? false} type='button' className='btn btn-primary' 
                    onClick={props.handleFormSubmit}>
                        <span>Enregistrer</span>
                    </button>
                </div>
            </div>
        </form>
    )
}