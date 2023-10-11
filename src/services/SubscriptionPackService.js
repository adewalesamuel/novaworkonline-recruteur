import { Api } from './Api';

const  ENPOINTS = {
    SubscriptionPack: 'subscriptionpacks',
};

const getAll = signal => {
    return Api.get(ENPOINTS.SubscriptionPack, signal)
}

const getById = (id, signal) => {
    return Api.get(`${ENPOINTS.SubscriptionPack}/${id}`, signal);
}

const create = (payload, signal) => {
    return Api.post(ENPOINTS.SubscriptionPack, payload, signal)
}

const update = (id, payload, signal) => {
    return Api.put(`${ENPOINTS.SubscriptionPack}/${id}`, payload, signal)
}
const destroy = (id, signal) => {
    return Api.erase(`${ENPOINTS.SubscriptionPack}/${id}`, signal)
}

export const SubscriptionPackService = {
    getAll,
    getById,
    create,
    update,
    destroy
}