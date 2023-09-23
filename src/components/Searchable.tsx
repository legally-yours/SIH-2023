import { Typography, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import ButtonComp from "./ButtonComp";

interface SearchableProps {
  categoryName: string;
}

const Searchable: React.FC<SearchableProps> = ({ categoryName }) => {
  const categoryNameLength = categoryName.length;

  const marginRight =
    categoryNameLength >= 8
      ? "20px"
      : `${8 + (10 - categoryNameLength - (categoryNameLength - 8)) * 5}px`;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        marginTop: "20px",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          marginRight: marginRight,
          marginTop: "8px",
          marginLeft: "10px",
        }}
      >
        {categoryName}
      </Typography>
      <TextField
        variant="outlined"
        placeholder="Search..."
        sx={{ height: "30px", marginRight: "50px", width: "300px" }}
      />
      <Box sx={{ marginTop: "20px" }}>
        <ButtonComp buttonText="Search" onClick={() => {}}></ButtonComp>
      </Box>
    </Box>
  );
};

export default Searchable;
