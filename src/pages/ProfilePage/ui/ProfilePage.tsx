import { useTranslation } from 'react-i18next';

function ProfilePage() {
    const { t } = useTranslation();

    return (
        <h1>{t('ProfilePageTitle')}</h1>
    );
}

export default ProfilePage;
