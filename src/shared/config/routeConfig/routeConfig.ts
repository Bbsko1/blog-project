export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    TEST = 'test',
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.TEST]: '/test',
    [AppRoutes.NOT_FOUND]: '*',
};
