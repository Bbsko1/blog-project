import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector';
import { ReactNode, useCallback, useEffect } from 'react';
import { useDynamicModuleLoader } from 'shared/lib/hooks/useDynamicModuleLoader';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import cls from './ArticleDetail.module.scss';
import { ArticleBlock } from '../../model/types';
import { ArticleText } from '../ArticleText/ArticleText';
import { ArticleCode } from '../ArticleCode/ArticleCode';
import { ArticleImage } from '../ArticleImage/ArticleImage';
import { fetchArticle } from '../../model/services/fetchArticle';
import { articleDetailReducer } from '../../model/slice/articleDetail.slice';

interface ArticleDetailProps {
    className?: string;
    id: string;
}

export const ArticleDetail = ({ className, id }: ArticleDetailProps) => {
    useDynamicModuleLoader({ reducers: { ARTICLE_DETAIL: articleDetailReducer } });
    const dispatch = useAppDispatch();
    const isLoading = useAppSelector((state) => state.ARTICLE_DETAIL?.isLoading) ?? false;
    const article = useAppSelector((state) => state.ARTICLE_DETAIL?.article);
    const error = useAppSelector((state) => state.ARTICLE_DETAIL?.error);

    useEffect(() => {
        if (id) {
            dispatch(fetchArticle({ id }));
        }
    }, [dispatch, id]);

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
        case 'TEXT':
            return (<ArticleText className={cls['article-block']} key={block.id} block={block} />);
        case 'CODE':
            return (<ArticleCode className={cls['article-block']} key={block.id} block={block} />);
        case 'IMAGE':
            return (<ArticleImage className={cls['article-block']} key={block.id} block={block} />);
        default:
            return null;
        }
    }, []);

    let content: ReactNode = null;

    if (isLoading) {
        content = (
            <>
                <Skeleton className={cls.avatar} border="50%" />
                <Skeleton className={cls.title} width={670} height={30} />
                <Skeleton className={cls.skeleton} width={400} height={30} />
                <Skeleton className={cls.skeleton} height={230} />
                <Skeleton className={cls.skeleton} height={230} />
            </>
        );
    } else if (error) {
        content = error;
    } else if (article) {
        const {
            blocks, createdAt, id, img, subtitle, title, type, views,
        } = article;
        content = (
            <>
                <div className={cls.avatar}>
                    <Avatar
                        imgSrc={img}
                        width={200}
                        height={200}
                    />
                </div>

                <Text
                    className={cls.title}
                    title={title}
                    text={subtitle}
                />

                {blocks.map((block) => renderBlock(block))}
            </>
        );
    }

    return (
        <div className={classNames(cls.article, {}, [className])}>
            {content}
        </div>
    );
};
