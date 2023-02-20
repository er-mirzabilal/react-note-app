import { Add } from "@mui/icons-material";
import {
  Box,
  Button,
  Dialog,
  Divider,
  Grid,
  Modal,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux";
import { addNote } from "../redux/noteSlice";
import { addNewItem } from "../redux/openModeSlice";
import NewNote from "./Notes/NewNote";

const AddNotes = () => {
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddNote = (text: string) => {
    dispatch(addNote({ id: Date.now().toString(), text }));
    setIsModalOpen(false);
  };

  return (
    <Box>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setIsModalOpen(true)}
      >
        <Add />
      </Button>

      <Dialog
        keepMounted
        fullWidth
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        sx={{
          "& .MuiDialog-paper": {
            maxWidth: "770px !important",
            p: 3,

            boxShadow: "none",
            boxRadius: "none",
            margin: 1,
            width: "100%",
          },
        }}
      >
        <NewNote onAdd={handleAddNote} />
      </Dialog>
    </Box>
  );
};

export default AddNotes;
