import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Article.module.scss';

interface ArticleProps {
    className?: string;
}

export const Article = ({ className }: ArticleProps) => {
    return (
        // eslint-disable-next-line i18next/no-literal-string
        <div className={classNames(cls.article, {}, [className])}>
            Articles
        </div>
    );
};
