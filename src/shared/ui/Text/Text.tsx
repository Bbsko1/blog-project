import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Text.module.scss';

type TextTheme = 'default' | 'error';

type TextAlignTypes = 'left' | 'center' | 'right';

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme,
    textAlign?: TextAlignTypes,
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        title,
        text,
        theme = 'default',
        textAlign = 'left',
    } = props;
    return (
        <div className={classNames(cls.Text, { [cls[textAlign]]: textAlign }, [className, cls[theme]])}>
            {title && <h1 className={cls.title}>{title}</h1>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
});
