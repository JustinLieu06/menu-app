import React from 'react';
import './App.css';
import ItemIndex from './components/Items/ItemIndex';
import TopNavBar from './components/TopNavBar/TopNavBar';
import DATA from './data';

function App() {
  return (
    <div className="App">
      <TopNavBar data={DATA}/>
      <ItemIndex data={DATA}/>
    </div>
  );
}

export default App;
