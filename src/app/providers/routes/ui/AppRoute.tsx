import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from 'widgets/PageLoader';
import { routeConfig } from '../config/config';
import { CheckAuth } from './CheckAuth/CheckAuth';

export const AppRoute = () => {
    return (
        <Suspense fallback={<PageLoader />}>
            <div className="page-wrapper">
                <Routes>
                    {Object.values(routeConfig).map(({ element, path, isAuthOnly }) => (
                        <Route
                            key={path}
                            path={path}
                            element={(
                                <CheckAuth isAuthOnly={isAuthOnly}>
                                    {element}
                                </CheckAuth>
                            )}
                        />
                    ))}
                </Routes>
            </div>
        </Suspense>
    );
};
