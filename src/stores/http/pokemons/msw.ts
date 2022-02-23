import { rest } from 'msw';
import { PokemonResponse } from '@/stores/http/pokemons/type';

export const ENDPOINT = 'http://localhost/pokemon-api/v1/pokemons';

export const commonData: PokemonResponse = {
    hits: 50,
    data: [
        {
            id: 1,
            imageColor: 'green',
            name: 'Bulbasaur',
            gameImagePath: '/001/rgby/001_rg.png',
            types: [
                {
                    code: 'grass',
                    name: 'Grass'
                },
                {
                    code: 'poison',
                    name: 'Poison'
                }
            ]
        },
        {
            id: 2,
            imageColor: 'green',
            name: 'Bulbasaur',
            gameImagePath: '/001/rgby/001_rg.png',
            types: [
                {
                    code: 'grass',
                    name: 'Grass'
                },
                {
                    code: 'poison',
                    name: 'Poison'
                }
            ]
        },
        {
            id: 3,
            imageColor: 'green',
            name: 'Bulbasaur',
            gameImagePath: '/001/rgby/001_rg.png',
            types: [
                {
                    code: 'grass',
                    name: 'Grass'
                },
                {
                    code: 'poison',
                    name: 'Poison'
                }
            ]
        },
        {
            id: 4,
            imageColor: 'green',
            name: 'Bulbasaur',
            gameImagePath: '/001/rgby/001_rg.png',
            types: [
                {
                    code: 'grass',
                    name: 'Grass'
                },
                {
                    code: 'poison',
                    name: 'Poison'
                }
            ]
        },
        {
            id: 5,
            imageColor: 'green',
            name: 'Bulbasaur',
            gameImagePath: '/001/rgby/001_rg.png',
            types: [
                {
                    code: 'grass',
                    name: 'Grass'
                },
                {
                    code: 'poison',
                    name: 'Poison'
                }
            ]
        },
        {
            id: 6,
            imageColor: 'green',
            name: 'Bulbasaur',
            gameImagePath: '/001/rgby/001_rg.png',
            types: [
                {
                    code: 'grass',
                    name: 'Grass'
                },
                {
                    code: 'poison',
                    name: 'Poison'
                }
            ]
        },
        {
            id: 7,
            imageColor: 'green',
            name: 'Bulbasaur',
            gameImagePath: '/001/rgby/001_rg.png',
            types: [
                {
                    code: 'grass',
                    name: 'Grass'
                },
                {
                    code: 'poison',
                    name: 'Poison'
                }
            ]
        },
        {
            id: 8,
            imageColor: 'green',
            name: 'Bulbasaur',
            gameImagePath: '/001/rgby/001_rg.png',
            types: [
                {
                    code: 'grass',
                    name: 'Grass'
                },
                {
                    code: 'poison',
                    name: 'Poison'
                }
            ]
        },
        {
            id: 9,
            imageColor: 'green',
            name: 'Bulbasaur',
            gameImagePath: '/001/rgby/001_rg.png',
            types: [
                {
                    code: 'grass',
                    name: 'Grass'
                },
                {
                    code: 'poison',
                    name: 'Poison'
                }
            ]
        },
        {
            id: 10,
            imageColor: 'green',
            name: 'Bulbasaur',
            gameImagePath: '/001/rgby/001_rg.png',
            types: [
                {
                    code: 'grass',
                    name: 'Grass'
                },
                {
                    code: 'poison',
                    name: 'Poison'
                }
            ]
        },
        {
            id: 11,
            imageColor: 'green',
            name: 'Bulbasaur',
            gameImagePath: '/001/rgby/001_rg.png',
            types: [
                {
                    code: 'grass',
                    name: 'Grass'
                },
                {
                    code: 'poison',
                    name: 'Poison'
                }
            ]
        },
        {
            id: 12,
            imageColor: 'green',
            name: 'Bulbasaur',
            gameImagePath: '/001/rgby/001_rg.png',
            types: [
                {
                    code: 'grass',
                    name: 'Grass'
                },
                {
                    code: 'poison',
                    name: 'Poison'
                }
            ]
        },
        {
            id: 13,
            imageColor: 'green',
            name: 'Bulbasaur',
            gameImagePath: '/001/rgby/001_rg.png',
            types: [
                {
                    code: 'grass',
                    name: 'Grass'
                },
                {
                    code: 'poison',
                    name: 'Poison'
                }
            ]
        },
        {
            id: 14,
            imageColor: 'green',
            name: 'Bulbasaur',
            gameImagePath: '/001/rgby/001_rg.png',
            types: [
                {
                    code: 'grass',
                    name: 'Grass'
                },
                {
                    code: 'poison',
                    name: 'Poison'
                }
            ]
        },
        {
            id: 15,
            imageColor: 'green',
            name: 'Bulbasaur',
            gameImagePath: '/001/rgby/001_rg.png',
            types: [
                {
                    code: 'grass',
                    name: 'Grass'
                },
                {
                    code: 'poison',
                    name: 'Poison'
                }
            ]
        },
        {
            id: 16,
            imageColor: 'green',
            name: 'Bulbasaur',
            gameImagePath: '/001/rgby/001_rg.png',
            types: [
                {
                    code: 'grass',
                    name: 'Grass'
                },
                {
                    code: 'poison',
                    name: 'Poison'
                }
            ]
        },
        {
            id: 17,
            imageColor: 'green',
            name: 'Bulbasaur',
            gameImagePath: '/001/rgby/001_rg.png',
            types: [
                {
                    code: 'grass',
                    name: 'Grass'
                },
                {
                    code: 'poison',
                    name: 'Poison'
                }
            ]
        },
        {
            id: 18,
            imageColor: 'green',
            name: 'Bulbasaur',
            gameImagePath: '/001/rgby/001_rg.png',
            types: [
                {
                    code: 'grass',
                    name: 'Grass'
                },
                {
                    code: 'poison',
                    name: 'Poison'
                }
            ]
        },
        {
            id: 19,
            imageColor: 'green',
            name: 'Bulbasaur',
            gameImagePath: '/001/rgby/001_rg.png',
            types: [
                {
                    code: 'grass',
                    name: 'Grass'
                },
                {
                    code: 'poison',
                    name: 'Poison'
                }
            ]
        },
        {
            id: 20,
            imageColor: 'green',
            name: 'Bulbasaur',
            gameImagePath: '/001/rgby/001_rg.png',
            types: [
                {
                    code: 'grass',
                    name: 'Grass'
                },
                {
                    code: 'poison',
                    name: 'Poison'
                }
            ]
        },
        {
            id: 21,
            imageColor: 'green',
            name: 'Bulbasaur',
            gameImagePath: '/001/rgby/001_rg.png',
            types: [
                {
                    code: 'grass',
                    name: 'Grass'
                },
                {
                    code: 'poison',
                    name: 'Poison'
                }
            ]
        },
        {
            id: 22,
            imageColor: 'green',
            name: 'Bulbasaur',
            gameImagePath: '/001/rgby/001_rg.png',
            types: [
                {
                    code: 'grass',
                    name: 'Grass'
                },
                {
                    code: 'poison',
                    name: 'Poison'
                }
            ]
        },
        {
            id: 23,
            imageColor: 'green',
            name: 'Bulbasaur',
            gameImagePath: '/001/rgby/001_rg.png',
            types: [
                {
                    code: 'grass',
                    name: 'Grass'
                },
                {
                    code: 'poison',
                    name: 'Poison'
                }
            ]
        },
        {
            id: 24,
            imageColor: 'green',
            name: 'Bulbasaur',
            gameImagePath: '/001/rgby/001_rg.png',
            types: [
                {
                    code: 'grass',
                    name: 'Grass'
                },
                {
                    code: 'poison',
                    name: 'Poison'
                }
            ]
        },
        {
            id: 25,
            imageColor: 'green',
            name: 'Bulbasaur',
            gameImagePath: '/001/rgby/001_rg.png',
            types: [
                {
                    code: 'grass',
                    name: 'Grass'
                },
                {
                    code: 'poison',
                    name: 'Poison'
                }
            ]
        },
        {
            id: 26,
            imageColor: 'green',
            name: 'Bulbasaur',
            gameImagePath: '/001/rgby/001_rg.png',
            types: [
                {
                    code: 'grass',
                    name: 'Grass'
                },
                {
                    code: 'poison',
                    name: 'Poison'
                }
            ]
        },
        {
            id: 27,
            imageColor: 'green',
            name: 'Bulbasaur',
            gameImagePath: '/001/rgby/001_rg.png',
            types: [
                {
                    code: 'grass',
                    name: 'Grass'
                },
                {
                    code: 'poison',
                    name: 'Poison'
                }
            ]
        },
        {
            id: 28,
            imageColor: 'green',
            name: 'Bulbasaur',
            gameImagePath: '/001/rgby/001_rg.png',
            types: [
                {
                    code: 'grass',
                    name: 'Grass'
                },
                {
                    code: 'poison',
                    name: 'Poison'
                }
            ]
        },
        {
            id: 29,
            imageColor: 'green',
            name: 'Bulbasaur',
            gameImagePath: '/001/rgby/001_rg.png',
            types: [
                {
                    code: 'grass',
                    name: 'Grass'
                },
                {
                    code: 'poison',
                    name: 'Poison'
                }
            ]
        },
        {
            id: 30,
            imageColor: 'green',
            name: 'Bulbasaur',
            gameImagePath: '/001/rgby/001_rg.png',
            types: [
                {
                    code: 'grass',
                    name: 'Grass'
                },
                {
                    code: 'poison',
                    name: 'Poison'
                }
            ]
        },
        {
            id: 31,
            imageColor: 'green',
            name: 'Bulbasaur',
            gameImagePath: '/001/rgby/001_rg.png',
            types: [
                {
                    code: 'grass',
                    name: 'Grass'
                },
                {
                    code: 'poison',
                    name: 'Poison'
                }
            ]
        },
        {
            id: 32,
            imageColor: 'green',
            name: 'Bulbasaur',
            gameImagePath: '/001/rgby/001_rg.png',
            types: [
                {
                    code: 'grass',
                    name: 'Grass'
                },
                {
                    code: 'poison',
                    name: 'Poison'
                }
            ]
        },
        {
            id: 33,
            imageColor: 'green',
            name: 'Bulbasaur',
            gameImagePath: '/001/rgby/001_rg.png',
            types: [
                {
                    code: 'grass',
                    name: 'Grass'
                },
                {
                    code: 'poison',
                    name: 'Poison'
                }
            ]
        },
        {
            id: 34,
            imageColor: 'green',
            name: 'Bulbasaur',
            gameImagePath: '/001/rgby/001_rg.png',
            types: [
                {
                    code: 'grass',
                    name: 'Grass'
                },
                {
                    code: 'poison',
                    name: 'Poison'
                }
            ]
        },
        {
            id: 35,
            imageColor: 'green',
            name: 'Bulbasaur',
            gameImagePath: '/001/rgby/001_rg.png',
            types: [
                {
                    code: 'grass',
                    name: 'Grass'
                },
                {
                    code: 'poison',
                    name: 'Poison'
                }
            ]
        },
        {
            id: 36,
            imageColor: 'green',
            name: 'Bulbasaur',
            gameImagePath: '/001/rgby/001_rg.png',
            types: [
                {
                    code: 'grass',
                    name: 'Grass'
                },
                {
                    code: 'poison',
                    name: 'Poison'
                }
            ]
        },
        {
            id: 37,
            imageColor: 'green',
            name: 'Bulbasaur',
            gameImagePath: '/001/rgby/001_rg.png',
            types: [
                {
                    code: 'grass',
                    name: 'Grass'
                },
                {
                    code: 'poison',
                    name: 'Poison'
                }
            ]
        },
        {
            id: 38,
            imageColor: 'green',
            name: 'Bulbasaur',
            gameImagePath: '/001/rgby/001_rg.png',
            types: [
                {
                    code: 'grass',
                    name: 'Grass'
                },
                {
                    code: 'poison',
                    name: 'Poison'
                }
            ]
        },
        {
            id: 39,
            imageColor: 'green',
            name: 'Bulbasaur',
            gameImagePath: '/001/rgby/001_rg.png',
            types: [
                {
                    code: 'grass',
                    name: 'Grass'
                },
                {
                    code: 'poison',
                    name: 'Poison'
                }
            ]
        },
        {
            id: 40,
            imageColor: 'green',
            name: 'Bulbasaur',
            gameImagePath: '/001/rgby/001_rg.png',
            types: [
                {
                    code: 'grass',
                    name: 'Grass'
                },
                {
                    code: 'poison',
                    name: 'Poison'
                }
            ]
        },
        {
            id: 41,
            imageColor: 'green',
            name: 'Bulbasaur',
            gameImagePath: '/001/rgby/001_rg.png',
            types: [
                {
                    code: 'grass',
                    name: 'Grass'
                },
                {
                    code: 'poison',
                    name: 'Poison'
                }
            ]
        },
        {
            id: 42,
            imageColor: 'green',
            name: 'Bulbasaur',
            gameImagePath: '/001/rgby/001_rg.png',
            types: [
                {
                    code: 'grass',
                    name: 'Grass'
                },
                {
                    code: 'poison',
                    name: 'Poison'
                }
            ]
        },
        {
            id: 43,
            imageColor: 'green',
            name: 'Bulbasaur',
            gameImagePath: '/001/rgby/001_rg.png',
            types: [
                {
                    code: 'grass',
                    name: 'Grass'
                },
                {
                    code: 'poison',
                    name: 'Poison'
                }
            ]
        },
        {
            id: 44,
            imageColor: 'green',
            name: 'Bulbasaur',
            gameImagePath: '/001/rgby/001_rg.png',
            types: [
                {
                    code: 'grass',
                    name: 'Grass'
                },
                {
                    code: 'poison',
                    name: 'Poison'
                }
            ]
        },
        {
            id: 45,
            imageColor: 'green',
            name: 'Bulbasaur',
            gameImagePath: '/001/rgby/001_rg.png',
            types: [
                {
                    code: 'grass',
                    name: 'Grass'
                },
                {
                    code: 'poison',
                    name: 'Poison'
                }
            ]
        },
        {
            id: 46,
            imageColor: 'green',
            name: 'Bulbasaur',
            gameImagePath: '/001/rgby/001_rg.png',
            types: [
                {
                    code: 'grass',
                    name: 'Grass'
                },
                {
                    code: 'poison',
                    name: 'Poison'
                }
            ]
        },
        {
            id: 47,
            imageColor: 'green',
            name: 'Bulbasaur',
            gameImagePath: '/001/rgby/001_rg.png',
            types: [
                {
                    code: 'grass',
                    name: 'Grass'
                },
                {
                    code: 'poison',
                    name: 'Poison'
                }
            ]
        },
        {
            id: 48,
            imageColor: 'green',
            name: 'Bulbasaur',
            gameImagePath: '/001/rgby/001_rg.png',
            types: [
                {
                    code: 'grass',
                    name: 'Grass'
                },
                {
                    code: 'poison',
                    name: 'Poison'
                }
            ]
        },
        {
            id: 49,
            imageColor: 'green',
            name: 'Bulbasaur',
            gameImagePath: '/001/rgby/001_rg.png',
            types: [
                {
                    code: 'grass',
                    name: 'Grass'
                },
                {
                    code: 'poison',
                    name: 'Poison'
                }
            ]
        },
        {
            id: 50,
            imageColor: 'green',
            name: 'Bulbasaur',
            gameImagePath: '/001/rgby/001_rg.png',
            types: [
                {
                    code: 'grass',
                    name: 'Grass'
                },
                {
                    code: 'poison',
                    name: 'Poison'
                }
            ]
        }
    ]
};

export default rest.get(ENDPOINT, (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(commonData));
});
