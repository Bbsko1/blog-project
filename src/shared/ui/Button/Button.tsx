import { classNames } from 'shared/lib/classNames/classNames';
import {
    ButtonHTMLAttributes, ReactNode, memo,
} from 'react';
import cls from './Button.module.scss';

type ButtonSize = 'M' | 'L' | 'XL';

enum ButtonType {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

type ButtonThemes = 'clear' | 'outline' | 'background' | 'backgroundInverted';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonThemes;
    size?: ButtonSize;
    square?: boolean;
    children: ReactNode;
    hasBorder?: boolean;
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        children,
        theme = 'outline',
        size = 'M',
        square,
        hasBorder = false,
        ...otherProps
    } = props;

    return (
        <button
            type="button"
            className={
                classNames(
                    cls.Button,
                    { [cls.square]: square, [cls.hasBorder]: hasBorder },
                    [className, cls[theme], cls[ButtonType[size]]],
                )
            }
            {...otherProps}
        >
            {children}
        </button>
    );
});
