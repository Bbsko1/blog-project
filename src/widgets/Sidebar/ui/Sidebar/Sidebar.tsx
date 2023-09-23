import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { Button, ButtonThemes } from 'shared/ui/Button/Button';
import AboutIcon from 'shared/assets/icons/about-page.svg';
import MainIcon from 'shared/assets/icons/main-page.svg';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
    isCollapsed?: boolean;
}

export const Sidebar = ({ className, isCollapsed = false }: SidebarProps) => {
    const [collapse, setCollapse] = useState(isCollapsed);
    const { t } = useTranslation();

    const toggle = () => {
        setCollapse((prev) => !prev);
    };

    return (
        <div
            className={classNames(cls.Sidebar, { [cls.collapse]: collapse }, [className])}
            data-testid="sidebar"
        >
            <Button
                data-testid="toggle-btn"
                className={cls.collapseBtn}
                size="L"
                square
                theme={ButtonThemes.BACKGROUND_INVERTED}
                onClick={toggle}
            >
                {collapse ? '>' : '<'}
            </Button>

            <div className={cls.navigation}>
                <AppLink className={cls.link} to={RoutePath.main}>
                    <MainIcon />
                    <span className={cls.linkText}>
                        {t('MainPageTitle')}
                    </span>
                </AppLink>
                <AppLink className={cls.link} to={RoutePath.about}>
                    <AboutIcon />
                    <span className={cls.linkText}>
                        {t('AboutPage')}
                    </span>
                </AppLink>
            </div>

            <div className={cls.switchers}>
                <ThemeSwitcher className={cls.themeSwitcher} />
                <LangSwitcher short={collapse} />
            </div>
        </div>
    );
};
