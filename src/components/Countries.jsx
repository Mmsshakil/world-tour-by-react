import { useEffect, useState } from "react";
import Country from "./country/Country";
import '../components/Countries-container.css'

const Countries = () => {

    // we use useState to set the data
    const [countries, setCountries] = useState([]);

    // we use useEffect to load the data from api
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, [])

    return (
        <div>
            <h3>Countries: {countries.length}</h3>

            <div className="countries-container">
                {/* nicar part ta bojhi nai */}
                {
                    countries.map(country => <Country key={country.cca3} country={country}></Country>)
                }
            </div>

        </div>
    );
};

export default Countries;