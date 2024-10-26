import './App.css';
import Accordian from './Components/Accordian';
import { useState } from 'react';

function App() {
  const [mapFocus, setMapFocus] = useState("https://www.google.com/maps/d/u/0/embed?mid=1Y_Il1S6_7BPXw0Rqt9EkcdiBvLVEnl8&ehbc=2E312F&noprof=1")
  console.log(mapFocus)
  return (
    <div className="App">
      <header className="App-header">
        <h1>Nick & Kitty's Definitive Guide to Boulder, CO</h1>
        <p>Welcome! We're so excited to show you where we live. Have a look at some of our favorite things to do here :)</p>
        <iframe title="map" src="https://www.google.com/maps/d/embed?mid=1Y_Il1S6_7BPXw0Rqt9EkcdiBvLVEnl8&ehbc=2E312F" width="640" height="480"></iframe>        </header>
      <div>
        <Accordian setMapFocus={setMapFocus}/>
      </div>
      <p className='footer'>Made with ❤️ by Nick and Kitty</p>
    </div>

  );
}

export default App;


