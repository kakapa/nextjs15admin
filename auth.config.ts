import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
    pages: {
        signIn: '/login',
    },
    providers: [],
    callbacks: {
        authorized({ auth, request: {nextUrl}}) {
            const isLogged = !!auth?.user;
            const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');

            if(isOnDashboard) {
                if(isLogged) {
                    return true;
                } 
                return false;
            } else if(isLogged) {
                return Response.redirect(new URL('/dashboard', nextUrl));
            }
            return true;
        }
    }
} satisfies NextAuthConfig;