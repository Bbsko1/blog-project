import { ReducerList, useDynamicModuleLoader } from 'shared/lib/hooks/useDynamicModuleLoader';
import { useEffect } from 'react';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useTranslation } from 'react-i18next';
import { Loader } from 'shared/ui/Loader/Loader';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { Button } from 'shared/ui/Button/Button';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { ProfileCardNew } from 'entities/Profile';
import { profileReducer, toggleReadOnly } from '../model/slice/profile.slice';
import { fetchUserData } from '../model/services/fetchUserData/fetchUserData';
import cls from './ProfilePage.module.scss';
import { updateProfileData } from '../model/services/updateProfileData/updateProfileData';
import { Profile } from '../model/types/profile';

const initialReducer: ReducerList = { PROFILE: profileReducer };

interface ProfilePageProps {
    readonly className?: string;
}

function ProfilePage({ className }: ProfilePageProps) {
    useDynamicModuleLoader({ reducers: initialReducer, removeAfterUnmount: false });
    const userData = useAppSelector((state) => state?.PROFILE?.data) || null;
    const readonly = useAppSelector((state) => state?.PROFILE?.readonly);
    const hasError = useAppSelector((state) => state?.PROFILE?.error);
    const data = useAppSelector((state) => state?.PROFILE?.data);
    const isLoading = useAppSelector((state) => state?.PROFILE?.isLoading);
    const dispatch = useAppDispatch();
    const { t } = useTranslation('profile');
    const methods = useForm<Partial<Profile>>();
    const { handleSubmit } = methods;

    useEffect(() => {
        dispatch(fetchUserData());

        return () => {
            dispatch(toggleReadOnly(true));
        };
    }, [dispatch]);

    const toggleEditData = () => {
        dispatch(toggleReadOnly(!readonly));
    };

    const onSubmit: SubmitHandler<Partial<Profile>> = (data) => {
        dispatch(updateProfileData(data));
    };

    const saveUserData = () => {
        handleSubmit(onSubmit)();
    };

    const cancelEdit = () => {
        dispatch(toggleReadOnly(true));
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
                <Text title={t('HasError')} text={t('ErrorReload')} theme="error" textAlign="center" />
            </div>
        );
    }

    return (
        <FormProvider {...methods}>
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
                                <Button theme="backgroundInverted" hasBorder onClick={cancelEdit}>
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
                {data && (
                    <img className={cls.avatar} src={data?.avatar} alt="" />
                )}

                <ProfileCardNew
                    fields={userData}
                    readOnly={readonly ?? false}
                    onSubmit={onSubmit}
                />
            </div>
        </FormProvider>
    );
}

export default ProfilePage;
