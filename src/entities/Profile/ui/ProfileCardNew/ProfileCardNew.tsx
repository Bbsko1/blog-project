import { Profile } from 'pages/ProfilePage/model/types/profile';
import { useEffect } from 'react';
import { Controller, SubmitHandler, useFormContext } from 'react-hook-form';
import { Input } from 'shared/ui/Input/Input';
import { Text } from 'shared/ui/Text/Text';
import { Select } from 'shared/ui/Select/Select';
import { useProfileDefaultData } from '../../model/hooks/useProfileDefaultData';
import cls from './ProfileCardNew.module.scss';

type ProfileCardNewProps = {
    fields: Partial<Profile> | null;
    readOnly: boolean;
    onSubmit: SubmitHandler<Partial<Profile>>;
}

export const ProfileCardNew = ({
    fields, readOnly, onSubmit,
}: ProfileCardNewProps) => {
    const {
        reset, register, handleSubmit, control, setFocus, formState: { errors },
    } = useFormContext<Partial<Profile>>();

    const config = useProfileDefaultData({ readOnly });

    useEffect(() => {
        if (!readOnly) {
            setFocus('first');
        }
    }, [readOnly, setFocus]);

    useEffect(() => {
        if (readOnly) {
            reset(fields ?? undefined);
        }
    }, [fields, readOnly, reset]);

    console.log('error', errors);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={cls.wrapper}>
                {fields && (Object.keys(fields) as (keyof Profile)[]).map((field) => {
                    const fieldVal = config?.[field];
                    const errorMessage = errors?.[field]?.message;

                    if (fieldVal?.fieldType === 'input') {
                        return (
                            <div className={cls.item} key={field}>
                                <div>{fieldVal.label}</div>
                                <Controller
                                    defaultValue=""
                                    name={field}
                                    control={control}
                                    rules={fieldVal.options}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <Input
                                            className={cls.field}
                                            placeholder={field}
                                            onBlur={onBlur}
                                            value={value}
                                            onChange={onChange}
                                            isError={Boolean(errors?.[field])}
                                            disabled={readOnly}
                                        />
                                    )}
                                />
                                {errorMessage && (
                                    <Text
                                        text={errorMessage}
                                        theme="error"
                                    />
                                )}
                            </div>
                        );
                    }

                    return (
                        fieldVal?.values && (
                            <div key={field} className={cls.item}>
                                <div>{fieldVal.label}</div>

                                <Controller
                                    defaultValue=""
                                    name={field}
                                    control={control}
                                    rules={fieldVal.options}
                                    render={({ field: { onChange, value } }) => (
                                        <Select
                                            className={cls.field}
                                            value={value}
                                            onChange={onChange}
                                            readonly={readOnly}
                                            options={fieldVal.values}
                                        />
                                    )}
                                />

                                {errorMessage && (
                                    <Text
                                        text={errorMessage}
                                        theme="error"
                                    />
                                )}
                            </div>
                        )
                    );
                })}
            </div>

            <input type="submit" hidden disabled={readOnly} />
        </form>
    );
};
