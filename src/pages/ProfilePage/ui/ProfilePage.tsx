import { ReducerList, useDynamicModuleLoader } from 'shared/lib/hooks/useDynamicModuleLoader';
import { ProfileCard, ProfileDataProps } from 'entities/Profile';
import {
    ChangeEvent, useCallback, useEffect, useMemo,
} from 'react';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useTranslation } from 'react-i18next';
import { Loader } from 'shared/ui/Loader/Loader';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { Button } from 'shared/ui/Button/Button';
import { profileReducer, updateProfile } from '../model/slice/profile.slice';
import { getUserData } from '../model/selectors/getUserData/getUserData';
import { Profile } from '../model/types/profile';
import { fetchUserData } from '../model/services/fetchUserData/fetchUserData';
import cls from './ProfilePage.module.scss';

const inititalReducer: ReducerList = { PROFILE: profileReducer };

interface ProfilePageProps {
    className?: string;
}

function ProfilePage({ className }: ProfilePageProps) {
    useDynamicModuleLoader({ reducers: inititalReducer, removeAftrerUnmount: false });
    const userData = getUserData();
    const readonly = useAppSelector((state) => state?.PROFILE?.readonly);
    const dispatch = useAppDispatch();
    const hasError = useAppSelector((state) => state?.PROFILE?.error);
    const isLoading = useAppSelector((state) => state?.PROFILE?.isLoading);

    const { t } = useTranslation('profile');

    useEffect(() => {
        dispatch(fetchUserData());
    }, [dispatch]);

    const updateProfileData = useCallback((evt: ChangeEvent<HTMLInputElement>) => {
        const data: Profile = {
            first: evt.target.value,
        };

        dispatch(updateProfile(data));
    }, [dispatch]);

    const ProfileData: ProfileDataProps[] = useMemo(() => (
        [
            {
                value: userData?.first || '',
                readOnly: readonly,
                onChange: updateProfileData,
                dataType: 'first',
                textButton: t('YourName'),
            },
            {
                value: userData?.lastname || '',
                readOnly: readonly,
                onChange: updateProfileData,
                dataType: 'lastname',
                textButton: t('YourSecondName'),
            },
        ]

        // eslint-disable-next-line react-hooks/exhaustive-deps
    ), [readonly, updateProfileData, userData]);

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
        <>
            <div className={cls.profile_header}>
                <Text title={t('userData')} />
                <Button hasBorder>
                    {t('EditProfile')}
                </Button>
            </div>

            <div className={classNames(cls.ProfileCard, {}, [className])}>
                {ProfileData.map((data) => (
                    <ProfileCard key={data.dataType} {...data} />
                ))}
            </div>
        </>

    );
}

export default ProfilePage;
