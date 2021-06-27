import http from '@/plugins/http/api';
import { LanguageResponse } from '@/types/plugins/http/api/languages';

export default {
    findAll: async () => {
        return http.get<LanguageResponse[]>('languages').catch((err) => {
            throw err;
        });
    }
};
