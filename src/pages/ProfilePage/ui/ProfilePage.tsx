import { profileReducer } from 'entities/Profile';
import { ProfileCard } from 'entities/Profile/ui/ProfileCard/ProfileCard';
import { ReducerList, useDynamicModuleLoader } from 'shared/lib/hooks/useDynamicModuleLoader';

const inititalReducer: ReducerList = { PROFILE: profileReducer };

function ProfilePage() {
    useDynamicModuleLoader({ reducers: inititalReducer, removeAftrerUnmount: false });

    return (
        <ProfileCard />
    );
}

export default ProfilePage;
