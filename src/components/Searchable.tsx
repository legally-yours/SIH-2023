import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

interface SearchableProps {
  categoryName: string;
}

const Searchable: React.FC<SearchableProps> = ({ categoryName }) => {
  return (
    <Box>
      <Typography variant="h6">{categoryName}</Typography>
      <input type="text" placeholder="Search..." />
      <button>Search</button>
    </Box>
  );
};

export default Searchable;
