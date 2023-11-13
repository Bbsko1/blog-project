import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import {
    ChangeEvent, RefObject, useCallback,
} from 'react';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector';
import { useTranslation } from 'react-i18next';
import { ProfileDataProps } from 'entities/Profile';
import { getUserData } from '../selectors/getUserData/getUserData';
import { Profile } from '../types/profile';
import { updateProfile } from '../slice/profile.slice';

export const useProfileData = (firstRef: RefObject<HTMLInputElement>): ProfileDataProps[] => {
    const userData = getUserData();
    const dispatch = useAppDispatch();
    const readonly = useAppSelector((state) => state?.PROFILE?.readonly);
    const { t } = useTranslation('profile');

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

    return (
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
            {
                value: userData?.city || '',
                readOnly: readonly,
                onChange: updateProfileData,
                dataType: 'city',
                textButton: t('YourCity'),
            },
            {
                value: userData?.avatar || '',
                readOnly: readonly,
                onChange: updateProfileData,
                dataType: 'avatar',
                textButton: t('AvatarLink'),
            },
        ]
    );
};
