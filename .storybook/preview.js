import { app } from '@storybook/vue3';
import { initialize, mswDecorator } from 'msw-storybook-addon';
import { withScreenshot } from 'storycap';
import { createPinia } from 'pinia';
// import style
import '@/assets/style/plugins';
import '@/assets/style/base.scss';

// Initialize MSW
initialize({
    onUnhandledRequest: 'bypass'
});

app.use(createPinia());

// Provide the MSW addon decorator globally
export const decorators = [mswDecorator, withScreenshot];

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/
        }
    },
    // Global parameter is optional.
    screenshot: {
        // Put global screenshot parameters(e.g. viewport)
        viewports: {
            pc: {
                width: 1024,
                height: 768
            }
            // mobile: 'iPhone 6' // multi view port
        }
    }
};
