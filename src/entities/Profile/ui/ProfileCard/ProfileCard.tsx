import { classNames } from 'shared/lib/classNames/classNames';
import { ChangeEvent, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { Button } from 'shared/ui/Button/Button';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector';
import { Loader } from 'shared/ui/Loader/Loader';
import { fetchUserData } from '../../model/services/fetchUserData/fetchUserData';
import { getUserData } from '../../model/selectors/getUserData/getUserData';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
    const dispatch = useAppDispatch();
    const userData = getUserData();
    const hasError = useAppSelector((state) => state?.PROFILE?.error);
    const isLoading = useAppSelector((state) => state?.PROFILE?.isLoading);
    const readonly = useAppSelector((state) => state?.PROFILE?.readonly);
    const { t } = useTranslation('profile');

    useEffect(() => {
        dispatch(fetchUserData());
    }, [dispatch]);

    const changeInput = (evt: ChangeEvent<HTMLInputElement>) => {
        console.log(evt.target.value);
    };

    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.isLoading])}>
                <Loader />
            </div>
        );
    }

    if (hasError) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.isError])}>
                {/*  eslint-disable-next-line i18next/no-literal-string */}
                <Text title={t('HasError')} text={t('ErrorReload')} theme={TextTheme.ERROR} textAlign="center" />
            </div>
        );
    }

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.profile_header}>
                <Text title={t('userData')} />
                <Button hasBorder>
                    {t('EditProfile')}
                </Button>
            </div>
            <div className={cls.profile_item}>
                <Text text={t('YourName')} />
                <Input onChange={changeInput} value={userData?.first || ''} readOnly />
            </div>
            <div className={cls.profile_item}>
                <Text text={t('YourSecondName')} />
                <Input onChange={changeInput} value={userData?.lastname || ''} readOnly />
            </div>
        </div>
    );
};
