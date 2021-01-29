import React from 'react';
import './default.scss';
import Header from './components/header/index';
import Homepage from './pages/Homepage';

function App() {
  return (
    <div className="App">
      <Header />
      <Homepage />
    </div>
  );
}

export default App;
