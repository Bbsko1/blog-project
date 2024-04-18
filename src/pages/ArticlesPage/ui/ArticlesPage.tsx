import { classNames } from 'shared/lib/classNames/classNames';
import { Link } from 'react-router-dom';
import { Article } from 'entities/Article';
import { useDynamicModuleLoader } from 'shared/lib/hooks/useDynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useEffect } from 'react';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector';
import { Loader } from 'shared/ui/Loader/Loader';
import cls from './ArticlesPage.module.scss';
import { articlesReducer } from '../model/slice/articlesPage.slice';
import { fetchArticles } from '../model/services/fetchArticles';

interface ArticlesPageProps {
    className?: string;
}

const ArticlesPage = ({ className }: ArticlesPageProps) => {
    useDynamicModuleLoader({ reducers: { ARTICLES: articlesReducer } });
    const dispatch = useAppDispatch();
    const articles = useAppSelector((state) => state.ARTICLES?.articles);
    const isLoading = useAppSelector((state) => state.ARTICLES?.isLoading);

    useEffect(() => {
        dispatch(fetchArticles());
    }, [dispatch]);

    if (isLoading) {
        return (<div className={cls.loader}><Loader /></div>);
    }

    return (
        <div className={classNames(cls.articlesPage, {}, [className])}>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Link to="/articles/1">
                ARTICLES PAGE
            </Link>

            {articles?.map((article) => (
                <Article key={article.id} article={article} />
            ))}
        </div>
    );
};

export default ArticlesPage;
