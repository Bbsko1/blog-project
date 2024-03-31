import { Profile } from 'pages/ProfilePage/model/types/profile';
import { HTMLInputTypeAttribute, useEffect } from 'react';
import { RegisterOptions, SubmitHandler, useForm } from 'react-hook-form';

type FieldType = {
    fieldType: 'input' | 'select';
    options?: RegisterOptions<Partial<Profile>, keyof Profile>;
};

interface InputField extends FieldType {
    fieldType: 'input';
    type: HTMLInputTypeAttribute;
}

interface SelectField extends FieldType {
    fieldType: 'select';
    values: string[];
}

const config: Partial<Record<keyof Profile, InputField | SelectField>> = {
    first: {
        fieldType: 'input',
        type: 'text',
        options: {
            required: true,
        },
    },
    lastname: {
        fieldType: 'input',
        type: 'text',
        options: {
            required: true,
        },
    },
    age: {
        fieldType: 'input',
        type: 'number',
        options: {
            required: true,
        },
    },
    avatar: {
        fieldType: 'input',
        type: 'text',
    },
    city: {
        fieldType: 'input',
        type: 'text',
    },
    country: {
        fieldType: 'select',
        values: ['RUR', 'USD', 'EUR'],
    },
    currency: {
        fieldType: 'select',
        values: ['Russia', 'Belarus', 'Ukraine', 'Kazahstan', 'Armenia'],
    },
};

type ProfileCardNewProps = {
    fields: Partial<Profile>;
}

export const ProfileCardNew = ({ fields }: ProfileCardNewProps) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<Partial<Profile>>();
    const onSubmit: SubmitHandler<Partial<Profile>> = (data) => console.log(data);

    useEffect(() => {
        console.log('reset');

        reset(fields);
    }, [fields, reset]);

    console.log('errors', errors);

    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form onSubmit={handleSubmit(onSubmit)}>
            {(Object.keys(fields) as (keyof Profile)[]).map((field) => {
                const fieldVal = config?.[field];

                if (fieldVal?.fieldType === 'input') {
                    return (
                        <input key={field} type={fieldVal.type} {...register(field, fieldVal.options)} />
                    );
                }

                return null;
            })}

            <input type="submit" />
        </form>
    );
};
