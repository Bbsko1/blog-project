import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { Button, ButtonThemes } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { decrement, increment } from '../model/slice/counter.slice';
import cls from './Counter.module.scss';
import { getCounterValue } from '../model/selectors/getCounterValue';

interface CounterProps {
    className?: string;
}

export const Counter = ({ className }: CounterProps) => {
    const count = useSelector(getCounterValue);
    const dispatch = useAppDispatch();
    const { t } = useTranslation();

    const incrementValue = () => {
        dispatch(increment());
    };

    const decrementValue = () => {
        dispatch(decrement());
    };

    return (
        <div className={classNames(cls.Counter, {}, [className])}>
            <div data-testid="title-value">
                {`Value ${count}`}
            </div>

            <Button
                theme={ButtonThemes.BACKGROUND_INVERTED}
                onClick={incrementValue}
                data-testid="increment"
            >
                {t('increment')}
            </Button>

            <Button
                theme={ButtonThemes.OUTLINE}
                onClick={decrementValue}
                data-testid="decrement"
            >
                {t('decrement')}
            </Button>
        </div>
    );
};
