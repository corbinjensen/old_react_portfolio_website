import React, { Component } from 'react';
import '../css/style.css';
import Header from './Header';
import Intro from './Intro';
import SectionTitle from './SectionTitle';
import Photos from './Photos';
import Clients from './Clients';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Intro />
        <SectionTitle title="Work" />
        <Photos />
        <Clients />
        <Footer />
      </div>
    );
  }
}

export default App;
