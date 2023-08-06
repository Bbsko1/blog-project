/* eslint-disable max-len */
/* eslint-disable i18next/no-literal-string */
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonThemes } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { AuthModal } from 'features/Auth';
import { useDispatch, useSelector } from 'react-redux';
import { useUserAuthData, userActions } from 'entities/User';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const authData = useSelector(useUserAuthData);
    const dispatch = useDispatch();

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
                <Button theme={ButtonThemes.CLEAR} onClick={logout}>
                    {t('Logout')}
                </Button>
            </div>
        );
    }

    return (
        <div className={classNames(className, {}, [cls.navbar])}>
            <Button theme={ButtonThemes.CLEAR} onClick={toggleModal}>
                {t('Login')}
            </Button>

            <AuthModal closeModal={toggleModal} isOpen={isOpen} />
        </div>
    );
};
