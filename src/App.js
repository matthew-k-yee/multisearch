import React, { Component } from 'react';
import Search from './components/Search'
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props)
    this.state = ({
      data: []
    })
  }

  async componentDidMount() {
    await this.getCountries()
  }

  async getCountries() {
    const request = await axios.get('https://restcountries.eu/rest/v2/all')
    const response = request.data 
    const array = [];
    for(let i = 0; i< response.length; i++) {
      let list = {};
      list.country = response[i].name
      list.capital = response[i].capital
      list.region = response[i].region
      list.subregion = response[i].subregion 
      array[i] = list
    }
    this.setState({
      data: array,
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Country/Capital Data Multi-Search Service</h1>
        <Search data={this.state.data } />
      </div>
    );
  }
}

export default App;
