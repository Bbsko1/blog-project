import {
    MouseEvent, ReactNode, useCallback, useEffect,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import cls from './Modal.module.scss';
import { Portal } from '../Portal/Portal';

interface ModalProps {
    className?: string;
    children: ReactNode,
    isOpen?: boolean;
    closeModal: () => void;
    lazy?: boolean;
}

export const Modal = (props: ModalProps) => {
    const {
        className,
        children,
        isOpen = true,
        closeModal,
        lazy,
    } = props;

    const mods: Record<string, boolean> = {
        [cls.open]: isOpen,
    };

    const { theme } = useTheme();

    const onKeyDown = useCallback((evt: KeyboardEvent) => {
        if (evt.key === 'Escape') {
            closeModal();
        }
    }, [closeModal]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [onKeyDown, isOpen]);

    const stopProp = (evt: MouseEvent) => {
        evt.stopPropagation();
    };

    if (lazy && !isOpen) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className, theme])}>
                <div className={cls.overlay} onClick={closeModal}>
                    <div className={cls.content} onClick={stopProp}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
