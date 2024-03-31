import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import {
    ChangeEvent, RefObject, useCallback,
} from 'react';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector';
import { useTranslation } from 'react-i18next';
import { ProfileDataProps } from 'entities/Profile';
import { Countries, Country } from 'entities/Countries';
import { Currency, CurrencyEnum } from 'entities/Currency';
import { Profile } from '../types/profile';
import { updateProfile } from '../slice/profile.slice';

export const useProfileData = (firstRef: RefObject<HTMLInputElement>): ProfileDataProps[] => {
    const userData = useAppSelector((state) => state?.PROFILE?.data) ?? null;
    const dispatch = useAppDispatch();
    const readonly = useAppSelector((state) => state?.PROFILE?.readonly);
    const profile = useAppSelector((state) => state?.PROFILE?.data);
    const { t } = useTranslation('profile');

    const updateProfileData = useCallback((evt: ChangeEvent<HTMLInputElement>) => {
        const dataT = evt.target.dataset.type as keyof Profile;
        const { value } = evt.target;

        const data: Profile | null = profile ? { ...profile } : null;

        if (value && data) {
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
            case 'city':
                data.city = value;
                break;
            case 'avatar':
                data.avatar = value;
                break;
            default:
                break;
            }

            dispatch(updateProfile(data));
        }
    }, [dispatch, profile]);

    const updateCountry = useCallback((country: Country) => {
        const data: Profile | null = profile ? { ...profile } : null;

        if (data) {
            data.country = country;

            dispatch(updateProfile(data));
        }
    }, [dispatch, profile]);

    const updateCurrency = useCallback((currency: CurrencyEnum) => {
        const data: Profile | null = profile ? { ...profile } : null;

        if (data) {
            data.currency = currency;

            dispatch(updateProfile(data));
        }
    }, [dispatch, profile]);

    return (
        [
            {
                value: userData?.first ?? '',
                readOnly: readonly,
                onChange: updateProfileData,
                dataType: 'first',
                textButton: t('YourName'),
                onRef: firstRef,
                isInput: true,
            },
            {
                value: userData?.lastname ?? '',
                readOnly: readonly,
                onChange: updateProfileData,
                dataType: 'lastname',
                textButton: t('YourSecondName'),
                isInput: true,
            },
            {
                value: userData?.age ?? '',
                readOnly: readonly,
                onChange: updateProfileData,
                dataType: 'age',
                textButton: t('YourAge'),
                isInput: true,
            },
            {
                value: userData?.city ?? '',
                readOnly: readonly,
                onChange: updateProfileData,
                dataType: 'city',
                textButton: t('YourCity'),
                isInput: true,
            },
            {
                value: userData?.avatar ?? '',
                readOnly: readonly,
                onChange: updateProfileData,
                dataType: 'avatar',
                textButton: t('AvatarLink'),
                isInput: true,
            },
            {
                element: <Countries
                    readonly={readonly}
                    value={userData?.country}
                    onChange={updateCountry}
                />,
                textButton: t('YourCountry'),
                isSelect: true,
                dataType: 'country',
            },
            {
                element: <Currency
                    readonly={readonly}
                    value={userData?.currency}
                    onChange={updateCurrency}
                />,
                textButton: t('YourCurrency'),
                isSelect: true,
                dataType: 'currency',
            },
        ]
    );
};
