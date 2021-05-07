import logo from './logo.svg';
import React from 'react';
import './App.css';
import { Mensagem } from './Components/Mensagem/Mensagem';
import styled from 'styled-components';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Mensagem />
      </div>
    );
  }
  
}

export default App;
