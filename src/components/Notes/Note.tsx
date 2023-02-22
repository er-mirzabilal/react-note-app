import { Delete } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import { FC } from "react";

import { NoteType } from "../../utiles/types";

interface Props {
  note: NoteType;
  onDelete: (id: string, e: any) => void;
}

const Note: FC<Props> = ({ note, onDelete }) => {

  return (
    <Box mb={2} sx={{ display: "flex", justifyContent: "space-between", p: 2 }}>
      <Typography variant="p-lg">{note.title}</Typography>
      <IconButton aria-label="delete" onClick={(e) => onDelete(note.id, e)}>
        <Delete />
      </IconButton>
    </Box>
  );
};

export default Note;
