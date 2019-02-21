import React, { Component } from 'react';
import Search from './components/Search'
import Table from './components/Table'
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props)
    this.state = ({
      data: [],
      countrySearch: [],
      capitalSearch: [],
      regionSearch: [],
      subregionSearch: [],
      filter: []
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

  handleChange = e => {
    let currentList = [];
    let newList = [];
    if (e.target.value !== '') {
      currentList = this.state.data;
      newList.filter(item => {
        const lc = currentList.toLowerCase()
        const filter = e.target.value.toLowerCase()
        return lc.includes.filter
      })
    } else {
      newList = this.state.data
    } 
    this.setState({
      filter: newList
    })
    console.log(e.target.value)
  }
  

  render() {
    return (
      <div className="App">
        <h1>Country/Capital Data Multi-Search Service</h1>
        <Search 
          handleChange={this.handleChange} 
          data={this.state.data } 
          />
      </div>
    );
  }
}

export default App;
