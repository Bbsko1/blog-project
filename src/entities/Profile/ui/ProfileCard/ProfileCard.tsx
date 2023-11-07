import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { memo } from 'react';
import { ProfileDataProps } from '../../module/types/profile';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps extends ProfileDataProps {
    className?: string;
}

export const ProfileCard = memo(({
    className, dataType, onChange, value, readOnly, textButton,
}: ProfileCardProps) => {
    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.profile_item}>
                <Text text={textButton} />
                <Input
                    onChange={onChange}
                    data-type={dataType}
                    value={value}
                    readOnly={readOnly}
                />
            </div>
        </div>
    );
});
