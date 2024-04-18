import { ArticleBlockImage } from '../../model/types';

interface ArticleImageProps {
    className?: string;
    block: ArticleBlockImage;
}

export const ArticleImage = ({ className, block }: ArticleImageProps) => {
    return (
        // eslint-disable-next-line i18next/no-literal-string
        <div>
            <img src={block.src} alt={block.title} />
        </div>
    );
};
