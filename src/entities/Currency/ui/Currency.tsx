import { classNames } from 'shared/lib/classNames/classNames';
import { Select, SelectOptions } from 'shared/ui/Select/Select';
import cls from './Currency.module.scss';
import { CurrencyEnum } from '../model/types/currency';

interface CurrencyProps {
    className?: string;
}

const tes: Record<CurrencyEnum, SelectOptions> = {
    [CurrencyEnum.RUB]: { value: CurrencyEnum.RUB, content: CurrencyEnum.RUB },
    [CurrencyEnum.USD]: { value: CurrencyEnum.USD, content: CurrencyEnum.USD },
    [CurrencyEnum.EUR]: { value: CurrencyEnum.EUR, content: CurrencyEnum.EUR },
};

export const Currency = ({ className }: CurrencyProps) => {
    return (
        <Select options={Object.values(tes)} className={classNames(cls.Currency, {}, [className])} />
    );
};
