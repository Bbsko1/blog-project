import { classNames } from 'shared/lib/classNames/classNames';
import { useParams } from 'react-router-dom';
import cls from './ArticlesDetailPage.module.scss';

interface ArticlesDetailPageProps {
    className?: string;
}

const ArticlesDetailPage = ({ className }: ArticlesDetailPageProps) => {
    const { id } = useParams();

    console.log('id', id);

    return (
        // eslint-disable-next-line i18next/no-literal-string
        <div className={classNames(cls.articlesDetailPage, {}, [className])}>
            ARTICLES DETAIL PAGE
        </div>
    );
};

export default ArticlesDetailPage;
