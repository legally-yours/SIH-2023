// App.tsx
/*
import { useState } from "react";
import Navbar from "./Navbar";
import InfoCard from "./InfoCard";
import LawyerDetails from "./LawyerDetails";
import { Typography } from "@mui/material";
import EmptyImage from "../assets/EmptyImage.png";

function App() {
  const [current_page, setCurrentPage] = useState("initial_view");

  const handleCardClick = () => {
    if (current_page === "detailed_view") {
      setCurrentPage("initial_view");
    } else {
      setCurrentPage("detailed_view");
    }
  };

  const lawyerInfo = {
    name: "Rohit Sinha",
    contact: "+91 935-395-8508",
    specialization: "Criminal Defense",
    location: "Banagalore, Karnataka",
    experience: "10+ Years",
    price: "$100",
    rating: "4.5",
    description:
      "A Criminal Defense Attorney is a legal professional with specialized expertise in defending individuals or entities accused of criminal activities. These dedicated advocates play a crucial role in upholding the principles of justice, ensuring fair trials, and safeguarding the rights of their clients within the criminal justice system.",
  };

  return (
    <>
      <Navbar setCurrentPage={setCurrentPage} />
      {current_page === "initial_view" ? (
        <InfoCard
          header="Rohit Sinha"
          image={EmptyImage}
          onClick={handleCardClick}
        >
          <Typography variant="body2" color="#0077B6">
            Expert In Civilian And Financial Cases.
          </Typography>
        </InfoCard>
      ) : (
        <LawyerDetails
          current_page={current_page}
          setCurrentPage={setCurrentPage}
          details={lawyerInfo}
        />
      )}
    </>
  ); 
*/
//import { useState } from "react";
// import Navbar from "./Navbar";
// import InfoCard from "./InfoCard";
// import { Typography } from "@mui/material";
// import EmptyImage from "../assets/EmptyImage.png";
// import Calendar from './Calender.tsx';
// import LawyerSearchPage from "./LawyerSearchPage.tsx";
import HomePage from "./HomePage.tsx";
//import "./App.css";

function App() {
  // const currentDate = new Date();
  // return (
  //   <>
  //     <Navbar></Navbar>
  //     <InfoCard header="Rohit Sinha" image={EmptyImage}>
  //       <Typography variant="body2" color="#0077B6">
  //         Expert In Civilian And Financial Cases.
  //       </Typography>
  //     </InfoCard>
  //     <div className="Calendar">
  //     <Calendar date={currentDate} />
  //   </div>

  //   </>
  // );
  return <HomePage></HomePage>
}

export default App
