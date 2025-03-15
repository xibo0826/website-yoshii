import api from './config';

export const getUsedItemTypes = () => {
    return api.get('/usedItemTypeList');
};

export const getUsedItemList = (type) => {
    return api.get('/goodList', {
        params: { type }
    });
};

export const getUsedItemType = (type) => {
    return api.get('/goodType', {
        params: { type }
    });
}; 