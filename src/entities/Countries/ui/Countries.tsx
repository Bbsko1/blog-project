import { classNames } from 'shared/lib/classNames/classNames';
import { Select, SelectOptions } from 'shared/ui/Select/Select';
import { useCallback } from 'react';
import { Country } from '../model/types/Countries';

interface CountriesProps {
    className?: string;
    value?: Country | undefined;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

const countriesOptions: SelectOptions[] = Object.values(Country).map((val) => ({ value: val, content: val }));

export const Countries = ({
    className, onChange, readonly, value,
}: CountriesProps) => {
    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <Select
            options={countriesOptions}
            className={classNames(undefined, {}, [className])}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
};
