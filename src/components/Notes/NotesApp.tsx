import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux";
import { addNote, deleteNote, setSearchText } from "../../redux/noteSlice";

import NoteList from "./NoteList";
import NewNote from "./DeleteMe";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import AddNotes from "../NoteViewer";
import { data } from "../../data/notes";
import { Add } from "@mui/icons-material";
import { generateId } from "../../utiles/common";
import { NoteType } from "../../utiles/types";
import NoteViewer from "../NoteViewer";
import { INITIAL_NOTE } from "../../utiles/constants";

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
    <Box
      sx={{
        margin: "auto",
        p: 2,
        width: "500px",

        color: "white",
        alignItems: "center",
        height: "96.4vh",
      }}
    >
      <>
        <Box mt={4} mb={2}>
          <Typography variant="h4" align="center">
            Notes
          </Typography>
        </Box>

        <Box
          mb={2}
          sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}
        >
          <Box
            sx={{
              mt: 4,
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <TextField
              sx={{
                boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.55)",
              }}
              type="text"
              placeholder="Search"
              value={searchText}
              onChange={handleSearchTextChange}
            />

            <Button variant="outlined" onClick={handleAddNote}>
              <Add />
            </Button>
          </Box>
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
