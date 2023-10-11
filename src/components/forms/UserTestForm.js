import { Components } from '..'

export function UserTestForm(props) {
    return (
        <form className='form' disabled={props.isDisabled ?? false}
        onSubmit={props.handleFormSubmit ?? null}>
            <div className='row'>
                <div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='test_id'>Test_id</label>
                        <input className='form-control' type='text' id='test_id' name='test_id' 
                        placeholder='Test_id' value={props.useUserTest.test_id ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useUserTest.setTest_id(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='user_id'>User_id</label>
                        <input className='form-control' type='text' id='user_id' name='user_id' 
                        placeholder='User_id' value={props.useUserTest.user_id ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useUserTest.setUser_id(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='status'>Status</label>
                        <input className='form-control' type='text' id='status' name='status' 
                        placeholder='Status' value={props.useUserTest.status ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useUserTest.setStatus(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='current_step'>Current_step</label>
                        <input className='form-control' type='number' id='current_step' name='current_step' 
                        placeholder='Current_step' value={props.useUserTest.current_step ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useUserTest.setCurrent_step(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='score'>Score</label>
                        <input className='form-control' type='number' id='score' name='score' 
                        placeholder='Score' value={props.useUserTest.score ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useUserTest.setScore(e.target.value) ?? null} required/>
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