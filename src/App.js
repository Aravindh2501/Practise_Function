import React from 'react'
import "./App.css";
import ToDo from './Task/Todo/ToDo'
import Counter from './Task/Counter/Counter'
import Weather from './Task/Weather/Weather';
import ProfileCard from './Task/Profile/ProfileCard';
import ToogleTheme from './Task/ToogleTheme/ToogleTheme';
import Cart from './Task/Shopping/Cart';
import Gallery from './Task/Gallery/Gallery';
import Accordin from './Task/Accordin/Accordin';
import Timer from './Task/Timer/Timer';

const App = () => {
  return (
    <div className='app'>
      <Counter />
      <ToDo />
      <Weather />
      <ProfileCard />
      <ToogleTheme />
      <Cart />
      <Gallery />
      <Accordin />
      <Timer />
    </div>
  )
}

export default App