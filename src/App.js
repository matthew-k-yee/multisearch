import React, { Component } from 'react';
import Search from './components/Search'
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props)
    this.state = ({
      country: '',
      capital: '',
      region: '',
      subregion: ''
    })
  }

  async componentDidMount() {
    const request = await axios.get('https://restcountries.eu/rest/v2/all')
    const response = request.data 
    console.log(response)
  }

  render() {
    return (
      <div className="App">
        <h1>Country/Capital Data Multi-Search Service</h1>
        <Search />
      </div>
    );
  }
}

export default App;
