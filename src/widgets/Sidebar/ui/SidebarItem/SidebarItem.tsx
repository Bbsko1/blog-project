import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector';
import { SidebarItemType } from '../../model/items';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
    const { t } = useTranslation();
    const userAuth = useAppSelector((state) => state.USER.authData);

    if (item?.isAuthOnly && !userAuth) {
        return null;
    }

    return (
        <AppLink key={item.path} className={classNames(cls.link, { [cls.collapse]: collapsed })} to={item.path}>
            <item.Icon />
            <span className={cls.linkText}>
                { t(item.title) }
            </span>
        </AppLink>
    );
});
