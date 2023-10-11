import { Api } from './Api';

const  ENPOINTS = {
    UserCourse: 'usercourses',
};

const getAll = signal => {
    return Api.get(ENPOINTS.UserCourse, signal)
}

const getById = (id, signal) => {
    return Api.get(`${ENPOINTS.UserCourse}/${id}`, signal);
}

const create = (payload, signal) => {
    return Api.post(ENPOINTS.UserCourse, payload, signal)
}

const update = (id, payload, signal) => {
    return Api.put(`${ENPOINTS.UserCourse}/${id}`, payload, signal)
}
const destroy = (id, signal) => {
    return Api.erase(`${ENPOINTS.UserCourse}/${id}`, signal)
}

export const UserCourseService = {
    getAll,
    getById,
    create,
    update,
    destroy
}