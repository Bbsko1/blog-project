import { Profile } from 'pages/ProfilePage/model/types/profile';
import { useEffect } from 'react';
import { SubmitHandler, useFormContext } from 'react-hook-form';
import { useProfileDefaultData } from '../../model/hooks/useProfileDefaultData';

type ProfileCardNewProps = {
    fields: Partial<Profile> | null;
    readOnly: boolean;
    onSubmit: SubmitHandler<Partial<Profile>>;
}

export const ProfileCardNew = ({
    fields, readOnly, onSubmit,
}: ProfileCardNewProps) => {
    const {
        reset, register, handleSubmit, setFocus, formState: { errors },
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
            {fields && (Object.keys(fields) as (keyof Profile)[]).map((field) => {
                const fieldVal = config?.[field];

                if (fieldVal?.fieldType === 'input') {
                    return (
                        <div key={field}>
                            <div>{fieldVal.label}</div>
                            <input type={fieldVal.type} {...register(field, fieldVal.options)} />
                            {errors?.[field]?.message && (
                                <div>{errors[field]?.message}</div>
                            )}
                        </div>
                    );
                }

                return (
                    fieldVal?.values && (
                        <div key={field}>
                            <div>{fieldVal.label}</div>
                            <select
                                {...register(field, fieldVal.options)}
                            >
                                {fieldVal.values.map((val) => (
                                    <option key={val} value={val}>{val}</option>
                                ))}
                            </select>

                            {errors?.[field]?.message && (
                                <div>{errors[field]?.message}</div>
                            )}
                        </div>
                    )
                );
            })}

            <input type="submit" hidden disabled={readOnly} />
        </form>
    );
};
