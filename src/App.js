import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './Components/Main';
import Header from './Components/Header';
import Carousel from './Components/Carousel';
import FirstSection from './Components/FirstSection';
import SecondSection from './Components/SecondSection';

function App() {
  return (
    <>
      <Header />
      <Carousel />
      <FirstSection />
      <SecondSection />
    </>
      
      
  )
}

export default App;
