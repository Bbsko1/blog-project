export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    TEST = 'test',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.TEST]: '/test',
};
