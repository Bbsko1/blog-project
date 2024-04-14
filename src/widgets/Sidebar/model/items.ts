import React from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
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
        path: RoutePath.main,
        Icon: MainIcon,
    },
    {
        title: 'AboutPage',
        path: RoutePath.about,
        Icon: AboutIcon,
    },
    {
        title: 'ProfilePageTitle',
        path: RoutePath.profile,
        Icon: ProfileIcon,
        isAuthOnly: true,
    },

];
