import React, { useState } from 'react';
import OneCountry from './OneCountry'

const CountriesInfo = ({countries}) => {
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

export default CountriesInfo;