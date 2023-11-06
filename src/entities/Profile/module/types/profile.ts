import { Profile } from 'pages/ProfilePage/model/types/profile';
import { InputHTMLAttributes } from 'react';

export interface ProfileDataProps extends InputHTMLAttributes<HTMLInputElement> {
    dataType: keyof Profile;
    textButton?: string;
    value: string;
}
