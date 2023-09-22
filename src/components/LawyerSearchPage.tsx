import React from "react";
import InfoCard from "./InfoCard.tsx";
import EmptyImage from "../assets/EmptyImage.png";
import { Typography } from "@mui/material";
import "../styles/LawyerSearchPage.css";
import Box from "@mui/material/Box";

interface Props {
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
  current_page: string;
}

const LawyerSearchPage = ({ setCurrentPage, current_page }: Props) => {
  const lawyers: [string, string, string][] = [
    ["Name 1", EmptyImage, "Some stuff"],
    ["Name 2", EmptyImage, "Some other stuff"],
    ["Name 3", EmptyImage, "Some more stuff"],
    ["Name 4", EmptyImage, "Some weird stuff"],
    ["Name 5", EmptyImage, "Some crazy stuff"],
    ["Name 6", EmptyImage, "Some interesting stuff"],
    ["Name 1", EmptyImage, "Some stuff"],
    ["Name 2", EmptyImage, "Some other stuff"],
    ["Name 3", EmptyImage, "Some more stuff"],
    ["Name 4", EmptyImage, "Some weird stuff"],
    ["Name 5", EmptyImage, "Some crazy stuff"],
    ["Name 6", EmptyImage, "Some interesting stuff"],
  ];

  const handleCardClick = () => {
    if (current_page === "detailed_view") {
      setCurrentPage("initial_view");
    } else {
      setCurrentPage("detailed_view");
    }
  };

  const CommonStyles = {
    borderRadius: "12px",
    border: "1px solid #ccc",
    overflow: "hidden",
  };

  return (
    <>
      <Box
        sx={{
          ...CommonStyles,
          border: "1px solid #ccc",
          maxHeight: "80%",
          width: "30%",
          float: "left",
          marginTop: "7%",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography variant="h5">Search</Typography>
        </Box>
        <Box></Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography variant="h5">Filters</Typography>
        </Box>
        <Box></Box>
      </Box>
      <Box sx={{ width: "70%", marginLeft: "30%" }}>
        <div className="tile-set">
          {lawyers.map((data, index) => (
            <div className="tile" key={index}>
              <InfoCard
                onClick={handleCardClick}
                header={data[0]}
                image={data[1]}
              >
                <Typography variant="body2" color="#0077B6">
                  {data[2]}
                </Typography>
              </InfoCard>
            </div>
          ))}
        </div>
      </Box>
    </>
  );
};

export default LawyerSearchPage;
