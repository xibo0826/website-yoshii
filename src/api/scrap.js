import api from './config';

export const getScrapTypes = () => {
    return api.get('/scrapTypeList');
};

export const getScrapList = (type) => {
    return api.get('/goodList', {
        params: { type }
    });
};

export const getScrapType = (type) => {
    return api.get('/goodType', {
        params: { type }
    });
}; 