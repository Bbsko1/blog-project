import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Article.module.scss';
import { ArticleData } from '../model/types';
import { ArticleText } from './ArticleText/ArticleText';
import { ArticleCode } from './ArticleCode/ArticleCode';
import { ArticleImage } from './ArticleImage/ArticleImage';

interface ArticleProps {
    className?: string;
    article: ArticleData;
}

export const Article = ({ className, article }: ArticleProps) => {
    return (
        <div className={classNames(cls.article, {}, [className])}>
            {article.blocks.map((block) => {
                switch (block.type) {
                case 'TEXT':
                    return (<ArticleText key={block.id} block={block} />);
                case 'CODE':
                    return (<ArticleCode key={block.id} block={block} />);
                case 'IMAGE':
                    return (<ArticleImage key={block.id} block={block} />);
                default:
                    return null;
                }
            })}
        </div>
    );
};
