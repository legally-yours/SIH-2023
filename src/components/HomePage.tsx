// import React from 'react'
import Navbar from './Navbar.tsx';
import Footer from './Footer.tsx';
import IconDescription from './IconDescription.tsx';
import Description from './Description.tsx';

interface Props {
    setCurrentPage: React.Dispatch<React.SetStateAction<string>>; // Add this prop
}

const HomePage = ({setCurrentPage}: Props) => {
    return (
        <>
        <Navbar setCurrentPage={setCurrentPage}></Navbar>
        <IconDescription></IconDescription>
        <Description></Description>
        <Footer></Footer>
        </>
      )
}

export default HomePage;