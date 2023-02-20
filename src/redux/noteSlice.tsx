

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Note {
  id: string;
  text: string;
}

interface NotesState {
  notes: Note[];
  searchText: string;
}

const initialState: NotesState = {
  notes: [],
  searchText: "",
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<Note>) => {
      state.notes.push(action.payload);
    },
    deleteNote: (state, action: PayloadAction<string>) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },
    setSearchText: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload;
    },
  },
});

export const { addNote, deleteNote, setSearchText } = notesSlice.actions;

export default notesSlice.reducer;
