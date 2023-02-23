import { Box } from "@mui/material";
import { FC } from "react";
import { NoteType } from "../../utiles/types";
import Note from "../Notes/Note";
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
    <>
      {filteredNotes?.map((note) => (
        <Box boxShadow={4} onClick={() => onClick?.(note)}>
          <Note key={note.id} note={note} onDelete={onDelete} />
        </Box>
      ))}
    </>
  );
};

export default NoteList;
