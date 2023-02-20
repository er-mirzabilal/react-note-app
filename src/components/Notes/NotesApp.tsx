import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux";
import {
  addNote,
  deleteNote,
  setNotes,
  setSearchText,
} from "../../redux/noteSlice";

import NoteList from "./NoteList";
import NewNote from "./DeleteMe";
import { Box, Container, TextField, Typography } from "@mui/material";
import AddNotes from "../addNotes";
import { data } from "../../data/notes";

const NotesApp: FC = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state: RootState) => state.notes.notes);
  const searchText = useSelector((state: RootState) => state.notes.searchText);

  const handleAddNote = (text: string) => {
    // dispatch(addNote({ id: Date.now().toString(), text }));
  };

  const handleDeleteNote = (id: string) => {
    dispatch(deleteNote(id));
  };

  const handleSearchTextChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(setSearchText(event.target.value));
  };

  useEffect(() => {
    dispatch(setNotes(data));
  }, []);

  return (
    <Box sx={{ p: 2 }}>
      <Container maxWidth="sm">
        <Box mt={4} mb={2}>
          <Typography variant="h4" align="center">
            Notes
          </Typography>
        </Box>
        {/* <NewNote onAdd={handleAddNote} /> */}
        <Box
          mb={2}
          sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}
        >
          <TextField
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={handleSearchTextChange}
          />
          <AddNotes />
        </Box>
        <NoteList
          notes={notes}
          searchText={searchText}
          onDelete={handleDeleteNote}
        />
      </Container>
    </Box>
  );
};

export default NotesApp;
