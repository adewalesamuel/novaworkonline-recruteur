import { useState } from 'react';
import { Services } from '../services';

export const useResume = () => {
    const [id, setId] = useState('');
	const [content, setContent] = useState('');
	const [params, setParams] = useState('');
	const [user_id, setUser_id] = useState('');

    const [personal_infos, setPersonal_infos] = useState({});
    const [profil, setProfil] = useState('');
    const [education, setEducation] = useState([{}]);
    const [work_experience, setWork_experience] = useState([{}]);
    const [skills, setSkills] = useState([{}]);
	const [interests, setInterests] = useState(['']);
    const [courses, setCourses] = useState([{}]);
    const [extra_activities, setExtra_activities] = useState([{}]);
    const [languages, setLanguages] = useState([{}]);
    const [signature, setSignature] = useState({});
    const [footer, setFooter] = useState('');

    const [errors, setErrors] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);

    const getResume = (signal) => {        
        return Services.ResumeService.show(signal)
        .then(response => {
            fillResume(response.resume);
            setIsDisabled(false);
            return response;
        });
    }

    const createResume = signal => {
        const payload = {
            params,
		    content: JSON.stringify({
                personal_infos,
                profil,
                education,
                work_experience,
                skills,
                interests,
                courses,
                extra_activities,
                languages,
                signature,
                footer
            }),
            user_id,
        };

        return Services.ResumeService.create(JSON.stringify(payload), signal);
    }
    const updateResume = (signal) => {
        const payload = {
            params,
		    content: JSON.stringify({
                personal_infos,
                profil,
                education,
                work_experience,
                skills,
                interests,
                courses,
                extra_activities,
                languages,
                signature,
                footer
            }),
            user_id,
        };

        return Services.ResumeService.update(JSON.stringify(payload), signal);
    }
    const deleteResume = (signal) => {
        return Services.ResumeService.destroy(signal);
    }
    const fillResume = (resume) => {
        let content = {}
        let params = {}
        if (resume.content) content = JSON.parse(resume.content)
        // if (resume.params) params = JSON.parse(resume.params)

        setId(resume.id);
        setContent(resume.content ?? '');
		setParams(resume.params ?? '');
		setUser_id(resume.user_id ?? '');

        setPersonal_infos(content.personal_infos ?? {})
        setProfil(content.profil ?? '')
        setEducation(content.education ?? [{}])
        setWork_experience(content.work_experience ?? [{}])
        setSkills(content.skills ?? [{}])
        setInterests(content.interests ?? [''])
        setCourses(content.courses ?? [{}])
        setExtra_activities(content.extra_activities ?? [{}])
        setLanguages(content.languages ?? [{}])
        setSignature(content.signature ?? {})
        setFooter(content.footer ?? '')
    }
    const emptyResume = () => {
        setId('');
        setContent('');
		setParams('');
		setUser_id('');
		
    }

    return {
        id,
        content,
		params,
		user_id,
        personal_infos,
        profil,
        education,
        work_experience,
        skills,
        interests,
        courses,
        extra_activities,
        languages,
        signature,
        footer,
                
        errors,
        isDisabled,
        setContent,
		setParams,
		setUser_id,
        setPersonal_infos,
        setProfil,
        setEducation,
        setWork_experience,
        setSkills,
        setInterests,
        setCourses,
        setExtra_activities,
        setLanguages,
        setSignature,
        setFooter,
		
        setId,
        setErrors,
        setIsDisabled,
        getResume,
        createResume,
        updateResume,
        deleteResume,
        fillResume,
        emptyResume
    };
}