import React, { useEffect, useState } from 'react'
import axios from 'axios'

const OneCountry = ({ country, isShow }) => {
  if(isShow)
  return (
    <div>
      <h1>{country.name}</h1>
      <p> capital {country.capital}</p>
      <p> population {country.population} </p>
      <h1>Languages</h1>
      <ul>
        {country.languages.map((lanage, index) => <li key={index}> {lanage.name} </li>)}
      </ul>
      <img src={country.flag} alt='flag' width='180' height='120' />
    </div>
  ) 
  else return (
    <div>
    </div>
  )
}

const Show = ({countries}) => {
  const [ isShow, setShow ] = useState(false)
  const [ newCountry, setCountry ] = useState({})

  if(countries.length > 10 || countries.length === 0) {
    return (
      <p>Too many mathes, specify another filter</p>
    ) 
  } else if(countries.length < 10 && countries.length > 1) {
    const handleShow = (prop) => {     
      setCountry(prop)
      setShow(true)
    }
    return (
      <div>
      <ul>
        {countries.map((country, index) => <li key={index}>{country.name} <button type="button" onClick={() => handleShow(country)}>show</button> </li>)}
      </ul>
      <OneCountry country={newCountry} isShow={isShow} />
      </div>
    )
  } else {
    return (
      <OneCountry country={countries[0]} isShow={true} />
    )
  }
}
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
      <Show countries={found} />
    </div>
  )
}

export default App