export function EmployeeForm(props) {
    return (
        <form className='form' disabled={props.isDisabled ?? false}
        onSubmit={props.handleFormSubmit ?? null}>
            <div className='row'>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='project_id'>Project</label>
                        <select className='select2 form-control' id='project_id' name='project_id' 
                        value={props.useEmployee.project_id ?? ''}disabled={props.isDisabled} 
                        onChange={ e => props.useEmployee.setProject_id(e.target.value) ?? null} required>
                            <option hidden>Choisissez un projet</option>
                            {
                                props.projects.map(project => {
                                    return (<option key={Math.random()} 
                                    value={project.id ?? ''}>{project.name}</option>)
                                })
                            } 
                        </select>
                    </div>
                </div>
				
                <div className='col-12 text-right'>
                    <button disabled={props.isDisabled ?? false} type='button'
                    className='btn btn-primary' onClick={props.handleFormSubmit}>
                        <span>Enregistrer</span>
                    </button>
                </div>
            </div>
        </form>
    )
}