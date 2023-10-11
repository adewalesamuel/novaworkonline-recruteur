import { Api } from './Api';

const  ENPOINTS = {
    Course: 'courses',
};

const getAll = signal => {
    return Api.get(ENPOINTS.Course, signal)
}

const getById = (id, signal) => {
    return Api.get(`${ENPOINTS.Course}/${id}`, signal);
}

const create = (payload, signal) => {
    return Api.post(ENPOINTS.Course, payload, signal)
}

const update = (id, payload, signal) => {
    return Api.put(`${ENPOINTS.Course}/${id}`, payload, signal)
}
const destroy = (id, signal) => {
    return Api.erase(`${ENPOINTS.Course}/${id}`, signal)
}

export const CourseService = {
    getAll,
    getById,
    create,
    update,
    destroy
}