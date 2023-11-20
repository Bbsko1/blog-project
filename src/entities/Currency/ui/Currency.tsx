import { classNames } from 'shared/lib/classNames/classNames';
import { Select, SelectOptions } from 'shared/ui/Select/Select';
import { useCallback } from 'react';
import { CurrencyEnum } from '../model/types/currency';

interface CurrencyProps {
    className?: string;
    value?: CurrencyEnum | undefined;
    onChange?: (value: CurrencyEnum) => void;
    readonly?: boolean;
}

const currencyOptions: SelectOptions[] = Object.values(CurrencyEnum).map((val) => ({ value: val, content: val }));

export const Currency = ({
    className, onChange, readonly, value,
}: CurrencyProps) => {
    const changeHandler = useCallback((currency: string) => {
        onChange?.(currency as CurrencyEnum);
    }, [onChange]);

    return (
        <Select
            options={currencyOptions}
            className={classNames(undefined, {}, [className])}
            value={value}
            onChange={changeHandler}
            readonly={readonly}
        />
    );
};
