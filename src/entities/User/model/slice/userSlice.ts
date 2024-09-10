import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IUser } from '../types/user.types.ts';

const initialState: Partial<IUser> = {};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    initialUser: (_, action: PayloadAction<IUser>) => {
      return { ...action.payload };
    },
  },
});

export const { actions: userAction, reducer: userReducer } = userSlice;
