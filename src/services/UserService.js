import { Api } from './Api';

const  ENPOINTS = {
    User: 'recruiter/users',
};

const getAll = signal => {
    return Api.get(ENPOINTS.User, signal)
}

const getQualified = (params, signal) => {
    const searchParams = params.job_title_id ? `&job_title_id=${params.job_title_id}` : '';
    return Api.get(`${ENPOINTS.User}/qualified?page=${params?.page ?? 1}${searchParams}`, signal)
}

const getById = (id, signal) => {
    return Api.get(`${ENPOINTS.User}/${id}`, signal);
}

const create = (payload, signal) => {
    return Api.post(ENPOINTS.User, payload, signal)
}

const update = (id, payload, signal) => {
    return Api.put(`${ENPOINTS.User}/${id}`, payload, signal)
}
const destroy = (id, signal) => {
    return Api.erase(`${ENPOINTS.User}/${id}`, signal)
}

export const UserService = {
    getAll,
    getQualified,
    getById,
    create,
    update,
    destroy
}