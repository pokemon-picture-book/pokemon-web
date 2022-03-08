import { initialize, mswDecorator } from 'msw-storybook-addon';
// import style
import '@/assets/style/plugins';
import '@/assets/style/base.scss';

// Initialize MSW
initialize();

// Provide the MSW addon decorator globally
export const decorators = [mswDecorator];

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/
        }
    }
};
