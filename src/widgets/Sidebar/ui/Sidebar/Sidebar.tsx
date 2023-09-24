import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { Button, ButtonThemes } from 'shared/ui/Button/Button';
import cls from './Sidebar.module.scss';
import { sidebarItems } from '../../model/items';
import { SidebarItem } from '../SidebarItem/SidebarItem';

interface SidebarProps {
    className?: string;
    isCollapsed?: boolean;
}

export const Sidebar = memo(({ className, isCollapsed = false }: SidebarProps) => {
    const [collapse, setCollapse] = useState(isCollapsed);

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
                {sidebarItems.map((item) => (
                    <SidebarItem key={item.path} item={item} collapsed={collapse} />
                ))}
            </div>

            <div className={cls.switchers}>
                <ThemeSwitcher className={cls.themeSwitcher} />
                <LangSwitcher short={collapse} />
            </div>
        </div>
    );
});
