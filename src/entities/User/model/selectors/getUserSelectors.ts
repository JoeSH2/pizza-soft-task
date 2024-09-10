import { RootState } from '@/app/store/store.ts';

export const getUserSelector = (state: RootState) => state.user;
export const getUserIdSelector = (state: RootState) => state.user.id;
