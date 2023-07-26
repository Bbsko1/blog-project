/* eslint-disable max-len */
/* eslint-disable i18next/no-literal-string */
import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Sidebar } from 'widgets/Sidebar';
import { Navbar } from 'widgets/Navbar';
import { Suspense, useState } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';
import { AppRoute } from './providers/routes';
import { useTheme } from './providers/ThemeProvider';

function App() {
    const { theme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Suspense fallback="">
            <div className={classNames('app', {}, [theme])}>
                <Navbar />
                <button onClick={toggleModal} type="button">
                    Open Modal
                </button>
                <div className="page-content">
                    <Sidebar />
                    <AppRoute />
                </div>
                <Modal isOpen={isOpen} closeModal={toggleModal}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis dolores nisi veritatis doloremque accusamus excepturi voluptatem omnis praesentium sed! Libero ratione eos harum pariatur quibusdam recusandae necessitatibus ad, dolores architecto autem omnis sapiente aperiam rerum excepturi veritatis exercitationem, vero et quisquam suscipit numquam illum repellendus, aspernatur reiciendis hic. Perferendis blanditiis beatae aliquid ipsam quisquam aspernatur eius modi mollitia rerum iste quas aut, expedita cupiditate explicabo repellendus aliquam eaque eos ad sunt corrupti, qui laudantium quam impedit? Minus labore provident vero voluptatum impedit id architecto pariatur consequuntur quisquam maxime commodi voluptate non quibusdam, eum iste, ea, et ipsum. Odio, esse voluptates!
                </Modal>
            </div>
        </Suspense>
    );
}

export default App;
