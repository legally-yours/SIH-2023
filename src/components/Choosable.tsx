import React from "react";
import { Typography, Button } from "@mui/material";
import Box from "@mui/material/Box";

interface ChoosableProps {
  categoryName: string;
  choices: string[];
}

const Choosable: React.FC<ChoosableProps> = ({ categoryName, choices }) => {
  return (
    <Box
      sx={{
        marginTop: "20px",
        padding: "10px",
      }}
    >
      <Typography variant="h6">{categoryName}</Typography>
      <Box
        sx={{
          display: "flex",
          marginTop: "10px",
          gap: "10px",
          justifyContent: "center",
        }}
      >
        {choices.map((choice, index) => (
          <Button
            key={index}
            variant="contained"
            color="primary"
            sx={{
              color: "#03045E",
              background: "#FFFFFF",
              "&:hover": {
                color: "#FFFFFF",
                background: "#03045E",
              },
            }}
          >
            {choice}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default Choosable;
