import { createSlice } from '@reduxjs/toolkit';
import { getUsers } from './users-operation';

const initialState = { data: [], filter: 'ShowAll' };

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    filterSelection: (state, { payload }) => {
      state.filter = payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(getUsers.fulfilled, (state, { payload }) => {
      state.data = payload;
    });
  },
});

export const { filterSelection } = usersSlice.actions;
