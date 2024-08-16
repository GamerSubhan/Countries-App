import React, { useEffect, useState } from 'react';
import data from '../data.json';
import { Link, useParams } from 'react-router-dom';
import '../country.css';

const Country = () => {
  const [country, setCountry] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    const countryData = data.filter((c) => c.name.toLowerCase() === name.toLowerCase());
    setCountry(countryData);
  }, [name]);

  return (
    <>
      <section className="country">
        <Link id='backBtn' to="/" className="btn btn-light">
          <i className="fas fa-arrow-left"></i> Back
        </Link>
        {country.map((c) => {
          const {
            numericCode,
            flag,
            name,
            nativeName,
            population,
            region,
            subregion,
            capital,
            topLevelDomain,
            currencies,
            languages,
            borders,
          } = c;

          return (
            <article key={numericCode}>
              <div className="country-inner">
                <div className="flag">
                  <img width='500' src={flag} alt={name} />
                </div>

                <div className="country-details">
                  <div>
                    <h2>{name}</h2>
                    <h5>
                      Native Name: <span>{nativeName}</span>
                    </h5>
                    <h5>
                      Population: <span>{population.toLocaleString()}</span>
                    </h5>
                    <h5>
                      Region: <span>{region}</span>
                    </h5>
                    <h5>
                      Sub Region: <span>{subregion}</span>
                    </h5>
                    <h5>
                      Capital: <span>{capital}</span>
                    </h5>
                  </div>

                  <div id='restDetails'>
                    <h5>
                      Top Level Domain: <span>{topLevelDomain.join(', ')}</span>
                    </h5>
                    <h5>
                      Currencies: <span>{currencies.map((currency) => currency.name).join(', ')}</span>
                    </h5>
                    <h5>
                      Languages: <span>{languages.map((language) => language.name).join(', ')}</span>
                    </h5>
                  </div>
                </div>
              </div>

              {borders && borders.length > 0 && (
                <div id='borderCanvas'>
                  <h3>Border Countries: </h3>
                  <div className="borders">
                    {borders.map((border) => (
                      <ul key={border}>
                        <li className='borderTags'>{border}</li>
                      </ul>
                    ))}
                  </div>
                </div>
              )}

            </article>
          );
        })}
      </section>
    </>
  );
}

export default Country;
