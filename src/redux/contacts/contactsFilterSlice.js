import { createSlice } from '@reduxjs/toolkit';
export const filterSlice = createSlice({
  name: 'filter',
  initialState: {value: ''},
  reducers: {
    filter: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { filter } = filterSlice.actions;
// export const filterReducer = filterSlice.reducer;
