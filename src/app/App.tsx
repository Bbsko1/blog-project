import './styles/index.scss';
import { classNames } from "shared/lib/classNames";
import { useTheme } from "./providers/ThemeProvider";
import { AppRoute } from './providers/routes';
import { Sidebar } from 'widgets/Sidebar';
import { Navbar } from 'widgets/Navbar';
import { Suspense } from 'react';


function App() {
    const {theme, toggleTheme} = useTheme();

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