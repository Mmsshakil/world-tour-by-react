import { useState } from 'react';
import './Country.css'

// here we will show all country data and by country parameter we will take value
const Country = ({ country }) => {
    // console.log(country);
    const { name, flags, population, area } = country;

    const [visited, setVisited] = useState(false);
    const handleVisited = () => {
        setVisited(!visited);
    }

    return (
        <div className="country">

            <h3>{name?.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <button onClick={handleVisited}> {visited ? 'Visited' : 'Going'} </button>
            <br />
            {visited ? 'I have visited this country.' : 'I want to visit'}
        </div>
    );
};

export default Country;