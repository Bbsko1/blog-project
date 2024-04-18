import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleBlockCode } from '../../model/types';

interface ArticleCodeProps {
    className?: string;
    block: ArticleBlockCode;
}

export const ArticleCode = ({ className, block }: ArticleCodeProps) => {
    return (
        // eslint-disable-next-line i18next/no-literal-string
        <div className={classNames(undefined, {}, [className])}>
            {block.code}
        </div>
    );
};
