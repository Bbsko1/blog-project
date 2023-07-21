import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.scss';

type ButtonSize = 'M' | 'L' | 'XL';

enum ButtonType {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

export enum ButtonThemes {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgorundInverted',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonThemes;
    size?: ButtonSize,
    square?: boolean,
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        size = 'M',
        square,
        ...otherProps
    } = props;

    return (
        <button
            type="button"
            className={
                classNames(
                    cls.Button,
                    { [cls.square]: square },
                    [className, cls[theme], cls[ButtonType[size]]],
                )
            }
            {...otherProps}
        >
            {children}
        </button>
    );
};
