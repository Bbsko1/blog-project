import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { memo } from 'react';
import { ProfileDataProps } from '../../module/types/profile';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    inputProps?: ProfileDataProps[];
}

export const ProfileCard = memo(({
    className, inputProps,
}: ProfileCardProps) => {
    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            {inputProps?.map((prop) => (
                <div className={cls.profile_item} key={prop.dataType}>
                    {prop?.textButton && (<Text text={prop.textButton} />)}
                    {prop?.isInput && (
                        <Input
                            onChange={prop.onChange}
                            data-type={prop.dataType}
                            value={prop.value}
                            onRef={prop.onRef}
                            readOnly={prop.readOnly}
                        />
                    )}
                    {prop?.isSelect && prop?.element && (
                        prop.element
                    )}
                </div>
            ))}
        </div>
    );
});
