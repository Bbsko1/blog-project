import { classNames } from 'shared/lib/classNames/classNames';
import cls from './[FTName].module.scss';

interface <FTName | pascalcase>Props {
    className?: string;
}

const <FTName | pascalcase> = ({ className }: <FTName | pascalcase>Props) => {
    return (
        <div className={classNames(cls.<FTName | lowercasefirstchar>, {}, [className])}>
            
        </div>
    );
};

export default <FTName | pascalcase>;
