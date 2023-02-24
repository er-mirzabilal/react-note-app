import * as React from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import { IconButton, Modal, TextField } from "@mui/material";
import { NoteType } from "../../utiles/types";
import { noteValidation } from "../../utiles/validation";
import { Close } from "@mui/icons-material";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import {
  noteViewerDelete,
  noteViewerMain,
  noteViewerSaveButton,
  noteViewerTextfield,
  noteViewerTextfieldMain,
} from "./NoteViewerStyle";
import useNotes from "../../utiles/useNote";
interface NoteViewerType {
  data: NoteType;
  open: boolean;
  handleSubmit: (data: NoteType) => void;
  handleClose: () => void;
}
const NoteViewer = ({
  open,
  handleClose,
  data,
  handleSubmit,
}: NoteViewerType) => {
  const [title, setTitle] = React.useState(data.title);
  const [note, setNote] = React.useState(data.note);
  const { open: open2 } = useNotes();
  console.log(open2, "open2", open, "open");

  React.useEffect(() => {
    setTitle(data.title);
    setNote(data.note);
  }, [data]);

  const handleNoteSubmit = () => {
    console.log(data);
    const updatedData = {
      ...data,
      title,
      note,
    };
    noteValidation(updatedData)
      .then(() => {
        handleSubmit(updatedData);
      })

      .catch((err) => {
        console.log(err);
        toast.error(err.note);
      });
  };

  return (
    <div>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={noteViewerMain}>
          <Box sx={noteViewerDelete}>
            <IconButton aria-label="delete" onClick={handleClose}>
              <Close color="info" />
            </IconButton>
          </Box>
          <Box>
            <Box sx={noteViewerTextfieldMain}>
              <TextField
                sx={noteViewerTextfield}
                variant="outlined"
                fullWidth
                placeholder="New Note..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />

              <TextField
                multiline
                fullWidth
                placeholder="Note"
                value={note}
                onChange={(e) => setNote(e.target.value)}
              />
            </Box>
            <Box sx={noteViewerSaveButton}>
              <Button variant="outlined" onClick={handleNoteSubmit}>
                Save changes
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};
export default NoteViewer;
