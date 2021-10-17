const config = {
    /* .env* に紐づく */
    API_BASE_URL: process.env.VITE_API_BASE_URL,
    APP_BASE_URL: process.env.VITE_APP_BASE_URL,
    /* ImportMetaEnv に紐づく */
    BASE_URL: process.env.BASE_URL || '',
    MODE: process.env.MODE || '',
    DEV: process.env.DEV || false,
    PROD: process.env.PROD || false,
    SSR: process.env.SSR || false
} as const;

export default config;
