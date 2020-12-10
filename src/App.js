import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CountriesInfo from './components/CountriesInfo'

const App = () => {
  const [ countries, setCountries ] = useState([])
  const [ country, setCountry ] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        const data = response.data
        setCountries(data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const handleCountryChange = (event) => {
    setCountry(event.target.value)
  }

  const found = !country ?
  countries : (countries.filter(obj => 
    obj.name.toLocaleLowerCase().indexOf(country.toLocaleLowerCase()) >= 0))

  return (
    <div>
      find countires<input value={country} onChange={handleCountryChange}/>
      <CountriesInfo countries={found} />
    </div>
  )
}

export default App