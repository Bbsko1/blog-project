import { Profile } from 'pages/ProfilePage/model/types/profile';
import { useTranslation } from 'react-i18next';
import { InputField, SelectField } from '../types/profile';
import { isValidUrl } from '../lib/helpers';

type UseProfileDefaultDataProps = {
    readOnly: boolean;
}

export const useProfileDefaultData = (
    { readOnly }: UseProfileDefaultDataProps,
): Partial<Record<keyof Profile, InputField | SelectField>> => {
    const { t } = useTranslation('profile');
    const requiredText = t('RequiredField');
    const linkText = t('InvalidLink');

    return {
        first: {
            fieldType: 'input',
            type: 'text',
            options: {
                required: requiredText,
                disabled: readOnly,
            },
            label: t('YourName'),
        },
        lastname: {
            fieldType: 'input',
            type: 'text',
            options: {
                required: requiredText,
                disabled: readOnly,
            },
            label: t('YourSecondName'),
        },
        age: {
            fieldType: 'input',
            type: 'number',
            options: {
                required: requiredText,
                disabled: readOnly,
                max: {
                    value: 100,
                    message: t('RealAge'),
                },
                min: {
                    value: 10,
                    message: t('RealAge'),
                },
            },
            label: t('YourAge'),
        },
        avatar: {
            fieldType: 'input',
            type: 'text',
            label: t('AvatarLink'),
            options: {
                disabled: readOnly,
                validate: (value) => isValidUrl(value) || linkText,
            },
        },
        city: {
            fieldType: 'input',
            type: 'text',
            label: t('YourCity'),
            options: {
                disabled: readOnly,
            },
        },
        currency: {
            fieldType: 'select',
            values: ['RUB', 'USD', 'EUR'],
            label: t('YourCurrency'),
            options: {
                disabled: readOnly,
            },
        },
        country: {
            fieldType: 'select',
            values: ['Russia', 'Belarus', 'Ukraine', 'Kazahstan', 'Armenia'],
            label: t('YourCountry'),
            options: {
                disabled: readOnly,
            },
        },
    };
};
