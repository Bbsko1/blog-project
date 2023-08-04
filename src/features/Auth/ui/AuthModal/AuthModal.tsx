import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
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
            className={classNames('', {}, [className])}
            lazy
        >
            <AuthForm />
        </Modal>
    );
};
