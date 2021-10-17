import axios from 'axios';
import config from '@/config';

const http = axios.create({
    baseURL: config.API_BASE_URL
});

http.interceptors.request.use(
    async (requestConfig) => {
        // header などの共通設定を記述する
        return {
            ...requestConfig
        };
    },
    (error) => {
        throw error;
    }
);

export default http;
