import React, { Component } from 'react';
import Search from './components/Search'
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props)
    this.state = ({
      data: [],
      country: [],
      capital: [],
      region: [],
      subregion: []
    })
  }

  async componentDidMount() {
    await this.getCountries()
  }

  async getCountries() {
    const request = await axios.get('https://restcountries.eu/rest/v2/all')
    const response = request.data 
    const list = [];
    for(let i = 0; i< response.length; i++) {
      let data = [];
      data.country = response[i].name
      data.capital = response[i].capital
      data.region = response[i].region
      data.subregion = response[i].subregion 
      list[i] = data
    }
    this.setState({
      data:  list,
      capital:  response.data,
      region:  response.data,
      subregion: response.data,
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Country/Capital Data Multi-Search Service</h1>
        <Search 
          data={this.state.data}
          country ={this.state.country}
          capital ={this.state.capital}
          region ={this.state.region}
          subregion ={this.state.subregion}
        />
      </div>
    );
  }
}

export default App;
