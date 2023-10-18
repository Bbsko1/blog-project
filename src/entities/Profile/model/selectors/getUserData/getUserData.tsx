import { useAppSelector } from 'shared/lib/hooks/useAppSelector';
import { initialState } from '../../slice/profile.slice';

// eslint-disable-next-line react-hooks/rules-of-hooks
export const getUserData = () => useAppSelector((state) => state?.PROFILE?.data) || initialState.data;
