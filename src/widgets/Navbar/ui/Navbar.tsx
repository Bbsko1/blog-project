import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { memo, useState } from 'react';
import { AuthModal } from 'features/Auth';
import { useSelector } from 'react-redux';
import { useUserAuthData, userActions } from 'entities/User';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const authData = useSelector(useUserAuthData);
    const dispatch = useAppDispatch();

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    const logout = () => {
        dispatch(userActions.logout());
        setIsOpen(false);
    };

    if (authData) {
        return (
            <div className={classNames(className, {}, [cls.navbar])}>
                <Button theme="clear" onClick={logout}>
                    {t('Logout')}
                </Button>
            </div>
        );
    }

    return (
        <div className={classNames(className, {}, [cls.navbar])}>
            <Button theme="clear" onClick={toggleModal}>
                {t('Login')}
            </Button>

            <AuthModal closeModal={toggleModal} isOpen={isOpen} />
        </div>
    );
});
