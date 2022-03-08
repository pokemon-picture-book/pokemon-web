import { rest } from 'msw';
import { GameVersionGroupResponse } from '@/stores/http/game-version-groups/type';

export const ENDPOINT = 'http://localhost/pokemon-api/v1/game-version-groups';

const commonData: GameVersionGroupResponse[] = [
    {
        id: 1,
        alias: 'rgby',
        name: 'Red/Blue/Yellow',
        relatedRegions: [
            {
                id: 1,
                name: 'kanto'
            }
        ]
    },
    {
        id: 2,
        alias: 'gsc',
        name: 'Gold/Silver/Crystal',
        relatedRegions: [
            {
                id: 1,
                name: 'kanto'
            },
            {
                id: 2,
                name: 'johto'
            }
        ]
    },
    {
        id: 3,
        alias: 'rse',
        name: 'Ruby/Sapphire/Emerald',
        relatedRegions: [
            {
                id: 1,
                name: 'kanto'
            },
            {
                id: 2,
                name: 'johto'
            },
            {
                id: 3,
                name: 'hoenn'
            }
        ]
    },
    {
        id: 4,
        alias: 'frlg',
        name: 'FireRed/LeafGreen',
        relatedRegions: [
            {
                id: 1,
                name: 'kanto'
            },
            {
                id: 2,
                name: 'johto'
            },
            {
                id: 3,
                name: 'hoenn'
            }
        ]
    },
    {
        id: 5,
        alias: 'dp',
        name: 'Diamond/Pearl',
        relatedRegions: [
            {
                id: 1,
                name: 'kanto'
            },
            {
                id: 2,
                name: 'johto'
            },
            {
                id: 3,
                name: 'hoenn'
            },
            {
                id: 4,
                name: 'sinnoh'
            }
        ]
    },
    {
        id: 6,
        alias: 'pt',
        name: 'Platinum',
        relatedRegions: [
            {
                id: 1,
                name: 'kanto'
            },
            {
                id: 2,
                name: 'johto'
            },
            {
                id: 3,
                name: 'hoenn'
            },
            {
                id: 4,
                name: 'sinnoh'
            }
        ]
    },
    {
        id: 7,
        alias: 'hgss',
        name: 'HeartGold/SoulSilver',
        relatedRegions: [
            {
                id: 1,
                name: 'kanto'
            },
            {
                id: 2,
                name: 'johto'
            },
            {
                id: 3,
                name: 'hoenn'
            },
            {
                id: 4,
                name: 'sinnoh'
            }
        ]
    },
    {
        id: 8,
        alias: 'bw',
        name: 'Black/White',
        relatedRegions: [
            {
                id: 1,
                name: 'kanto'
            },
            {
                id: 2,
                name: 'johto'
            },
            {
                id: 3,
                name: 'hoenn'
            },
            {
                id: 4,
                name: 'sinnoh'
            },
            {
                id: 5,
                name: 'unova'
            }
        ]
    },
    {
        id: 12,
        alias: 'xy',
        name: 'X/Y',
        relatedRegions: [
            {
                id: 1,
                name: 'kanto'
            },
            {
                id: 2,
                name: 'johto'
            },
            {
                id: 3,
                name: 'hoenn'
            },
            {
                id: 4,
                name: 'sinnoh'
            },
            {
                id: 5,
                name: 'unova'
            },
            {
                id: 6,
                name: 'kalos'
            }
        ]
    },
    {
        id: 13,
        alias: 'oras',
        name: 'Omega Ruby/Alpha Sapphire',
        relatedRegions: [
            {
                id: 1,
                name: 'kanto'
            },
            {
                id: 2,
                name: 'johto'
            },
            {
                id: 3,
                name: 'hoenn'
            },
            {
                id: 4,
                name: 'sinnoh'
            },
            {
                id: 5,
                name: 'unova'
            },
            {
                id: 6,
                name: 'kalos'
            }
        ]
    }
];

export default rest.get(ENDPOINT, (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(commonData));
});
