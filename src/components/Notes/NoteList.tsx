import { Box, MenuItem } from "@mui/material";
import { FC } from "react";

import { Note as NoteType } from "../../redux/noteSlice";

import Note from "./Note";

interface Props {
  notes: NoteType[];
  searchText: string;
  onDelete: (id: string) => void;
}

const NoteList: FC<Props> = ({ notes, searchText, onDelete }) => {
  const filteredNotes = notes.filter((note) =>
    note.text.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <Box
      sx={{
        boxShadow: "0px 0px 44px 0px rgba(0, 0, 0, 0.55)",
        margin: 2,
      }}
    >
      {filteredNotes.map((note) => (
        <MenuItem sx={{ background: "green", margin: 2,  }}>
          <Note key={note.id} note={note} onDelete={onDelete} />
        </MenuItem>
      ))}
    </Box>
  );
};

export default NoteList;
