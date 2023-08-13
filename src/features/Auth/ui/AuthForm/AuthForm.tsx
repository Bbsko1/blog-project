import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonThemes } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { FormEvent, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { ReducerList, useDynamicModuleLoader } from 'shared/lib/hooks/useDynamicModuleLoader';
import { authReducer } from '../../model/slice/auth.slice';
import { FormParams, sendAuthForm } from '../../model/services/sendAuthForm';
import { getAuthState } from '../../model/selectors/getAuthState';
import cls from './AuthForm.module.scss';

interface AuthFormProps {
    className?: string;
}

const inititalReducer: ReducerList = { AUTH: authReducer };

const AuthForm = ({ className }: AuthFormProps) => {
    const { t } = useTranslation();
    const refForm = useRef<HTMLFormElement>();
    const dispatch = useDispatch();

    const { loading, error } = useSelector(getAuthState);

    useDynamicModuleLoader({ reducers: inititalReducer });

    const onSubmit = async (evt: FormEvent) => {
        evt.preventDefault();

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
            {error && <Text text={t('LoginError')} theme={TextTheme.ERROR} />}
            <Input name="username" placeholder={t('UserNameForm')} autoFocus />
            <Input name="password" placeholder={t('PasswordForm')} type="password" />
            <Button
                className={cls.button}
                theme={ButtonThemes.OUTLINE}
                type="submit"
                disabled={loading}
            >
                {t('SendLoginForm')}
            </Button>
        </form>
    );
};

export default AuthForm;
