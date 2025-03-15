import api from './config';

export const getBusinessList = () => {
    return api.get('/businesses').then(response => {
        if (response && response.code === 1) {
            return response.data;
        }
        throw new Error(response?.message || 'Failed to fetch business list');
    });
}; 