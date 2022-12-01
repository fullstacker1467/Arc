import './App.css';
import './Media.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './pages/Home';
import Kitchen from './pages/Kitchen';
import Guest from './pages/Guest';
import Bad from './pages/Bad';
import Come from './pages/Come';
import Child from './pages/Child';
import Stol from './pages/Stol';
import Shkaf from './pages/Shkaf';

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <marquee>Яркий неповторимый дизайн, высокое качество мебели и ее функциональность по доступной цене. Наша компания осуществляет бесплатную доставку в пределах г.Ташкента</marquee>
      <Routes>
        <Route path='/'  element={<Home />}/>
        <Route path='/kitchen'  element={<Kitchen />}/>
        <Route path='/guest'  element={<Guest />}/>
        <Route path='/bad'  element={<Bad />}/>
        <Route path='/come'  element={<Come />}/>
        <Route path='/child'  element={<Child />}/>
        <Route path='/stol'  element={<Stol />}/>
        <Route path='/shkaf'  element={<Shkaf />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
