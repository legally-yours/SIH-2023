import { useState } from 'react'
import React from 'react';
import './App.css'
import Calendar from './components/Calender.tsx';

function App() {
  const currentDate = new Date();
  return (
    <div className="App">
      <Calendar date={currentDate} />
    </div>
  );
}

export default App
