import { Delete } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import { FC } from "react";

import { Note as NoteType } from "../../redux/noteSlice";

interface Props {
  note: NoteType;
  onDelete: (id: string) => void;
}

const Note: FC<Props> = ({ note, onDelete }) => {
  const handleDeleteClick = () => onDelete(note.id);

  return (
    <Box
      mb={2}
      sx={{ display: "flex", justifyContent: "space-between", p: 2, }}
    >
      <Typography variant="p-lg">{note.text}</Typography>
      <IconButton aria-label="delete" onClick={handleDeleteClick}>
        <Delete />
      </IconButton>
    </Box>
  );
};

export default Note;
