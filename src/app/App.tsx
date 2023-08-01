import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Sidebar } from 'widgets/Sidebar';
import { Navbar } from 'widgets/Navbar';
import { Suspense } from 'react';
import { AppRoute } from './providers/routes';
import { useTheme } from './providers/ThemeProvider';

function App() {
    const { theme } = useTheme();

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
