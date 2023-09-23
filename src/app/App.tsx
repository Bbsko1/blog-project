import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Sidebar } from 'widgets/Sidebar';
import { Navbar } from 'widgets/Navbar';
import { Suspense, useEffect } from 'react';
import { userActions } from 'entities/User';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { AppRoute } from './providers/routes';
import { useTheme } from './providers/ThemeProvider';

function App() {
    const { theme } = useTheme();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <Suspense fallback="">
            <div className={classNames('app', {}, [theme])}>
                <Navbar />
                <div className="page-content">
                    <Sidebar />
                    <AppRoute />
                </div>
            </div>
        </Suspense>
    );
}

export default App;
