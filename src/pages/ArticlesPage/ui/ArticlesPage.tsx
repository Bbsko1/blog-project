import { classNames } from 'shared/lib/classNames/classNames';
import { Link } from 'react-router-dom';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string;
}

const ArticlesPage = ({ className }: ArticlesPageProps) => {
    return (
        <div className={classNames(cls.articlesPage, {}, [className])}>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Link to="/articles/1">
                ARTICLES PAGE
            </Link>
        </div>
    );
};

export default ArticlesPage;