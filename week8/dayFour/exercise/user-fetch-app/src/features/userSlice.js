import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUser = createAsyncThunk('user/fetchUser', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
  return response.data;
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    data: {},
    status: 'idle', 
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
