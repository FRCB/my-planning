import React, { Component } from 'react';
import './App.css';
import Day from './components/Day.js'
import './components/Day.css'
import Header from './components/Header.js'
import Quote from './components/Quote.js'
import Music from './components/Music.js'
import Time from './components/Time.js'


class App extends Component {
  constructor() {
    super();

    this.state = {
      sunday: "Sunday",
      monday: "Monday",
      tuesday: "Tuesday",
      wednesday: "Wednesday",
      thursday: "Thursday",
      friday: "Friday",
      saturday: "Saturday",

    }
  }

  render() {
    return (
      <div id='root'>
        <Header />
        <Quote />
        <main className='planning-box'>
          <Day day={this.state.sunday} />
          <Day day={this.state.monday} />
          <Day day={this.state.tuesday} />
          <Day day={this.state.wednesday} />
          <Day day={this.state.thursday} />
          <Day day={this.state.friday} />
          <Day day={this.state.saturday} />
        </main>
        <br />
        <Music />
        <Time />
      </div >
    );
  }
}

export default App;
