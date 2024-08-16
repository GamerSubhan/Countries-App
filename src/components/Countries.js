import React, { useEffect, useState } from 'react';
import data from '../data.json';
import { Link } from 'react-router-dom';
import Filter from './Filter.js';
import '../index.css';

function Countries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    // Check if the imported data is an array and set it to state
    if (Array.isArray(data)) {
      setCountries(data);
    } else {
      console.error('Imported data is not an array:', data);
    }

    const lightTheme = document.querySelector('.light-theme');
    const details = document.querySelectorAll('.country-name');

    if(lightTheme !== null)
    {
      const searchInput = document.querySelector('#searchInput');
      const dropdown = document.getElementById('select');

      searchInput.style.backgroundColor = 'hsl(209, 23%, 22%)';
      searchInput.classList.add('customerPlaceholder');
      searchInput.style.color = 'white';
      dropdown.style.backgroundColor = 'hsl(209, 23%, 22%)';
      dropdown.style.color = 'white'; 
    }
  }, []);

  return (
    <div>
      <Filter />
      <ul id='countryList' className='.countries'>
        {countries.length > 0 ? (
          countries.map((country, index) => (
            <li id={country.name} className='country-name' key={index}>
              <img src={country.flags.svg} alt={`Flag of ${country.name}`} width="270" height='170' />
              <h3>{country.name}</h3>
              <p>Population: <span>{country.population}</span></p>
              <p>Region: <span className='region'>{country.region}</span></p>
              <p>Capital: <span>{country.capital}</span></p>

              <Link to={`/country/${country.name}`} className='btn'>Learn more</Link>
            </li>
          ))
        ) : (
          <p>Loading data...</p>
        )}
      </ul>
    </div>
  );
}

export default Countries;
