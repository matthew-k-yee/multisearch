import React from 'react' 

class Search extends React.Component {
  constructor(props){
    super(props)
    this.state = ({
      
    })
  }

  render() {
    console.log(this.props.data)
    return (
      <div>
        <input 
          type="text" 
          name='country'
          placeholder='Filter by country' 
          onChange={this.handleChange}  
          />
        <input 
          type="text" 
          name='capital'
          placeholder='Filter by capital' 
          onChange={this.handleChange}  
          />
        <input 
          type="text" 
          name='region'
          placeholder='Filter by region' 
          onChange={this.handleChange}  
          />
        <input 
          type="text" 
          name='subregion'
          placeholder='Filter by subregion' 
          onChange={this.handleChange}  
          />
       <p>hi</p>
      </div>
    )
  }
}

export default Search 