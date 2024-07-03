import { useState } from 'react';
import './CSS/Countries.css';

export default function Country({ countObj, handleVisitedCountries, handleVisitedFlags }) {
    const { name, flags } = countObj;
    const [visited, setVisited] = useState(false);

    const handleBtn = () => {
        setVisited(!visited);
    };

    const markAsVisited = () => {
        handleVisitedCountries(countObj);
        handleVisitedFlags(countObj);
        setVisited(true);
    };

    return (
        <div className={`card ${visited ? 'visited' : ''}`}>
            <h3>Name: {name.common}</h3>
            <img src={flags.png} alt={`${name.common} flag`} />
            <button className='btn-style' onClick={handleBtn}>{visited ? 'Visited' : 'Going'}</button>
            <button className='btn-style' onClick={markAsVisited}>Mark As Visited</button>
            <h3 style={{ color: visited ? 'purple' : 'red' }}>{visited ? 'Already Visited This Country' : 'Want to Visit This Country'}</h3>
        </div>
    );
}
