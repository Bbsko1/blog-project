import { classNames } from 'shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import { memo } from 'react';
import cls from './AppLink.module.scss';

type AppLinkTheme = 'primary' | 'inverted';

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink = memo((props: AppLinkProps) => {
    const {
        to,
        children,
        className,
        theme = 'primary',
        ...otherProps
    } = props;

    return (
        <Link to={to} className={classNames(cls.AppLink, {}, [className, cls[theme]])} {...otherProps}>
            {children}
        </Link>
    );
});
