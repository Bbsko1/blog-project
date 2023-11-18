import { classNames } from 'shared/lib/classNames/classNames';
import { Select, SelectOptions } from 'shared/ui/Select/Select';
import { CurrencyEnum } from '../model/types/currency';

interface CurrencyProps {
    className?: string;
    value?: CurrencyEnum | undefined;
    onChange?: (value: string) => void;
    readonly?: boolean;
}

const currencyData: Record<CurrencyEnum, SelectOptions> = {
    [CurrencyEnum.RUB]: { value: CurrencyEnum.RUB, content: CurrencyEnum.RUB },
    [CurrencyEnum.USD]: { value: CurrencyEnum.USD, content: CurrencyEnum.USD },
    [CurrencyEnum.EUR]: { value: CurrencyEnum.EUR, content: CurrencyEnum.EUR },
};

export const Currency = ({
    className, onChange, readonly, value,
}: CurrencyProps) => {
    return (
        <Select
            options={Object.values(currencyData)}
            className={classNames(undefined, {}, [className])}
            value={value}
            onChange={onChange}
            readonly={readonly}
        />
    );
};
