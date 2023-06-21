import { instance } from '../../config';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getUsers = createAsyncThunk(
  'users/getUsers',
  async (_, { rejectWithValue }) => {
    try {
      const users = await instance.get(`/users`);
      return users.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const followUser = createAsyncThunk(
  'users/followUser',
  async (
    { user, tweets, followers, avatar, following, id },
    { rejectWithValue }
  ) => {
    try {
      //To Unfollow
      if (following) {
        const newBody = {
          user,
          tweets,
          followers: followers - 1,
          avatar,
          following: !following,
          id,
        };
        const users = await instance.put(`/users/${id}`, newBody);
        return users.data;
      }
      //To Follow
      const newBody = {
        user,
        tweets,
        followers: followers + 1,
        avatar,
        following: !following,
        id,
      };
      const users = await instance.put(`/users/${id}`, newBody);
      return users.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
