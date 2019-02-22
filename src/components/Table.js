import React from 'react' 

const Table = props => {

    let data = props.data
    const countrySearch = props.countrySearch.toLowerCase()
    const capitalSearch = props.capitalSearch.toLowerCase()
    const regionSearch = props.regionSearch.toLowerCase()
    const subregionSearch = props.subregionSearch.toLowerCase()

    if (countrySearch !== '') {
      data = data.filter(item => (
        item.country.toLowerCase().match(countrySearch)
      ))
    }

    if (capitalSearch !== '') {
      data = data.filter(item => (
        item.capital.toLowerCase().match(capitalSearch)
      ))
    }

    if (regionSearch !== '') {
      data = data.filter(item => (
        item.region.toLowerCase().match(regionSearch)
      ))
    }

    if (subregionSearch !== '') {
      data = data.filter(item => (
        item.subregion.toLowerCase().match(subregionSearch)
      ))
    }

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