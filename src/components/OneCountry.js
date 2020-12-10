import React from 'react';

const OneCountry = ({ country, isShow }) => {
    if(isShow)
    return (
      <div>
        <h1> {country.name} </h1>
        <p> capital {country.capital}</p>
        <p> population {country.population} </p>
        <h1> Languages </h1>
        <ul>
          {country.languages.map((lanage, index) => <li key={index}> {lanage.name} </li>)}
        </ul>
        <img src={country.flag} alt='flag' width='180' height='120' />
      </div>
    ) 
    else return (
     <div></div>
    )
  }

export default OneCountry;