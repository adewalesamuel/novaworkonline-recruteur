import { Components } from '..'

export function LessonForm(props) {
    return (
        <form className='form' disabled={props.isDisabled ?? false}
        onSubmit={props.handleFormSubmit ?? null}>
            <div className='row'>
                <div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='name'>Name</label>
                        <input className='form-control' type='text' id='name' name='name' 
                        placeholder='Name' value={props.useLesson.name ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useLesson.setName(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='slug'>Slug</label>
                        <input className='form-control' type='text' id='slug' name='slug' 
                        placeholder='Slug' value={props.useLesson.slug ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useLesson.setSlug(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='description'>Description</label>
                        <input className='form-control' type='text' id='description' name='description' 
                        placeholder='Description' value={props.useLesson.description ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useLesson.setDescription(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='content'>Content</label>
                        <input className='form-control' type='text' id='content' name='content' 
                        placeholder='Content' value={props.useLesson.content ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useLesson.setContent(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='type'>Type</label>
                        <input className='form-control' type='text' id='type' name='type' 
                        placeholder='Type' value={props.useLesson.type ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useLesson.setType(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='estimated_length'>Estimated_length</label>
                        <input className='form-control' type='text' id='estimated_length' name='estimated_length' 
                        placeholder='Estimated_length' value={props.useLesson.estimated_length ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useLesson.setEstimated_length(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='cover_img_url'>Cover_img_url</label>
                        <input className='form-control' type='text' id='cover_img_url' name='cover_img_url' 
                        placeholder='Cover_img_url' value={props.useLesson.cover_img_url ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useLesson.setCover_img_url(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='course_id'>Course_id</label>
                        <select className='select2 form-control' id='course_id' name='course_id' value={props.useLesson.course_id ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useLesson.setCourse_id(e.target.value) ?? null} required>
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