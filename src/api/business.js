import api from './config';

export const getBusinessList = () => {
    return api.get('/businesses');
}; 