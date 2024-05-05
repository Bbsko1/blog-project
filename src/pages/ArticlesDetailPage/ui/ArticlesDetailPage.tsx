import { classNames } from 'shared/lib/classNames/classNames';
import { Navigate, useParams } from 'react-router-dom';
import { AppRoutes, RoutePath } from 'shared/config/routeConfig/routeConfig';
import { ArticleDetail } from 'entities/Article';
import cls from './ArticlesDetailPage.module.scss';

interface ArticlesDetailPageProps {
    className?: string;
}

const ArticlesDetailPage = ({ className }: ArticlesDetailPageProps) => {
    const { id } = useParams();

    if (!id) {
        return <Navigate to={RoutePath[AppRoutes.NOT_FOUND]} />;
    }

    return (
        // eslint-disable-next-line i18next/no-literal-string
        <div className={classNames(cls.articlesDetailPage, {}, [className])}>
            <ArticleDetail id={id} />
        </div>
    );
};

export default ArticlesDetailPage;
