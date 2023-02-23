import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux";
import { setSearchText } from "../../redux/noteSlice";

import NoteList from "../NoteList/NoteList";
import { Box, Button, TextField, Typography } from "@mui/material";
import { data } from "../../data/notes";
import { Add } from "@mui/icons-material";
import { NoteType } from "../../utiles/types";
import NoteViewer from "../NoteViewer/NoteViewer";
import { INITIAL_NOTE } from "../../utiles/constants";
import {
  noteAppMain,
  noteAppSearchMain,
  noteAppTextfield,
} from "./NoteAppStyle";

const NotesApp: FC = () => {
  const dispatch = useDispatch();
  const [notes, setNotes] = useState<NoteType[]>([]);
  const searchText = useSelector((state: RootState) => state.notes.searchText);
  const [open, setOpen] = useState(false);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [noteData, setNoteData] = useState<NoteType>(INITIAL_NOTE);

  const handleAddNote = () => {
    setNoteData(INITIAL_NOTE);
    setOpen(true);
    setEditMode(false);
  };

  const handleDeleteNote = (id: string, e: any) => {
    e.stopPropagation();
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  const handleSearchTextChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(setSearchText(event.target.value));
  };

  useEffect(() => {
    setNotes(data);
  }, []);

  const submitNote = (data: NoteType) => {
    if (editMode) {
      const index = notes.findIndex((note) => note.id === data.id);
      console.log(index);
      const updatedNotes = [...notes];
      updatedNotes.splice(index, 1, data);
      console.log("up", updatedNotes);
      setNotes(updatedNotes);
    } else {
      const updateNotes = [...notes];
      updateNotes.push(data);
      console.log(data, updateNotes);
      setNotes(updateNotes);
    }
    setOpen(false);
    setNoteData(INITIAL_NOTE);
  };

  const handleUpdateNote = (data: NoteType) => {
    setNoteData(data);
    setOpen(true);
    setEditMode(true);
  };
  return (
    <Box sx={noteAppMain}>
      <>
        <Box mt={4} mb={2}>
          <Typography variant="h4" align="center">
            Notes
          </Typography>
        </Box>

        <Box mb={2} sx={noteAppSearchMain}>
          <TextField
            sx={noteAppTextfield}
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={handleSearchTextChange}
          />

          <Button variant="contained" onClick={handleAddNote}>
            <Add />
          </Button>
        </Box>

        <NoteViewer
          open={open}
          data={noteData}
          handleSubmit={submitNote}
          handleClose={() => setOpen(false)}
        />
        <NoteList
          notes={notes}
          searchText={searchText}
          onDelete={handleDeleteNote}
          onClick={handleUpdateNote}
        />
      </>
    </Box>
  );
};

export default NotesApp;
