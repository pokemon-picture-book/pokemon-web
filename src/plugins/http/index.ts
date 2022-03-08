import axios from 'axios';

const http = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL
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
