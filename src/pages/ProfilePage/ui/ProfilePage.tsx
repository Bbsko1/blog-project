import { ReducerList, useDynamicModuleLoader } from 'shared/lib/hooks/useDynamicModuleLoader';
import { ProfileCard, ProfileDataProps } from 'entities/Profile';
import {
    ChangeEvent, RefObject, useCallback, useEffect, useMemo, useRef,
} from 'react';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useTranslation } from 'react-i18next';
import { Loader } from 'shared/ui/Loader/Loader';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { Button, ButtonThemes } from 'shared/ui/Button/Button';
import {
    cancelEditProfile, profileReducer, toggleReadOnly, updateProfile,
} from '../model/slice/profile.slice';
import { getUserData } from '../model/selectors/getUserData/getUserData';
import { Profile } from '../model/types/profile';
import { fetchUserData } from '../model/services/fetchUserData/fetchUserData';
import cls from './ProfilePage.module.scss';
import { postUserData } from '../model/services/postUserData/postUserData';

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
    const firstRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        dispatch(fetchUserData());

        return () => {
            dispatch(toggleReadOnly(true));
        };
    }, [dispatch]);

    const toggleEditData = () => {
        dispatch(toggleReadOnly(!readonly));

        if (readonly) {
            firstRef.current?.focus();
        }
    };

    const saveUserData = () => {
        if (userData) {
            dispatch(postUserData(userData));
        }
    };

    const cancelEdit = () => {
        dispatch(cancelEditProfile());
        dispatch(toggleReadOnly(true));
    };

    const updateProfileData = useCallback((evt: ChangeEvent<HTMLInputElement>) => {
        const dataT = evt.target.dataset.type as keyof Profile;
        const { value } = evt.target;

        const data: Profile = {};

        if (value) {
            switch (dataT) {
            case 'first':
                data.first = value;
                break;
            case 'lastname':
                data.lastname = value;
                break;
            case 'age':
                data.age = value;
                break;
            default:
                break;
            }

            dispatch(updateProfile(data));
        }
    }, [dispatch]);

    const ProfileData: ProfileDataProps[] = useMemo(() => (
        [
            {
                value: userData?.first || '',
                readOnly: readonly,
                onChange: updateProfileData,
                dataType: 'first',
                textButton: t('YourName'),
                onRef: firstRef,
            },
            {
                value: userData?.lastname || '',
                readOnly: readonly,
                onChange: updateProfileData,
                dataType: 'lastname',
                textButton: t('YourSecondName'),
            },
            {
                value: userData?.age || '',
                readOnly: readonly,
                onChange: updateProfileData,
                dataType: 'age',
                textButton: t('YourAge'),
            },
        ]

        // eslint-disable-next-line react-hooks/exhaustive-deps
    ), [readonly, userData, t]);

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

                {
                    readonly
                        ? (
                            <Button hasBorder onClick={toggleEditData}>
                                {t('EditProfile')}
                            </Button>
                        )
                        : (
                            <div className={cls['button-wrapper']}>
                                <Button theme={ButtonThemes.BACKGROUND_INVERTED} hasBorder onClick={cancelEdit}>
                                    {t('CancelEdit')}
                                </Button>
                                <Button hasBorder onClick={saveUserData}>
                                    {t('SaveProfile')}
                                </Button>
                            </div>
                        )
                }
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
