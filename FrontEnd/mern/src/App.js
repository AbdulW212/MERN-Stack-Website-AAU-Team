import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import {useState, useEffect} from 'react'
import {axios} from 'react'
import Nav from './components/Nav';
import Main from './pages/MainPage';
import Players from './pages/PlayersPage';
import Coaches from './pages/CoachesPage';
import Comments from './pages/CommentsPage';



function App() {
  return (
    <div className="App">
      <Nav /> {/* Navigation component */}
      <div className='logoDiv'> <img className='logo' src='https://i.pinimg.com/736x/85/1c/7f/851c7f64ff859039208f4c3771c3118e--alaska-aces-hockey-logos.jpg'></img></div> {/* display logoPic*/}
      
      <Routes> {/* Routing configuration */}
      <Route path="/" element={<Main />} /> {/* Route for main page */}
      <Route path="/players" element={<Players />} />  {/* Route page for the players on team */}      
      <Route path="/coaches" element={<Coaches />} />  {/* Route for the coaches */}
      <Route path="/comments" element={<Comments />} />  {/*Route for the comments page */}
      </Routes>
      <Nav /> {/* Navigation component */}

    </div>
  );
}

export default App;
