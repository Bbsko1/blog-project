import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import cls from './AuthModal.module.scss';
import { AuthForm } from '../AuthForm/AuthForm';

interface AuthModalProps {
    className?: string;
    isOpen?: boolean;
    closeModal: () => void;
}

export const AuthModal = ({ className, closeModal, isOpen }: AuthModalProps) => {
    return (
        <Modal
            isOpen={isOpen}
            closeModal={closeModal}
            className={classNames(cls.AuthModal, {}, [className])}
            lazy
        >
            <AuthForm />
        </Modal>
    );
};
