import { lazy } from 'react';

export const ProfilePageLazy = lazy(() => new Promise((resolve) => {
    setTimeout(() => {
        // @ts-ignore
        resolve(import('./ProfilePage'));
    }, 1000);
}));
