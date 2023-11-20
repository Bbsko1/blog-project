import { Country } from 'entities/Countries';
import { CurrencyEnum } from 'entities/Currency';

export interface Profile {
    first: string;
    lastname: string;
    age: string,
    currency: CurrencyEnum,
    country: Country;
    city: string,
    username: string;
    avatar: string;
}

export interface ProfileSchema {
    data: Profile | null;
    duplicateData: Profile | null;
    isLoading: boolean;
    error: string | null;
    readonly: boolean;
}
