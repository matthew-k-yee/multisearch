import React from 'react' 

const Table = props => {
  const data = props.data
  const list = data.map((country, index) => {
    return (
      <tr>
        <td>{country.country}</td>
        <td>{country.capital}</td>
        <td>{country.region}</td>
        <td>{country.subregion}</td>
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