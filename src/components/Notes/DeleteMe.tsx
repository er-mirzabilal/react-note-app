// src/components/NewNote.tsx

import { Add } from "@mui/icons-material";
import { Box, Button, TextField } from "@mui/material";
import { FC, useState } from "react";

interface Props {
  onAdd: (text: string) => void;
}

const NewNote: FC<Props> = ({ onAdd }) => {
  const [text, setText] = useState("");

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onAdd(text);
    setText("");
    
  };

  return (
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
              label="New Note"
              fullWidth
              variant="outlined"
              value={text}
              onChange={handleTextChange}
            />
          </Box>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={!text}
          >
            <Add />
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default NewNote;
