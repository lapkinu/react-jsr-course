import { createSlice } from '@reduxjs/toolkit';
import { normalizedUsers } from '../../../materials/normalized-mock';

const initialState = {
  entities: normalizedUsers.reduce((acc, item) => {
    acc[item.id] = item;
    return acc;
  }, {}),
  ids: normalizedUsers.map((item) => item.id),
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
});

export const usersReduser = usersSlice.reducer;
