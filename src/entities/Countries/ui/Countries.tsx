import { classNames } from 'shared/lib/classNames/classNames';
import { Select, SelectOptions } from 'shared/ui/Select/Select';
import { Country } from '../model/types/Countries';

interface CountriesProps {
    className?: string;
    value?: Country | undefined;
    onChange?: (value: string) => void;
    readonly?: boolean;
}

const countriesOptions: SelectOptions[] = Object.values(Country).map((val) => ({ value: val, content: val }));

export const Countries = ({
    className, onChange, readonly, value,
}: CountriesProps) => {
    return (
        <Select
            options={countriesOptions}
            className={classNames(undefined, {}, [className])}
            value={value}
            onChange={onChange}
            readonly={readonly}
        />
    );
};
