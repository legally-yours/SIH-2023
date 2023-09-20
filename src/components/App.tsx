//import { useState } from "react";
import Navbar from "./Navbar";
import InfoCard from "./InfoCard";
import { Typography } from "@mui/material";
import EmptyImage from "../assets/EmptyImage.png";
import Calendar from './Calender.tsx';
//import "./App.css";

function App() {
  const currentDate = new Date();
  return (
    <>
      <Navbar></Navbar>
      <InfoCard header="Rohit Sinha" image={EmptyImage}>
        <Typography variant="body2" color="#0077B6">
          Expert In Civilian And Financial Cases.
        </Typography>
      </InfoCard>
      <div className="Calendar">
      <Calendar date={currentDate} />
    </div>

    </>
  );
}

export default App
