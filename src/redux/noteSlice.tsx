import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { generateId } from "../utiles/common";
import { NoteType } from "../utiles/types";

export interface NotesState {
  notes: NoteType[];
  searchText: string;
  newNote: NoteType | null;
  editMode: Boolean;
}

const initialState: NotesState = {
  notes: [],
  searchText: "",
  newNote: null,
  editMode: false,
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<NoteType>) => {
      console.log(action.payload);
      state.notes.push(action.payload);
    },
    deleteNote: (state, action: PayloadAction<string>) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },
    setSearchText: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload;
    },
    setNotes: (state, action: PayloadAction<NoteType[]>) => {
      state.notes = action.payload;
    },
  },
});

export const { addNote, deleteNote, setSearchText, setNotes } =
  notesSlice.actions;

export default notesSlice.reducer;
