import { Profile } from 'pages/ProfilePage/model/types/profile';
import { InputHTMLAttributes, RefObject } from 'react';

export interface ProfileDataProps extends InputHTMLAttributes<HTMLInputElement> {
    dataType: keyof Profile;
    textButton?: string;
    value?: string | undefined;
    onRef?: RefObject<HTMLInputElement>;
    isInput?: boolean;
    isSelect?: boolean;
    element?: JSX.Element;
}
