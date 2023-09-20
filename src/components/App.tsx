import { useState } from 'react'
import React from 'react';
import './App.css'
import Calendar from './Calender.tsx';

function App() {
  const currentDate = new Date();
  return (
    <Navbar></Navbar>
    <div className="Calendar">
      <Calendar date={currentDate} />
    </div>
  );
}

export default App
