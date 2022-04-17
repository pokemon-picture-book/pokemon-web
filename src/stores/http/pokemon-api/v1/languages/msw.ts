import { rest } from 'msw';
import { LanguageResponse } from '@/stores/http/pokemon-api/v1/languages/type';

export const ENDPOINT = 'http://localhost/pokemon-api/v1/languages';

export const commonData: LanguageResponse[] = [
    {
        id: 2,
        name: 'en',
        labelName: 'English'
    },
    {
        id: 1,
        name: 'ja-Hrkt',
        labelName: '日本語'
    }
];

export default rest.get(ENDPOINT, (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(commonData));
});
