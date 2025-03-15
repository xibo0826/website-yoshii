import api from './config';

export function getNewsList() {
    return api.get('/notices');
} 