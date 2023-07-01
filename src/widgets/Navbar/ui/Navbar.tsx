import { classNames } from "shared/lib/classNames";
import cls from './Navbar.module.scss'
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={classNames(className, {}, [cls.navbar])}>
            <div className={cls.links}>
                <AppLink to={RoutePath.main}>Main Page</AppLink>
                <AppLink to={RoutePath.about} theme={'inverted'}>About Page</AppLink>
                <AppLink to={RoutePath.test}>Test Page</AppLink>
            </div>
        </div>
    );
}