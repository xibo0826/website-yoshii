import api from './config';

export function getNewsList() {
    return api.get('/noticeList').then(response => {
        if (response && response.code === 1) {
            return response.data;
        }
        throw new Error(response?.message || 'Failed to fetch news');
    });
} 