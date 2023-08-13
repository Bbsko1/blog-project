import { lazy } from 'react';

export const AuthFormLazy = lazy(() => new Promise((resolve) => {
    setTimeout(() => {
        // @ts-ignore
        resolve(import('./AuthForm'));
    }, 1000);
}));
