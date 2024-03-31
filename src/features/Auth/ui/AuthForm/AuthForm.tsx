import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { FormEvent, memo, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Text } from 'shared/ui/Text/Text';
import { ReducerList, useDynamicModuleLoader } from 'shared/lib/hooks/useDynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { authReducer } from '../../model/slice/auth.slice';
import { FormParams, sendAuthForm } from '../../model/services/sendAuthForm';
import { getAuthState } from '../../model/selectors/getAuthState';
import cls from './AuthForm.module.scss';

interface AuthFormProps {
    className?: string;
}

const inititalReducer: ReducerList = { AUTH: authReducer };

const AuthForm = memo(({ className }: AuthFormProps) => {
    const { t } = useTranslation();
    const refForm = useRef<HTMLFormElement | null>(null);
    const dispatch = useAppDispatch();

    const { loading, error } = useSelector(getAuthState);

    useDynamicModuleLoader({ reducers: inititalReducer });

    const onSubmit = async (evt: FormEvent) => {
        evt.preventDefault();

        if (!refForm.current) return;

        const params = new FormData(refForm.current) as Iterable<
            [FormParams]
        >;
        const test = Object.fromEntries(params);

        dispatch(sendAuthForm(test));
    };

    return (
        <form
            ref={refForm}
            className={classNames(cls.AuthForm, {}, [className])}
            onSubmit={onSubmit}
        >
            <Text title={t('AuthFormTitle')} />
            {error && <Text text={t('LoginError')} theme="error" />}
            <Input name="username" placeholder={t('UserNameForm')} autoFocus />
            <Input name="password" placeholder={t('PasswordForm')} type="password" />
            <Button
                className={cls.button}
                theme="outline"
                type="submit"
                disabled={loading}
            >
                {t('SendLoginForm')}
            </Button>
        </form>
    );
});

export default AuthForm;
