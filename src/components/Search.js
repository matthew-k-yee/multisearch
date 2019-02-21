import React from 'react' 

const Search = props => {
  return (
    <div>
       <input 
          type="text" 
          name='country'
          placeholder='Filter by country' 
          onChange={props.handleChange}  
          />
        <input 
          type="text" 
          name='capital'
          placeholder='Filter by capital' 
          onChange={props.handleChange}  
          />
        <input 
          type="text" 
          name='region'
          placeholder='Filter by region' 
          onChange={props.handleChange}  
          />
        <input 
          type="text" 
          name='subregion'
          placeholder='Filter by subregion' 
          onChange={props.handleChange}  
          />
    </div>
  )
}


export default Search 

