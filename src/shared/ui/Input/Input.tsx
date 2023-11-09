import { classNames } from 'shared/lib/classNames/classNames';
import { AllHTMLAttributes, RefObject, memo } from 'react';
import cls from './Input.module.scss';

interface InputProps extends AllHTMLAttributes<HTMLInputElement> {
    className?: string;
    type?: string;
    value?: string;
    onRef?: RefObject<HTMLInputElement>;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        type = 'text',
        value,
        onRef,
        ...otherProps
    } = props;

    return (
        <input
            type={type}
            className={classNames(cls.Input, {}, [className])}
            value={value}
            ref={onRef}
            {...otherProps}
        />
    );
});
