import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { Button, ButtonThemes } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapse, setCollapse] = useState(false);
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
                size="XL"
                square
                theme={ButtonThemes.BACKGROUND_INVERTED}
                onClick={toggle}
            >
                {collapse ? '>' : '<'}
            </Button>

            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
};
