import React from 'react';
import HeaderContent from "./Components/HeaderContent/HeaderContent";
import BodyContent from "./Components/BodyContent/BodyContent";
import CardContent from "./Components/CardContent/CardContent";
import FilterBarContent from "./Components/FilterBarContent/FilterBarContent";
import BookingConfirmationForm from "./Components/BookingConfirmationForm/BookingConfirmationForm";
import FooterContent from "./Components/FooterContent/FooterContent";

import './App.css';

function App() {
  return (
    <div id="wrapper">
      <HeaderContent />
      <BodyContent />
      <CardContent/>
      <FilterBarContent/>
      <BookingConfirmationForm/>
      <FooterContent/>
    </div>
  );
}

export default App;
