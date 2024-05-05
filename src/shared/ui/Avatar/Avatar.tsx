import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    imgSrc: string;
    alt?: string;
    width?: number;
    height?: number;
}

export const Avatar = ({
    className, imgSrc, alt, height, width,
}: AvatarProps) => {
    return (
        <img
            className={classNames(cls.avatar, {}, [className])}
            src={imgSrc}
            alt={alt}
            style={{
                width,
                height,
            }}
        />
    );
};
