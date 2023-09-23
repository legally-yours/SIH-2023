// App.tsx

import { useState } from "react";
import Navbar from "./Navbar";
// import InfoCard from "./InfoCard";
// import LawyerDetails from "./LawyerDetails";
// import { Typography } from "@mui/material";
// import EmptyImage from "../assets/EmptyImage.png";
import HomePage from "./HomePage";
import Footer from "./Footer";
import LawyerSearchPage from "./LawyerSearchPage";
import LawyerDetails from "./LawyerDetails";
import '../styles/App.css';
import ContactUs from "./ContactUs";
// import af from '../database/db_testing';
import Login from './Login';
import LawyerSignUp from "./LawyerSignUp";
import ClientSignUp from "./ClientSignUp";

function App() {
  const [current_page, setCurrentPage] = useState("home");
  var cp = current_page;
  var cpp = cp;
  var cp = cpp;
  // const handleCardClick = () => {
  //   if (current_page === "detailed_view") {
  //     setCurrentPage("initial_view");
  //   } else {
  //     setCurrentPage("detailed_view");
  //   }
  // };

  const lawyerInfo = {
    name: "Rohit Sinha",
    contact: "+91 935-395-8508",
    probono: "10",
    specialization: "Criminal Defense",
    location: "Banagalore, Karnataka",
    experience: "10+ Years",
    price: "$100",
    rating: "4.5",
    description:
      "A Criminal Defense Attorney is a legal professional with specialized expertise in defending individuals or entities accused of criminal activities. These dedicated advocates play a crucial role in upholding the principles of justice, ensuring fair trials, and safeguarding the rights of their clients within the criminal justice system.",
  };
  if (current_page == 'home') {
    return (
      <>
        <Navbar setCurrentPage={setCurrentPage} />
        <div className="nav-fixer"></div>
        <HomePage setCurrentPage={setCurrentPage}></HomePage>
        <Footer></Footer>
      </>
    );
  } else if (current_page == 'search') {
    return (
      <>
        <Navbar setCurrentPage={setCurrentPage} />
        <div className="nav-fixer"></div>
        <LawyerSearchPage setCurrentPage={setCurrentPage} current_page={current_page}></LawyerSearchPage>
        <Footer></Footer>
      </>
    );
  } else if (current_page == 'detailed_view') {
    return (<>
      <Navbar setCurrentPage={setCurrentPage} />
      <div className="nav-fixer"></div>
      <LawyerDetails current_page={current_page} setCurrentPage={setCurrentPage} details={lawyerInfo}></LawyerDetails>
      <Footer></Footer>
    </>)
  } else if (current_page == 'contact us') {
    return (<>
      <Navbar setCurrentPage={setCurrentPage} />
      <div className="nav-fixer"></div>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </>)
  } else if (current_page == 'sign in') {
    return (
    <>
      <Navbar setCurrentPage={setCurrentPage} />
      <div className="nav-fixer"></div>
      <Login></Login>
      <Footer></Footer>
</>)

  } else if (current_page == 'lawyer-signup') {
    return (
      <>
        <Navbar setCurrentPage={setCurrentPage} />
        <div className="nav-fixer"></div>
        <LawyerSignUp></LawyerSignUp>
        <Footer></Footer>
  </>)
  } else if (current_page == 'client-signup') {
    return (
      <>
        <Navbar setCurrentPage={setCurrentPage} />
        <div className="nav-fixer"></div>
        <ClientSignUp></ClientSignUp>
        <Footer></Footer>
  </>)
  }
  else {
    return (
      <>
      <Navbar setCurrentPage={setCurrentPage}></Navbar>
      <div className="nav-fixer"></div>
      <h1>{current_page}</h1>
      <Footer></Footer>
      </>
    )
  }
  
 

}
//import { useState } from "react";
// import Navbar from "./Navbar";
// import InfoCard from "./InfoCard";
// import { Typography } from "@mui/material";
// import EmptyImage from "../assets/EmptyImage.png";
// import Calendar from './Calender.tsx';

// import ContactUs from "./ContactUs.tsx";
// import LawyerSearchPage from "./LawyerSearchPage.tsx";
// import HomePage from "./HomePage.tsx";
//import "./App.css";

// function App() {


//   return <HomePage></HomePage>
// }

export default App;
