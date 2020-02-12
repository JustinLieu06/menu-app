import React from 'react';
import './App.css';
import ItemIndex from './components/Items/ItemIndex';
import TopNavBar from './components/TopNavBar/TopNavBar';

function App() {
  return (
    <div className="App">
      <TopNavBar />
      <ItemIndex />
    </div>
  );
}

export default App;
