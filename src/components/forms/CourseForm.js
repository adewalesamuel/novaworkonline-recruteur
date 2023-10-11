import { Components } from '..'

export function CourseForm(props) {
    return (
        <form className='form' disabled={props.isDisabled ?? false}
        onSubmit={props.handleFormSubmit ?? null}>
            <div className='row'>
                <div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='name'>Name</label>
                        <input className='form-control' type='text' id='name' name='name' 
                        placeholder='Name' value={props.useCourse.name ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useCourse.setName(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='slug'>Slug</label>
                        <input className='form-control' type='text' id='slug' name='slug' 
                        placeholder='Slug' value={props.useCourse.slug ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useCourse.setSlug(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='description'>Description</label>
                        <input className='form-control' type='text' id='description' name='description' 
                        placeholder='Description' value={props.useCourse.description ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useCourse.setDescription(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='estimated_length'>Estimated_length</label>
                        <input className='form-control' type='text' id='estimated_length' name='estimated_length' 
                        placeholder='Estimated_length' value={props.useCourse.estimated_length ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useCourse.setEstimated_length(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='lesson_length'>Lesson_length</label>
                        <input className='form-control' type='number' id='lesson_length' name='lesson_length' 
                        placeholder='Lesson_length' value={props.useCourse.lesson_length ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useCourse.setLesson_length(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='cover_img_url'>Cover_img_url</label>
                        <input className='form-control' type='text' id='cover_img_url' name='cover_img_url' 
                        placeholder='Cover_img_url' value={props.useCourse.cover_img_url ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useCourse.setCover_img_url(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='author'>Author</label>
                        <input className='form-control' type='text' id='author' name='author' 
                        placeholder='Author' value={props.useCourse.author ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useCourse.setAuthor(e.target.value) ?? null} required/>
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