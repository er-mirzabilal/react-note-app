import * as React from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import { Alert, IconButton, Modal, Snackbar, TextField } from "@mui/material";
import { NoteType } from "../utiles/types";
import { noteValidation } from "../utiles/validation";
import { Close, Delete } from "@mui/icons-material";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
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

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",

    bgcolor: "gray",
    border: "none",
    height: "600px",
    boxShadow: 24,
    paddingX: 4,
    paddingBottom: 4,
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
        <Box sx={style}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              paddingBottom: 3,
              marginTop: 2,
            }}
          >
            <IconButton aria-label="delete" onClick={handleClose}>
              <Close
                sx={{
                  color: "white",
                }}
              />
            </IconButton>
          </Box>
          <Box>
            <Box sx={{ marginBottom: "10px", height: "480px" }}>
              <TextField
                sx={{
                  marginBottom: "10px",
                  borderBottom: "1px dotted gray",
                }}
                variant="outlined"
                fullWidth
                placeholder="New Note..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />

              <TextField
                style={{ textAlign: "left", border: "none" }}
                multiline
                fullWidth
                placeholder="Note"
                value={note}
                onChange={(e) => setNote(e.target.value)}
              />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "end" }}>
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
