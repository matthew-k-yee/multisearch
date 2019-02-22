import React, { Component } from 'react';
import Table from './components/Table'
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props)
    this.state = ({
      data: [],
      countrySearch: '',
      capitalSearch: '',
      regionSearch: '',
      subregionSearch: ''
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

  handleCountryChange = e => {
    this.setState({
      countrySearch: e.target.value
    })
  }

  handleCapitalChange = e => {
    this.setState({
      capitalSearch: e.target.value
    })
  }

  handleRegionSearch = e => {
    this.setState({
      regionSearch: e.target.value
    })
  }

  handleSubregionSearch = e => {
    this.setState({
      subregionSearch: e.target.value
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Country/Capital Data Multi-Search Service</h1>
        <input 
            type="text" 
            name='country'
            placeholder='Filter by country' 
            onChange={this.handleCountryChange}  
            />
          <input 
            type="text" 
            name='capital'
            placeholder='Filter by capital' 
            onChange={this.handleCapitalChange}  
            />
          <input 
            type="text" 
            name='region'
            placeholder='Filter by region' 
            onChange={this.handleRegionSearch}  
            />
          <input 
            type="text" 
            name='subregion'
            placeholder='Filter by subregion' 
            onChange={this.handleSubregionSearch}  
            />
          <Table 
            data={this.state.data}
            countrySearch={this.state.countrySearch}
            capitalSearch={this.state.capitalSearch}
            regionSearch={this.state.regionSearch}
            subregionSearch={this.state.subregionSearch}
            />
      </div>
    );
  }
}

export default App;
