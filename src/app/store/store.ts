import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { userReducer } from '@/entities/User';
import { userListReducer } from '@/features/UserList';
import { apiRtkQuery } from '@/shared/api/apiRtkQuery.ts';

const rootReducer = combineReducers({
  user: userReducer,
  userList: userListReducer,
  [apiRtkQuery.reducerPath]: apiRtkQuery.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiRtkQuery.middleware),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
