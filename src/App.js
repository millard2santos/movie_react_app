import { useEffect, useState } from 'react';
import './App.css';
import ColorTheme from './components/ColorTheme/ColorTheme';
import LikeButton from './components/LikeButton/LikeButton.jsx';
import PokeList from './components/PokeList/PokeList';





function App() {

// --------------Ejercicio 1----------------
  // return (
  //   <>
  //   <LikeButton />
  //   <LikeButton />
  //   </>
  // )

  // ------------------Ejercicio2----------
  // return <ColorTheme />

  // ----------------Ejercicio3---------------
  return <PokeList />
}

export default App;
