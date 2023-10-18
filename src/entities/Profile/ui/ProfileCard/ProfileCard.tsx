import { classNames } from 'shared/lib/classNames/classNames';
import { ChangeEvent, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { Button } from 'shared/ui/Button/Button';
import { fetchUserData } from '../../model/services/fetchUserData/fetchUserData';
import { getUserData } from '../../model/selectors/getUserData/getUserData';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
    const dispatch = useAppDispatch();
    const userData = getUserData();
    const { t } = useTranslation('profile');

    useEffect(() => {
        dispatch(fetchUserData());
    }, [dispatch]);

    const changeInput = (evt: ChangeEvent<HTMLInputElement>) => {
        console.log(evt.target.value);
    };

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls['profile-header']}>
                <Text title={t('userData')} />
                <Button hasBorder>
                    {t('EditProfile')}
                </Button>
            </div>
            <div className={cls['profile-item']}>
                <Text text={t('YourName')} />
                <Input onChange={changeInput} value={userData?.first || ''} />
            </div>
            <div className={cls['profile-item']}>
                <Text text={t('YourSecondName')} />
                <Input onChange={changeInput} value={userData?.lastname || ''} />
            </div>
        </div>
    );
};
