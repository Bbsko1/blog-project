import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { Suspense } from 'react';
import { Loader } from 'shared/ui/Loader/Loader';
import { AuthFormLazy } from '../AuthForm/AuthForm.async';

interface AuthModalProps {
    className?: string;
    isOpen?: boolean;
    closeModal: () => void;
}

export const AuthModal = ({ className, closeModal, isOpen }: AuthModalProps) => {
    console.log('isOpen', isOpen);

    return (
        <Modal
            isOpen={isOpen}
            closeModal={closeModal}
            className={classNames('', {}, [className])}
            lazy
        >
            <Suspense fallback={<Loader />}>
                <AuthFormLazy />
            </Suspense>
        </Modal>
    );
};
