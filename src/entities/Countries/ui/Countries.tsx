import { classNames } from 'shared/lib/classNames/classNames';
import { Select, SelectOptions } from 'shared/ui/Select/Select';
import { Country } from '../model/types/Countries';

interface CountriesProps {
    className?: string;
}

const countriesData: Record<Country, SelectOptions> = {
    [Country.Russia]: { value: Country.Russia, content: Country.Russia },
    [Country.Belarus]: { value: Country.Belarus, content: Country.Belarus },
    [Country.Kazakhstan]: { value: Country.Kazakhstan, content: Country.Kazakhstan },
    [Country.Ukraine]: { value: Country.Ukraine, content: Country.Ukraine },
    [Country.Armenia]: { value: Country.Armenia, content: Country.Armenia },
};

export const Countries = ({ className }: CountriesProps) => {
    return (
        <Select options={Object.values(countriesData)} className={classNames(undefined, {}, [className])} />
    );
};
