import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { AppRoutes, RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector';

type CheckAuthProps = {
    children: ReactElement;
    isAuthOnly?: boolean;
}

export const CheckAuth = ({ isAuthOnly, children }: CheckAuthProps) => {
    const username = useAppSelector((state) => state?.USER?.authData?.username);

    if (isAuthOnly && !username) {
        return <Navigate to={RoutePath[AppRoutes.MAIN]} />;
    }

    return children;
};
