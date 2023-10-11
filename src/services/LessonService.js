import { Api } from './Api';

const  ENPOINTS = {
    Lesson: 'lessons',
};

const getAll = signal => {
    return Api.get(ENPOINTS.Lesson, signal)
}

const getById = (id, signal) => {
    return Api.get(`${ENPOINTS.Lesson}/${id}`, signal);
}

const create = (payload, signal) => {
    return Api.post(ENPOINTS.Lesson, payload, signal)
}

const update = (id, payload, signal) => {
    return Api.put(`${ENPOINTS.Lesson}/${id}`, payload, signal)
}
const destroy = (id, signal) => {
    return Api.erase(`${ENPOINTS.Lesson}/${id}`, signal)
}

export const LessonService = {
    getAll,
    getById,
    create,
    update,
    destroy
}