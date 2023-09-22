// import React from 'react'
import InfoCard from './InfoCard.tsx';
import EmptyImage from "../assets/EmptyImage.png";
import { Typography } from '@mui/material';
import '../styles/LawyerSearchPage.css';

interface Props {
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>; // Add this prop
  current_page: string;
}

const LawyerSearchPage = ({setCurrentPage, current_page}: Props) => {
    const lawyers : [string, string, string][] = [["Name 1", EmptyImage, "Some stuff"], ["Name 2", EmptyImage, "Some other stuff"], ["Name 3", EmptyImage, "Some more stuff"], ["Name 4", EmptyImage, "Some weird stuff"], ["Name 5", EmptyImage, "Some crazy stuff"], ["Name 6", EmptyImage, "Some interesting stuff"],["Name 1", EmptyImage, "Some stuff"], ["Name 2", EmptyImage, "Some other stuff"], ["Name 3", EmptyImage, "Some more stuff"], ["Name 4", EmptyImage, "Some weird stuff"], ["Name 5", EmptyImage, "Some crazy stuff"], ["Name 6", EmptyImage, "Some interesting stuff"]];

    const handleCardClick = () => {
      if (current_page === "detailed_view") {
        setCurrentPage("initial_view");
      } else {
        setCurrentPage("detailed_view");
      }
    };

  return (
    <>
    <div className="tile-set">
    {lawyers.map((data, index) => (
        <div className="tile">
        <InfoCard onClick={handleCardClick} key={"" + index} header={data[0]} image={data[1]}>

     <Typography key={"" + index} variant="body2" color="#0077B6">
     {data[2]}
   </Typography>
    </InfoCard>
    </div>
    ))}
    </div>
    </>
  )
}

export default LawyerSearchPage;