// dataSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface DataState {
  data: any[];
  symbol: string;
}

const initialState: DataState = {
  data: [],
  symbol: 'GOOG',
};

export const fetchData = createAsyncThunk(
  'data/fetchData',
  async (symbol: string) => {
    const response = await axios.get(`http://localhost:5000/api/data/${symbol}`);
    return response.data;
  }
);

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setSymbol: (state, action) => {
      state.symbol = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export const { setSymbol } = dataSlice.actions;
export default dataSlice.reducer;
