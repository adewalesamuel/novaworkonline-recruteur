import { Components } from '..'

export function JobTitleForm(props) {
    return (
        <form className='form' disabled={props.isDisabled ?? false}
        onSubmit={props.handleFormSubmit ?? null}>
            <div className='row'>
                <div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='name'>Name</label>
                        <input className='form-control' type='text' id='name' name='name' 
                        placeholder='Name' value={props.useJobTitle.name ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useJobTitle.setName(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='slug'>Slug</label>
                        <input className='form-control' type='text' id='slug' name='slug' 
                        placeholder='Slug' value={props.useJobTitle.slug ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useJobTitle.setSlug(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='description'>Description</label>
                        <input className='form-control' type='text' id='description' name='description' 
                        placeholder='Description' value={props.useJobTitle.description ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useJobTitle.setDescription(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='icon_url'>Icon_url</label>
                        <input className='form-control' type='text' id='icon_url' name='icon_url' 
                        placeholder='Icon_url' value={props.useJobTitle.icon_url ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useJobTitle.setIcon_url(e.target.value) ?? null} required/>
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