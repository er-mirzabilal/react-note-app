import { Box } from "@mui/material";
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
      <NotesApp />
    </Box>
  );
}

export default App;
