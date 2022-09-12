import React from 'react';
import Header from './Header';
import CoffeeControl from './CoffeeControl';
import '../App.css';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";


function App() {
  return (
    <React.Fragment>
      <Header />
      <CoffeeControl />
    </React.Fragment>
  );
}

export default App;
