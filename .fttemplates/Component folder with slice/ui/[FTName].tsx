import { classNames } from 'shared/lib/classNames/classNames';
import cls from './[FTName].module.scss';

interface <FTName | pascalcase>Props {
    className?: string;
}

export const <FTName | pascalcase> = ({ className }: <FTName | pascalcase>Props) => {
    return (
        <div className={classNames(cls.<FTName | lowercasefirstchar>, {}, [className])}>
            
        </div>
    );
};
