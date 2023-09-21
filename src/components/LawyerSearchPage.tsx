// import React from 'react'
import Navbar from './Navbar.tsx';
import InfoCard from './InfoCard.tsx';
import EmptyImage from "../assets/EmptyImage.png";
import { Typography } from '@mui/material';
import '../styles/LawyerSearchPage.css';
const LawyerSearchPage = () => {
    const lawyers : [string, string, string][] = [["Name 1", EmptyImage, "Some stuff"], ["Name 2", EmptyImage, "Some other stuff"], ["Name 3", EmptyImage, "Some more stuff"], ["Name 4", EmptyImage, "Some weird stuff"], ["Name 5", EmptyImage, "Some crazy stuff"], ["Name 6", EmptyImage, "Some interesting stuff"]];

  return (
    <>
    <Navbar></Navbar>
    <div className="tile-set">
    {lawyers.map((data, index) => (
        <div className="tile">
        <InfoCard key={"" + index} header={data[0]} image={data[1]}>
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