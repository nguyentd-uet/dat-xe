import React, { Component } from 'react';
import Header from './component/header/Header';
import Footer from './component/footer/Footer';
import Main from './component/main/Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />  
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
