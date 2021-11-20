const config = {
    /* .env* に紐づく */
    API_BASE_URL: import.meta.env.VITE_API_BASE_URL,
    APP_BASE_URL: import.meta.env.VITE_APP_BASE_URL,
    /* ImportMetaEnv に紐づく */
    BASE_URL: import.meta.env.BASE_URL,
    MODE: import.meta.env.MODE,
    DEV: import.meta.env.DEV,
    PROD: import.meta.env.PROD,
    SSR: import.meta.env.SSR
} as const;

export default config;
