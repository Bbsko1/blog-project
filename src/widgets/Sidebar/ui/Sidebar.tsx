import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { Button } from 'shared/ui/Button/Button';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapse, setCollapse] = useState(false);

    const toggle = () => {
        setCollapse((prev) => !prev);
    };

    return (
        <div className={classNames(cls.Sidebar, { [cls.collapse]: collapse }, [className])}>
            <Button onClick={toggle}>Toggle</Button>

            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
};
