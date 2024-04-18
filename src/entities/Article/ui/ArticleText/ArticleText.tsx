import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleBlockText } from '../../model/types';

interface ArticleTextProps {
    className?: string;
    block: ArticleBlockText;
}

export const ArticleText = ({ className, block }: ArticleTextProps) => {
    return (
        <div className={classNames(className)}>
            <h3>{block.title}</h3>

            {block.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
            ))}
        </div>
    );
};
