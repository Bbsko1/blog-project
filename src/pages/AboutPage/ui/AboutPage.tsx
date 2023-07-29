import { Counter } from 'entities/Counter';
import { useTranslation } from 'react-i18next';

function AboutPage() {
    const { t } = useTranslation();

    return (
        <div>
            <h1>{t('AboutPage')}</h1>
            <Counter />
        </div>
    );
}

export default AboutPage;
