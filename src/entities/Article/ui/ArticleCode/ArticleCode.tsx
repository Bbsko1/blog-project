import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleBlockCode } from '../../model/types';
import cls from './ArticleCode.module.scss';

interface ArticleCodeProps {
    className?: string;
    block: ArticleBlockCode;
}

export const ArticleCode = ({ className, block }: ArticleCodeProps) => {
    return (
        <pre className={cls.pre}>
            <code className={classNames(undefined, {}, [className])}>
                {block.code}
            </code>
        </pre>
    );
};
