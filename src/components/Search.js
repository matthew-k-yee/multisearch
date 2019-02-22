import React from 'react' 
import Table from './Table'

class Search extends React.Component {
  constructor(props){
    super(props)
      this.state= ({
        filtered: [],
        countrySearch: '',
        capitalSearch: '',
        regionSearch: '',
        subregionSearch: ''
      })
  }
  
  handleCountryChange = e => {
    let data = this.props.data
    const countrySearch = this.state.countrySearch.toLowerCase()
    if (countrySearch !== '') {
      data = data.filter(item => (
        item.country.toLowerCase().match(countrySearch)
      ))
    }
    this.setState({
      countrySearch: e.target.value
    })
    console.log(data)
  }

  handleCapitalChange = e => {
    let data = this.props.data
    const capitalSearch = this.state.capitalSearch.toLowerCase()
    if (capitalSearch !== '') {
      data = data.filter(item => (
        item.capital.toLowerCase().match(capitalSearch)
      ))
    }
    this.setState({
      capitalSearch: e.target.value
    })
    console.log(data)
  }

  handleRegionSearch = e => {
    let data = this.props.data
    const regionSearch = this.state.regionSearch.toLowerCase()
    if (regionSearch !== '') {
      data = data.filter(item => (
        item.region.toLowerCase().match(regionSearch)
      ))
    }
    this.setState({
      regionSearch: e.target.value
    })
    console.log(data)
  }

  handleSubregionSearch = e => {
    let data = this.props.data
    const subregionSearch = this.state.subregionSearch.toLowerCase()
    if (subregionSearch !== '') {
      data = data.filter(item => (
        item.subregion.toLowerCase().match(subregionSearch)
      ))
    }
    this.setState({
      subregionSearch: e.target.value
    })
    console.log(data)
  }

  render(){
    return (
      <div>
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
            <Table data={this.props.data}/>
      </div>
    )
  }
}


export default Search 

