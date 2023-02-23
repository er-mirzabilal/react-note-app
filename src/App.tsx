import { Box } from "@mui/material";
import { ToastContainer } from "react-toastify";
import { appMainBox } from "./AppStyle";

import NotesApp from "./components/NoteApp/NotesApp";

function App() {
  return (
    <Box sx={appMainBox}>
      <ToastContainer position="top-center" />
      <NotesApp />
    </Box>
  );
}

export default App;
