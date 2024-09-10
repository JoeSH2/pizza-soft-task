import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IUser } from '@/entities/User';
import { UserRole } from '@/shared/consts/userRole.ts';
import { Direction, SortKey } from '@/shared/lib/sortingUsers.tsx';

export type FilteredByIsArchive = 'все' | 'активные' | 'в архиве';

interface UserListState {
  users: IUser[] | undefined;
  filteredUsers: IUser[];
  sortedBy: {
    key: SortKey;
    direction: Direction;
  };
  filteredByRole: UserRole | '';
  filteredByArchive: FilteredByIsArchive;
}

const initialState: UserListState = {
  users: [],
  filteredUsers: [],
  sortedBy: {
    key: 'name',
    direction: 'asc',
  },
  filteredByArchive: 'все',
  filteredByRole: '',
};

export const userListSlice = createSlice({
  name: 'userList',
  initialState,
  reducers: {
    initialUserList: (state, action: PayloadAction<IUser[]>) => {
      state.users = action.payload;
    },
    setFilteredUsers: (state, action: PayloadAction<IUser[]>) => {
      state.filteredUsers = action.payload;
    },
    setSortedBy: (state, action: PayloadAction<SortKey>) => {
      if (action.payload === state.sortedBy.key) {
        state.sortedBy = {
          key: state.sortedBy.key,
          direction: state.sortedBy.direction === 'asc' ? 'desc' : 'asc',
        };
      } else {
        state.sortedBy = {
          key: action.payload,
          direction: 'asc',
        };
      }
    },
    setFilteredByRole: (state, action: PayloadAction<UserRole | ''>) => {
      state.filteredByRole = action.payload;
    },
    setFilteredByArchive: (
      state,
      action: PayloadAction<FilteredByIsArchive>
    ) => {
      state.filteredByArchive = action.payload;
    },
  },
});

export const { actions: userListAction, reducer: userListReducer } =
  userListSlice;
