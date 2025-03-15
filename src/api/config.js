import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api-platform.meiso-shoji.co.jp/yoshii',  // 実際のAPIサーバーのアドレス
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

// レスポンスインターセプター
api.interceptors.response.use(
    response => {
        // APIからのレスポンスを直接返す
        return response.data;
    },
    error => {
        console.error('API Error:', error);
        return Promise.reject(error);
    }
);

export default api; 