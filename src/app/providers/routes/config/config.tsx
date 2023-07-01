import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { TestPage } from "pages/TestPage";
import { RouteProps } from "react-router-dom";
import { AppRoutes, RoutePath } from "shared/config/routeConfig/routeConfig";

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        element: <MainPage />,
        path: RoutePath[AppRoutes.MAIN],
    },
    [AppRoutes.ABOUT]: {
        element: <AboutPage />,
        path: RoutePath[AppRoutes.ABOUT],
    },
    [AppRoutes.TEST]: {
        element: <TestPage />,
        path: RoutePath[AppRoutes.TEST],
    },
}