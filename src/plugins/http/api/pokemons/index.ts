import http from '@/plugins/http/api';
import { PokemonResponse } from '@/types/plugins/http/api/pokemons';

export default {
    findAllByLangAndGameAndRegions: async (lang: string, game: string, regions: string[]) => {
        return http
            .get<PokemonResponse>('pokemons', { params: { lang, game, regions } })
            .catch((err) => {
                throw err;
            });
    }
};
