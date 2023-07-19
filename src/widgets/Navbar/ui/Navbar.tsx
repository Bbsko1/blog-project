import { classNames } from 'shared/lib/classNames/classNames';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(className, {}, [cls.navbar])}>
            <div className={cls.links}>
                <AppLink to={RoutePath.main}>{t('MainPageTitle')}</AppLink>
                <AppLink to={RoutePath.about}>{t('AboutPage')}</AppLink>
            </div>
        </div>
    );
};
