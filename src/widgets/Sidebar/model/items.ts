import React from 'react';
import { AppRoutes, RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/main-page.svg';
import AboutIcon from 'shared/assets/icons/about-page.svg';
import ProfileIcon from 'shared/assets/icons/profile-page.svg';

export interface SidebarItemType {
    path: string;
    title: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
    isAuthOnly?: boolean;
}

export const sidebarItems: SidebarItemType[] = [
    {
        title: 'MainPageTitle',
        path: RoutePath[AppRoutes.MAIN],
        Icon: MainIcon,
    },
    {
        title: 'AboutPage',
        path: RoutePath[AppRoutes.ABOUT],
        Icon: AboutIcon,
    },
    {
        title: 'ProfilePageTitle',
        path: RoutePath[AppRoutes.PROFILE],
        Icon: ProfileIcon,
        isAuthOnly: true,
    },
    {
        title: 'ArticlesPageTitle',
        path: RoutePath[AppRoutes.ARTICLES],
        Icon: ProfileIcon,
        isAuthOnly: true,
    },
];
