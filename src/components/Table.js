import React from 'react' 

const Table = props => {
  const data = props.data
  const list = data.map((country, index) => {
    return (
      <tr key={index}>
        <td className='country'>{country.country}</td>
        <td className='capital'>{country.capital}</td>
        <td className='region'>{country.region}</td>
        <td className='subregion'>{country.subregion}</td>
      </tr>
    )
  })
  return (
    <table>
      <thead>
        <tr>
          <th>Country</th>
          <th>Capital</th>
          <th>Region</th>
          <th>Subregion</th>
        </tr>
        {list}
      </thead>
    </table>
  )
}

export default Table