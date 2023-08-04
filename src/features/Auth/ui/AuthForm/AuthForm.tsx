import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonThemes } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { FormEvent, useRef } from 'react';
import cls from './AuthForm.module.scss';

interface AuthFormProps {
    className?: string;
}

export const AuthForm = ({ className }: AuthFormProps) => {
    const { t } = useTranslation();
    const refForm = useRef<HTMLFormElement>();

    const onSubmit = async (evt: FormEvent) => {
        evt.preventDefault();

        const pararms = new FormData(refForm.current);
        const test = Object.fromEntries(pararms.entries());

        const response = await fetch('http://localhost:8000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(test),
        });

        const res = await response.json();
    };

    return (
        <form
            ref={refForm}
            className={classNames(cls.AuthForm, {}, [className])}
            onSubmit={onSubmit}
        >
            <Input name="username" placeholder={t('UserNameForm')} autoFocus />
            <Input name="password" placeholder={t('PasswordForm')} />
            <Button className={cls.button} theme={ButtonThemes.OUTLINE} type="submit">
                {t('SendLoginForm')}
            </Button>
        </form>
    );
};
