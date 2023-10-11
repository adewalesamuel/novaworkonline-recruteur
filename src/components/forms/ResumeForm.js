import { Components } from '..'

export function ResumeForm(props) {
    return (
        <form className='form' disabled={props.isDisabled ?? false}
        onSubmit={props.handleFormSubmit ?? null}>
            <div className='row'>
                <div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='content'>Content</label>
                        <input className='form-control' type='text' id='content' name='content' 
                        placeholder='Content' value={props.useResume.content ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useResume.setContent(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='params'>Params</label>
                        <input className='form-control' type='text' id='params' name='params' 
                        placeholder='Params' value={props.useResume.params ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useResume.setParams(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='user_id'>User_id</label>
                        <select className='select2 form-control' id='user_id' name='user_id' value={props.useResume.user_id ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useResume.setUser_id(e.target.value) ?? null} required>
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