import { Api } from './Api';

const  ENPOINTS = {
    InterviewRequest: 'recruiter/interview-requests',
};

const getAll = (params, signal) => {
    return Api.get(`${ENPOINTS.InterviewRequest}?page=${params?.page ?? 1}`, signal)
}

const getById = (id, signal) => {
    return Api.get(`${ENPOINTS.InterviewRequest}/${id}`, signal);
}

const create = (payload, signal) => {
    return Api.post(ENPOINTS.InterviewRequest, payload, signal)
}

const reject = (id, payload, signal) => {
    return Api.post(`${ENPOINTS.InterviewRequest}/${id}/reject`, payload, signal)
}

const update = (id, payload, signal) => {
    return Api.put(`${ENPOINTS.InterviewRequest}/${id}`, payload, signal)
}
const destroy = (id, signal) => {
    return Api.erase(`${ENPOINTS.InterviewRequest}/${id}`, signal)
}

export const InterviewRequestService = {
    getAll,
    getById,
    create,
    update,
    reject,
    destroy
}