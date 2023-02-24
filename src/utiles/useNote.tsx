import { useState, useEffect } from "react";
import { data } from "../data/notes";
import { INITIAL_NOTE } from "./constants";
import { NoteType } from "./types";

const useNotes = () => {
  const [notes, setNotes] = useState<NoteType[]>([]);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [noteData, setNoteData] = useState<NoteType>(INITIAL_NOTE);
  const [open, setOpen] = useState(false);

  const handleAddNote = () => {
    setNoteData(INITIAL_NOTE);
    setEditMode(false);
    setOpen(true);
  };

  const handleDeleteNote = (id: string, e: any) => {
    e.stopPropagation();
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };
  const submitNote = (data: NoteType) => {
    if (editMode) {
      const index = notes.findIndex((note) => note.id === data.id);
      const updatedNotes = [...notes];
      updatedNotes.splice(index, 1, data);
      setNotes(updatedNotes);
    } else {
      const updatedNotes = [...notes];
      updatedNotes.push(data);
      setNotes(updatedNotes);
    }
    setEditMode(false);
    setNoteData(INITIAL_NOTE);
    setOpen(false);
  };
  const handleUpdateNote = (data: NoteType) => {
    setNoteData(data);
    setEditMode(true);
    setOpen(true);
  };

  useEffect(() => {
    setNotes(data);
  }, []);
  return {
    notes,
    handleAddNote,
    handleDeleteNote,
    submitNote,
    handleUpdateNote,
    noteData,
    editMode,
    setOpen,
    open,
  };
};

export default useNotes;
