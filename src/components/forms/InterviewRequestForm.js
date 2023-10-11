import { Components } from '..'

export function InterviewRequestForm(props) {
    return (
        <form className='form' disabled={props.isDisabled ?? false}
        onSubmit={props.handleFormSubmit ?? null}>
            <div className='row'>
                <div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='status'>Status</label>
                        <input className='form-control' type='text' id='status' name='status' 
                        placeholder='Status' value={props.useInterviewRequest.status ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useInterviewRequest.setStatus(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='recruteur_id'>Recruteur_id</label>
                        <select className='select2 form-control' id='recruteur_id' name='recruteur_id' value={props.useInterviewRequest.recruteur_id ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useInterviewRequest.setRecruteur_id(e.target.value) ?? null} required>
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
                        <label htmlFor='user_id'>User_id</label>
                        <select className='select2 form-control' id='user_id' name='user_id' value={props.useInterviewRequest.user_id ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useInterviewRequest.setUser_id(e.target.value) ?? null} required>
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
                        <label htmlFor='slug'>Slug</label>
                        <input className='form-control' type='text' id='slug' name='slug' 
                        placeholder='Slug' value={props.useInterviewRequest.slug ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useInterviewRequest.setSlug(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='description'>Description</label>
                        <input className='form-control' type='text' id='description' name='description' 
                        placeholder='Description' value={props.useInterviewRequest.description ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useInterviewRequest.setDescription(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='recruiter_id'>Recruiter_id</label>
                        <select className='select2 form-control' id='recruiter_id' name='recruiter_id' value={props.useInterviewRequest.recruiter_id ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useInterviewRequest.setRecruiter_id(e.target.value) ?? null} required>
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