import { rest } from 'msw';
import { RegionResponse } from '@/stores/http/pokemon-api/v1/regions/type';

export const ENDPOINT = 'http://localhost/pokemon-api/v1/regions';

const commonData: RegionResponse[] = [
    {
        id: 1,
        name: 'kanto',
        displayName: 'Kanto',
        relatedGameVersionGroups: [
            {
                id: 3,
                alias: 'rse'
            },
            {
                id: 4,
                alias: 'frlg'
            },
            {
                id: 5,
                alias: 'dp'
            },
            {
                id: 6,
                alias: 'pt'
            },
            {
                id: 7,
                alias: 'hgss'
            },
            {
                id: 8,
                alias: 'bw'
            },
            {
                id: 1,
                alias: 'rgby'
            },
            {
                id: 12,
                alias: 'xy'
            },
            {
                id: 2,
                alias: 'gsc'
            },
            {
                id: 13,
                alias: 'oras'
            }
        ]
    },
    {
        id: 2,
        name: 'johto',
        displayName: 'Johto',
        relatedGameVersionGroups: [
            {
                id: 2,
                alias: 'gsc'
            },
            {
                id: 13,
                alias: 'oras'
            },
            {
                id: 3,
                alias: 'rse'
            },
            {
                id: 4,
                alias: 'frlg'
            },
            {
                id: 5,
                alias: 'dp'
            },
            {
                id: 6,
                alias: 'pt'
            },
            {
                id: 7,
                alias: 'hgss'
            },
            {
                id: 8,
                alias: 'bw'
            },
            {
                id: 12,
                alias: 'xy'
            }
        ]
    },
    {
        id: 3,
        name: 'hoenn',
        displayName: 'Hoenn',
        relatedGameVersionGroups: [
            {
                id: 13,
                alias: 'oras'
            },
            {
                id: 3,
                alias: 'rse'
            },
            {
                id: 4,
                alias: 'frlg'
            },
            {
                id: 5,
                alias: 'dp'
            },
            {
                id: 6,
                alias: 'pt'
            },
            {
                id: 7,
                alias: 'hgss'
            },
            {
                id: 8,
                alias: 'bw'
            },
            {
                id: 12,
                alias: 'xy'
            }
        ]
    },
    {
        id: 4,
        name: 'sinnoh',
        displayName: 'Sinnoh',
        relatedGameVersionGroups: [
            {
                id: 5,
                alias: 'dp'
            },
            {
                id: 6,
                alias: 'pt'
            },
            {
                id: 7,
                alias: 'hgss'
            },
            {
                id: 8,
                alias: 'bw'
            },
            {
                id: 12,
                alias: 'xy'
            },
            {
                id: 13,
                alias: 'oras'
            }
        ]
    },
    {
        id: 5,
        name: 'unova',
        displayName: 'Unova',
        relatedGameVersionGroups: [
            {
                id: 12,
                alias: 'xy'
            },
            {
                id: 13,
                alias: 'oras'
            },
            {
                id: 8,
                alias: 'bw'
            }
        ]
    },
    {
        id: 6,
        name: 'kalos',
        displayName: 'Kalos',
        relatedGameVersionGroups: [
            {
                id: 12,
                alias: 'xy'
            },
            {
                id: 13,
                alias: 'oras'
            }
        ]
    }
];

export default rest.get(ENDPOINT, (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(commonData));
});
