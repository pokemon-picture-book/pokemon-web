import http from '@/plugins/http/api';
import { GameVersionGroupResponse } from '@/types/plugins/http/api/game-version-groups';

export default {
    findAll: async (lang: string, supported: boolean) => {
        return http
            .get<GameVersionGroupResponse[]>('game-version-groups', { params: { lang, supported } })
            .catch((err) => {
                throw err;
            });
    }
};
