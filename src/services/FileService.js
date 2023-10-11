import { Api } from './Api';

const  ENPOINTS = {
    File: 'recruiter/upload',
};

const store = (payload, signal) => {
    return Api.postFormData(ENPOINTS.File, payload, signal)
}

export const FileService = {
    store
}