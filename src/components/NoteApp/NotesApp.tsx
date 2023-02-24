import { FC, useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Add } from "@mui/icons-material";

import NoteList from "../NoteList/NoteList";
import NoteViewer from "../NoteViewer/NoteViewer";
import {
  noteAppMain,
  noteAppSearchMain,
  noteAppTextfield,
} from "./NoteAppStyle";
import useNotes from "../../utiles/useNote";
import useSearchText from "../../utiles/useSearch";
const NoteApp: FC = () => {
  const {
    notes,
    handleAddNote,
    handleDeleteNote,
    submitNote,
    handleUpdateNote,
    noteData,
    setOpen,
    open,
  } = useNotes();
  const { searchText, handleSearchTextChange } = useSearchText();
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
export default NoteApp;
