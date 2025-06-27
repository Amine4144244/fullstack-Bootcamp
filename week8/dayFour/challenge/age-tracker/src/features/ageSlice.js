import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const ageUpAsync = createAsyncThunk('age/ageUpAsync', async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(1), 1000);
  });
});

export const ageDownAsync = createAsyncThunk('age/ageDownAsync', async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(1), 1000);
  });
});

const ageSlice = createSlice({
  name: 'age',
  initialState: {
    value: 20,
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(ageUpAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(ageUpAsync.fulfilled, (state, action) => {
        state.value += action.payload;
        state.loading = false;
      })
      .addCase(ageDownAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(ageDownAsync.fulfilled, (state, action) => {
        state.value -= action.payload;
        state.loading = false;
      });
  },
});

export default ageSlice.reducer;