export const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000';
export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || 'My App';
export const APP_DESCRIPTION = process.env.NEXT_PUBLIC_APP_DESCRIPTION || 'My App Description';
export const APP_LOGO = process.env.NEXT_PUBLIC_APP_LOGO || '/logo.svg';
export const APP_LOGO_ALT = process.env.NEXT_PUBLIC_APP_LOGO_ALT || 'Logo';
export const APP_FAVICON = process.env.NEXT_PUBLIC_APP_FAVICON || '/favicon.ico';
export const APP_THEME_COLOR = process.env.NEXT_PUBLIC_APP_THEME_COLOR || '#000000';
export const ITEMS_PER_PAGE = Number(process.env.ITEMS_PER_PAGE) || 5;