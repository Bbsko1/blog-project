import { classNames } from 'shared/lib/classNames/classNames';
import { InputHTMLAttributes, memo } from 'react';
import cls from './Input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    type?: string;
    value?: string;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        type = 'text',
        value,
        ...otherProps
    } = props;

    return (
        <input
            type={type}
            className={classNames(cls.Input, {}, [className])}
            value={value}
            {...otherProps}
        />
    );
});
