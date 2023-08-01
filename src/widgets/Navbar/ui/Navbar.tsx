/* eslint-disable max-len */
/* eslint-disable i18next/no-literal-string */
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonThemes } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={classNames(className, {}, [cls.navbar])}>
            <Button theme={ButtonThemes.CLEAR} onClick={toggleModal}>
                {t('Login')}
            </Button>

            <Modal isOpen={isOpen} closeModal={toggleModal}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis dolores nisi veritatis doloremque accusamus excepturi voluptatem omnis praesentium sed! Libero ratione eos harum pariatur quibusdam recusandae necessitatibus ad, dolores architecto autem omnis sapiente aperiam rerum excepturi veritatis exercitationem, vero et quisquam suscipit numquam illum repellendus, aspernatur reiciendis hic. Perferendis blanditiis beatae aliquid ipsam quisquam aspernatur eius modi mollitia rerum iste quas aut, expedita cupiditate explicabo repellendus aliquam eaque eos ad sunt corrupti, qui laudantium quam impedit? Minus labore provident vero voluptatum impedit id architecto pariatur consequuntur quisquam maxime commodi voluptate non quibusdam, eum iste, ea, et ipsum. Odio, esse voluptates!
            </Modal>
        </div>
    );
};
