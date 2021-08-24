import http from '@/plugins/http/api';
import { PokemonResponse } from '@/types/plugins/http/api/pokemons';

export default {
    findAllByLangAndGameAndRegions: async (
        lang: string,
        game: string,
        regions: string[],
        offset: number,
        limit: number
    ) => {
        return http
            .get<PokemonResponse>('pokemons', { params: { lang, game, regions, offset, limit } })
            .catch((err) => {
                throw err;
            });
    }
};
