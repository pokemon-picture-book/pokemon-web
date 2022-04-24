import { rest } from 'msw';
import { PokemonStatusResponse } from '@/stores/http/pokemon-api/v1/pokemons/_id/status/type';

export const ENDPOINT = 'http://localhost/pokemon-api/v1/pokemons/:id/status';

export const commonData: PokemonStatusResponse = {
    id: 1,
    name: '選ばれしポケモン',
    status: {
        hp: Math.floor(Math.random() * (255 - 0 + 1) + 0),
        attack: Math.floor(Math.random() * (255 - 0 + 1) + 0),
        defense: Math.floor(Math.random() * (255 - 0 + 1) + 0),
        specialAttack: Math.floor(Math.random() * (255 - 0 + 1) + 0),
        specialDefense: Math.floor(Math.random() * (255 - 0 + 1) + 0),
        speed: Math.floor(Math.random() * (255 - 0 + 1) + 0)
    }
};

export default rest.get(ENDPOINT, (req, res, ctx) => {
    return res(
        ctx.json({
            ...commonData,
            id: req.params.id
        })
    );
});
