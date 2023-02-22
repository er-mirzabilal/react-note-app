import { Box } from "@mui/material";
import { ToastContainer } from "react-toastify";
import "./App.css";
import NotesApp from "./components/Notes/NotesApp";

function App() {
  return (
    <Box
      sx={{
        maxWidth: "1650px",
        margin: "auto",
        height: "100vh",
        background: "gray",
        boxShadow: "0px 0px 44px 0px rgba(0, 0, 0, 0.55)",
      }}
    >
      <ToastContainer position="top-center" />
      <NotesApp />
    </Box>
  );
}

export default App;
