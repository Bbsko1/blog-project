import { profileReducer } from 'entities/Profile';
import { useTranslation } from 'react-i18next';
import { ReducerList, useDynamicModuleLoader } from 'shared/lib/hooks/useDynamicModuleLoader';

const inititalReducer: ReducerList = { PROFILE: profileReducer };

function ProfilePage() {
    const { t } = useTranslation();

    useDynamicModuleLoader({ reducers: inititalReducer, removeAftrerUnmount: false });

    return (
        <h1>{t('ProfilePageTitle')}</h1>
    );
}

export default ProfilePage;
