import { Profile } from 'pages/ProfilePage/model/types/profile';
import { HTMLInputTypeAttribute, InputHTMLAttributes, RefObject } from 'react';
import { RegisterOptions } from 'react-hook-form';

export interface ProfileDataProps extends InputHTMLAttributes<HTMLInputElement> {
    dataType: keyof Profile;
    textButton?: string;
    value?: string;
    onRef?: RefObject<HTMLInputElement>;
    isInput?: boolean;
    isSelect?: boolean;
    element?: JSX.Element;
}

type FieldType = {
    fieldType: 'input' | 'select';
    options?: RegisterOptions<Partial<Profile>, keyof Profile>;
    label: 'text',
};

export interface InputField extends FieldType {
    fieldType: 'input';
    type: HTMLInputTypeAttribute;
}

export interface SelectField extends FieldType {
    fieldType: 'select';
    values: string[];
}
