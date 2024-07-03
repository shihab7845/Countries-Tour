import { useState, useEffect } from "react";
import Country from './country'

export default function Countries() {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(data => setCountries(data))
            .catch(error => console.error("Error fetching countries:", error));
    }, []);

    const handleVisitedCountries = (country) => {
        if (!visitedCountries.includes(country)) {
            setVisitedCountries([...visitedCountries, country]);
        }
    };

    const handleVisitedFlags = (country) => {
        if (!visitedFlags.some(flag => flag.name.common === country.name.common)) {
            setVisitedFlags([...visitedFlags, country]);
        }
    };

    return (
        <div>
            <div>
                <h3>Visited countries: {visitedCountries.length}</h3>
                <div>
                    {
                        visitedFlags.map((flag, index) => (
                            <img key={index} src={flag.flags.png} alt={`${flag.name.common} flag`} style={{ width: '50px', height: '30px', marginRight: '10px' }} />
                        ))
                    }
                </div>
                <ul>
                    {
                        visitedCountries.map((country) => (
                            <li key={country.name.common}>{country.name.common}</li>
                        ))
                    }
                </ul>
            </div>
            <div className="countries-grid">
                {
                    countries.map(country => (
                        <Country 
                            key={country.cca3}
                            handleVisitedCountries={handleVisitedCountries}
                            handleVisitedFlags={handleVisitedFlags}
                            countObj={country} 
                        />
                    ))
                }
            </div>
        </div>
    );
}
