import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Item {
  id: number;
  name: string;
}

interface ItemState {
  items: Item[];
}

const initialState: ItemState = {
  items: [],
};

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addNewItem: (state, action: PayloadAction<string>) => {
      const newId =
        state.items.length > 0 ? state.items[state.items.length - 1].id + 1 : 1;
      const newItem: Item = { id: newId, name: action.payload };
      state.items.push(newItem);
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addNewItem, removeItem } = itemsSlice.actions;
export default itemsSlice.reducer;
