import { classNames } from 'shared/lib/classNames/classNames';
import { Select, SelectOptions } from 'shared/ui/Select/Select';
import { CurrencyEnum } from '../model/types/currency';

interface CurrencyProps {
    className?: string;
    value?: CurrencyEnum | undefined;
    onChange?: (value: string) => void;
    readonly?: boolean;
}

const currencyOptions: SelectOptions[] = Object.values(CurrencyEnum).map((val) => ({ value: val, content: val }));

export const Currency = ({
    className, onChange, readonly, value,
}: CurrencyProps) => {
    return (
        <Select
            options={currencyOptions}
            className={classNames(undefined, {}, [className])}
            value={value}
            onChange={onChange}
            readonly={readonly}
        />
    );
};
