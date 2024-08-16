import React from 'react';

const Filter = () => {

    const searchHandler = () => {
        const countryName = document.querySelectorAll('.country-name');
        const searchInput = document.getElementById('searchInput');

        countryName.forEach(country => {
            if(country.id.toLowerCase().includes(searchInput.value.toLowerCase())) {
                country.style.display = 'block';
            }
            else
            {
                country.style.display = 'none';
            }
        })
    }

    const filterHandler = () => {
        const dropdownValue = document.getElementById('select').value;
        const countryName = document.querySelectorAll('.country-name');

        countryName.forEach(country => {
            const region = country.querySelector('.region');

            if(dropdownValue.includes(region.textContent))
            {
                country.style.display = 'block';
            }
            else
            {
                country.style.display = 'none';
            }

            if(dropdownValue === 'resetRegion')
            {
                country.style.display = 'block';
            }
        });
    }

  return (
    <section className='filterSection'>
        <form className='form-control'>
            <input type='search' name='search' id='searchInput'
            placeholder='Search for a country...' onInput={searchHandler}></input>
        </form>

        <div>
            <select id='select' name='select' className='select' onChange={filterHandler}>
                <option value='resetRegion'>Filter by region</option>
                <option value='Africa'>Africa</option>
                <option value='Americas'>America</option>
                <option value='Asia'>Asia</option>
                <option value='Europe'>Europe</option>
                <option value='Oceanias'>Oceania</option>
            </select>
        </div>
    </section>
  )
}

export default Filter