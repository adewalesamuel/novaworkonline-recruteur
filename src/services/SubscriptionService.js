import { Api } from './Api';

const  ENPOINTS = {
    Subscription: 'recruiter/subscriptions',
};

const getAll = (params, signal) => {
    return Api.get(`${ENPOINTS.Subscription}?page=${params?.page ?? 1}`, signal)
}

const getById = (id, signal) => {
    return Api.get(`${ENPOINTS.Subscription}/${id}`, signal);
}

const create = (payload, signal) => {
    return Api.post(ENPOINTS.Subscription, payload, signal)
}

const update = (id, payload, signal) => {
    return Api.put(`${ENPOINTS.Subscription}/${id}`, payload, signal)
}
const destroy = (id, signal) => {
    return Api.erase(`${ENPOINTS.Subscription}/${id}`, signal)
}

export const SubscriptionService = {
    getAll,
    getById,
    create,
    update,
    destroy
}