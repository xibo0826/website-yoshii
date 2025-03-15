import api from './config';

export const getScrapTypes = () => {
    return api.get('/scrapTypesList');
};

export const getScrapList = (type) => {
    return api.get('/scrapList', {
        params: { type }
    });
};

export const getScrapType = (type) => {
    return api.get('/scrapType', {
        params: { type }
    });
}; 