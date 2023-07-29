/* eslint-disable i18next/no-literal-string */
import { classNames } from 'shared/lib/classNames/classNames';
import { useDispatch, useSelector } from 'react-redux';
import { Button, ButtonThemes } from 'shared/ui/Button/Button';
import { decrement, increment } from '../model/slice/counter.slice';
import cls from './Counter.module.scss';
import { getCounterValue } from '../model/selectors/getCounterValue';

interface CounterProps {
    className?: string;
}

export const Counter = ({ className }: CounterProps) => {
    const count = useSelector(getCounterValue);
    const dispatch = useDispatch();

    const incrementValue = () => {
        dispatch(increment());
    };

    const decrementValue = () => {
        dispatch(decrement());
    };

    return (
        <div className={classNames(cls.Counter, {}, [className])}>
            <div>
                {`Value ${count}`}
            </div>

            <Button theme={ButtonThemes.BACKGROUND_INVERTED} onClick={incrementValue}>
                increment
            </Button>

            <Button theme={ButtonThemes.OUTLINE} onClick={decrementValue}>
                decrement
            </Button>
        </div>
    );
};
