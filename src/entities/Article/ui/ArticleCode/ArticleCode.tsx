import { Code } from 'shared/ui/Code';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleBlockCode } from '../../model/types';

interface ArticleCodeProps {
    className?: string;
    block: ArticleBlockCode;
}

export const ArticleCode = ({ className, block }: ArticleCodeProps) => {
    return (
        <Code className={classNames(className)} code={block.code} />
    );
};
