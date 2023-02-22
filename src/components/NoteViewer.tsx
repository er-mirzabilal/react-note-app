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
import { Modal, TextareaAutosize, TextField } from "@mui/material";
import { RootState } from "../redux";
import { generateId } from "../utiles/common";
import { NoteType } from "../utiles/types";
import { noteValidation } from "../utiles/validation";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
    background: "red",
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
    background: "green      ",
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
    width: 900,
    height: 860,
    bgcolor: "#90a4ae",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return (
    // <BootstrapDialog
    //   aria-labelledby="customized-dialog-title"
    //   open={open}
    //   onClose={handleClose}
    // >
    //   <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
    //     <Box mb={2}>
    //       <Box
    //         sx={{
    //           display: "flex",
    //           justifyContent: "space-between",
    //           // background: "green",
    //         }}
    //       >
    //         <Box>
    //           <TextField
    //             label="Title"
    //             fullWidth
    //             variant="outlined"
    //             value={title}
    //             onChange={(e) => setTitle(e.target.value)}
    //           />
    //         </Box>
    //       </Box>
    //     </Box>
    //   </BootstrapDialogTitle>
    //   <DialogContent dividers>
    //     <TextareaAutosize
    //       style={{ width: 560 }}
    //       minRows={3}
    //       value={note}
    //       onChange={(e) => setNote(e.target.value)}
    //     />
    //   </DialogContent>
    //   <DialogActions>
    //     <Button autoFocus onClick={handleNoteSubmit}>
    //       Save changes
    //     </Button>
    //   </DialogActions>
    // </BootstrapDialog>
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
            <TextField
              label="Title"
              fullWidth
              variant="standard"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <TextareaAutosize
              style={{ width: 890 }}
              minRows={30}
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
              <Button autoFocus onClick={handleNoteSubmit}>
               Save changes
         </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};
export default NoteViewer;
