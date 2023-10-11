import { Components } from '..'

export function UserCourseForm(props) {
    return (
        <form className='form' disabled={props.isDisabled ?? false}
        onSubmit={props.handleFormSubmit ?? null}>
            <div className='row'>
                <div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='progress'>Progress</label>
                        <input className='form-control' type='number' id='progress' name='progress' 
                        placeholder='Progress' value={props.useUserCourse.progress ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useUserCourse.setProgress(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='course_id'>Course_id</label>
                        <select className='select2 form-control' id='course_id' name='course_id' value={props.useUserCourse.course_id ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useUserCourse.setCourse_id(e.target.value) ?? null} required>
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
                        <select className='select2 form-control' id='user_id' name='user_id' value={props.useUserCourse.user_id ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useUserCourse.setUser_id(e.target.value) ?? null} required>
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