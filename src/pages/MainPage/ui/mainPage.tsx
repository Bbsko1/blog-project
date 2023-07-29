import { Counter } from 'entities/Counter';
import { useTranslation } from 'react-i18next';

function MainPage() {
    const { t } = useTranslation();

    return (
        <>
            <h1>{t('MainPageTitle')}</h1>
            <Counter />
        </>

    );
}

export default MainPage;
