import { Box } from "@mui/material";
import { ToastContainer } from "react-toastify";
import { appMainBox } from "./AppStyle";
import NoteApp from "./components/NoteApp/NotesApp";

function App() {
  return (
    <Box sx={appMainBox}>
      <ToastContainer position="top-center" />
      <NoteApp />
    </Box>
  );
}

export default App;
