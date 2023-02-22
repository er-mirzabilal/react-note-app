import { Box, MenuItem } from "@mui/material";
import { FC } from "react";

import { NoteType } from "../../utiles/types";

// import { Note as NoteType } from "../../redux/noteSlice";

import Note from "./Note";

interface Props {
  notes: NoteType[];
  searchText: string;
  onDelete: (id: string, e: any) => void;
  onClick?: (data: NoteType) => void;
}

const NoteList: FC<Props> = ({ notes, searchText, onDelete, onClick }) => {
  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <Box
      sx={{
        boxShadow: "0px 0px 44px 0px rgba(0, 0, 0, 0.55)",
        margin: 2,
      }}
    >
      {filteredNotes?.map((note) => (
        <MenuItem
          sx={{ background: "#546e7a", margin: 2 }}
          onClick={() => onClick?.(note)}
        >
          <Note key={note.id} note={note} onDelete={onDelete} />
        </MenuItem>
      ))}
    </Box>
  );
};

export default NoteList;
