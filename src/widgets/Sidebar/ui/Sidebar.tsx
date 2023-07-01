import { classNames } from 'shared/lib/classNames';
import cls from './Sidebar.module.scss';
import { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapse, setCollapse] = useState(false);

    const toggle = () => {
        setCollapse(prev => !prev);
    }

    return (
        <div className={classNames(cls.Sidebar, {[cls.collapse]: collapse}, [className])}>
            <button onClick={toggle}>Toggle</button>

            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    )
}