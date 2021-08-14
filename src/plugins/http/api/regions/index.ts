import http from '@/plugins/http/api';
import { RegionResponse } from '@/types/plugins/http/api/regions';

export default {
    findAll: async (lang: string) => {
        return http
            .get<RegionResponse[]>('regions', { params: { lang } })
            .catch((err) => {
                throw err;
            });
    }
};
