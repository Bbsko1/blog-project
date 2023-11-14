import { classNames } from 'shared/lib/classNames/classNames';
import { Select, SelectOptions } from 'shared/ui/Select/Select';
import { CurrencyEnum } from '../model/types/currency';

interface CurrencyProps {
    className?: string;
}

const currencyData: Record<CurrencyEnum, SelectOptions> = {
    [CurrencyEnum.RUB]: { value: CurrencyEnum.RUB, content: CurrencyEnum.RUB },
    [CurrencyEnum.USD]: { value: CurrencyEnum.USD, content: CurrencyEnum.USD },
    [CurrencyEnum.EUR]: { value: CurrencyEnum.EUR, content: CurrencyEnum.EUR },
};

export const Currency = ({ className }: CurrencyProps) => {
    return (
        <Select options={Object.values(currencyData)} className={classNames(undefined, {}, [className])} />
    );
};
