import { classNames } from 'shared/lib/classNames/classNames';
import { useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useDynamicModuleLoader } from 'shared/lib/hooks/useDynamicModuleLoader';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector';
import cls from './Article.module.scss';
import { fetchArticles } from '../model/services/fetchArticles';
import { articleReducer } from '../model/slice/article.slice';

interface ArticleProps {
    className?: string;
}

export const Article = ({ className }: ArticleProps) => {
    useDynamicModuleLoader({ reducers: { ARTICLES: articleReducer } });
    const dispatch = useAppDispatch();
    const articles = useAppSelector((state) => state.ARTICLES?.articles);

    useEffect(() => {
        dispatch(fetchArticles());
    }, [dispatch]);

    return (
        // eslint-disable-next-line i18next/no-literal-string
        <div className={classNames(cls.article, {}, [className])}>
            {articles?.map((item) => (
                item.blocks.map((block) => {
                    switch (block.type) {
                    case 'TEXT':
                        return 'text';
                    case 'CODE':
                        return 'code';
                    case 'IMAGE':
                        return 'image';
                    default:
                        return null;
                    }
                })
            ))}
        </div>
    );
};
