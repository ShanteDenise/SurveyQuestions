import React, { Component } from 'react';
import RadioButton from './Components/RadioButton';
import SingleAnswer from './Components/SingleAnswer';
import EssayQuestion from './Components/EssayQuestion';
import './App.css';
import CheckBox from './Components/CheckBox';

class App extends Component {
  render() {
    return (
      <div>
      <RadioButton/>
      <CheckBox/>
      <SingleAnswer/>
      <EssayQuestion/>
      </div>
    );
  }
}

export default App;
