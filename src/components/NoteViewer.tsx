import * as React from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import { Modal, TextareaAutosize, TextField } from "@mui/material";
import { NoteType } from "../utiles/types";
import { noteValidation } from "../utiles/validation";

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
        console.log(updatedData, "sucess");
        handleSubmit(updatedData);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",

    bgcolor: "gray",
    border: "none",

    boxShadow: 24,
    p: 4,
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
          <Box>
            <Box sx={{ marginBottom: "10px" }}>
              <TextField
                sx={{
                  boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.55)",
                  marginBottom: "10px",
                }}
                fullWidth
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
