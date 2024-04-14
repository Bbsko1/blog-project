import { AboutPage } from 'pages/AboutPage';
import { ArticlesDetailPage } from 'pages/ArticlesDetailPage';
import { ArticlesPage } from 'pages/ArticlesPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';
import { ReactElement } from 'react';
import { RouteProps } from 'react-router-dom';
import { AppRoutes, RoutePath } from 'shared/config/routeConfig/routeConfig';

interface CustomRouteProps extends RouteProps {
    isAuthOnly?: boolean;
    element: ReactElement;
}

export const routeConfig: Record<AppRoutes, CustomRouteProps> = {
    [AppRoutes.MAIN]: {
        element: <MainPage />,
        path: RoutePath[AppRoutes.MAIN],
    },
    [AppRoutes.ABOUT]: {
        element: <AboutPage />,
        path: RoutePath[AppRoutes.ABOUT],
    },
    [AppRoutes.PROFILE]: {
        element: <ProfilePage />,
        path: RoutePath[AppRoutes.PROFILE],
        isAuthOnly: true,
    },
    [AppRoutes.ARTICLES]: {
        element: <ArticlesPage />,
        path: RoutePath[AppRoutes.ARTICLES],
        isAuthOnly: true,
    },
    [AppRoutes.ARTICLES_DETAIL]: {
        element: <ArticlesDetailPage />,
        path: `${RoutePath[AppRoutes.ARTICLES_DETAIL]}/:id`,
        isAuthOnly: true,
    },
    // last
    [AppRoutes.NOT_FOUND]: {
        element: <NotFoundPage />,
        path: RoutePath[AppRoutes.NOT_FOUND],
    },
};
