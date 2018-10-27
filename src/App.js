import React from 'react';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header/>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default App;
