// import { Add } from "@mui/icons-material";
// import {
//   Box,
//   Button,
//   Dialog,
//   Divider,
//   Grid,
//   Modal,
//   TextField,
// } from "@mui/material";
// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { RootState } from "../redux";
// import { addNote } from "../redux/noteSlice";
// import { addNewItem } from "../redux/openModeSlice";
// import NewNote from "./Notes/NewNote";

// const AddNotes = () => {
//   const dispatch = useDispatch();

//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleAddNote = (text: string) => {
//     dispatch(addNote({ id: Date.now().toString(), text }));
//     setIsModalOpen(false);
//   };

//   return (
//     <Box>
//       <Button
//         variant="contained"
//         color="primary"
//         onClick={() => setIsModalOpen(true)}
//       >
//         <Add />
//       </Button>

//       <Dialog
//         keepMounted
//         fullWidth
//         open={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//         sx={{
//           "& .MuiDialog-paper": {
//             maxWidth: "770px !important",
//             p: 3,

//             boxShadow: "none",
//             boxRadius: "none",
//             margin: 1,
//             width: "100%",
//           },
//         }}
//       >
//         <NewNote onAdd={handleAddNote} />
//       </Dialog>
//     </Box>
//   );
// };

// export default AddNotes;

import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { Add } from "@mui/icons-material";
import { addNote, NotesState } from "../redux/noteSlice";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/system";
import { TextareaAutosize, TextField } from "@mui/material";
import { RootState } from "../redux";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}
interface Props {
  onAdd: (text: string) => void;
}

const NewNote = () => {
  const { newNote, editMode } = useSelector((state: RootState) => state.notes);

  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [text, setText] = React.useState("");

  const handleAddNote = (text: string) => {
    // dispatch(addNote({ id: Date.now().toString(), text }));
  };
  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleAddNote(text);
    setText("");
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        <Add />
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          <Box mb={2}>
            <form onSubmit={handleSubmit}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  // background: "green",
                }}
              >
                <Box>
                  <TextField
                    label="Title"
                    fullWidth
                    variant="outlined"
                    value={text}
                    onChange={handleTextChange}
                  />
                </Box>
                {/* <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={!text}
                >
                  <Add />
                </Button> */}
              </Box>
            </form>
          </Box>
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <TextareaAutosize style={{ width: 560 }} minRows={3} />
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            disabled={!text}
            type="submit"
            onClick={handleClose}
          >
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
};
export default NewNote;
