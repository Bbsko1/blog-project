import { classNames } from 'shared/lib/classNames/classNames';
import { ChangeEvent, useMemo } from 'react';
import cls from './Select.module.scss';

export interface SelectOptions {
    value: string | number;
    content: string | number;
}

interface SelectProps {
    className?: string;
    label?: string;
    options: SelectOptions[];
    value?: string;
    onChange?: (value: string) => void;
    readonly?: boolean;
}

export const Select = ({
    className, label, options, value, onChange, readonly,
}: SelectProps) => {
    const optionElems = useMemo(() => (
        options.map((opt) => (
            <option className={cls.option} key={opt.value} value={opt.value}>
                {opt.content}
            </option>
        ))
    ), [options]);

    const changeEvent = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className={cls.Wrapper}>
            {label && (
                <span className={cls.label}>
                    {label}
                </span>
            )}
            <select
                className={classNames(cls.select, {}, [className])}
                value={value}
                onChange={changeEvent}
                disabled={readonly}
            >
                {optionElems}
            </select>
        </div>
    );
};
