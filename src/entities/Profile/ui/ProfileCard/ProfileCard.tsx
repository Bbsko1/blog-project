import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { memo } from 'react';
import { Select, SelectOptions } from 'shared/ui/Select/Select';
import { Currency } from 'entities/Currency';
import { Countries } from 'entities/Countries';
import { ProfileDataProps } from '../../module/types/profile';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps extends ProfileDataProps {
    className?: string;
}

const options: SelectOptions[] = [
    { value: 123, content: 123 },
    { value: 124, content: 124 },
];

export const ProfileCard = memo(({
    className, dataType, onChange, value, readOnly, textButton, onRef,
}: ProfileCardProps) => {
    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.profile_item}>
                <Text text={textButton} />
                <Input
                    onChange={onChange}
                    data-type={dataType}
                    value={value}
                    onRef={onRef}
                    readOnly={readOnly}
                />

                <Select label="test" options={options} />
                <Currency />
                <Countries />
            </div>
        </div>
    );
});
