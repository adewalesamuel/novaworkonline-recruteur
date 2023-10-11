import { Api } from './Api';

const  ENPOINTS = {
    UserTest: 'usertests',
};

const getAll = signal => {
    return Api.get(ENPOINTS.UserTest, signal)
}

const getById = (id, signal) => {
    return Api.get(`${ENPOINTS.UserTest}/${id}`, signal);
}

const create = (payload, signal) => {
    return Api.post(ENPOINTS.UserTest, payload, signal)
}

const update = (id, payload, signal) => {
    return Api.put(`${ENPOINTS.UserTest}/${id}`, payload, signal)
}
const destroy = (id, signal) => {
    return Api.erase(`${ENPOINTS.UserTest}/${id}`, signal)
}

export const UserTestService = {
    getAll,
    getById,
    create,
    update,
    destroy
}