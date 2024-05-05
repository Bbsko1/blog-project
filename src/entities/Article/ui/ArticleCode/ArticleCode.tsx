import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleBlockCode } from '../../model/types';
import cls from './ArticleCode.module.scss';

interface ArticleCodeProps {
    className?: string;
    block: ArticleBlockCode;
}

export const ArticleCode = ({ className, block }: ArticleCodeProps) => {
    return (
        <pre className={classNames(cls.pre, {}, [className])}>
            <code>
                {block.code}
            </code>
        </pre>
    );
};
