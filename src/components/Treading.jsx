// import React, { useEffect, useState } from 'react'
// import { Link, json } from 'react-router-dom'

// const Treading = () => {
//     const [contries,setContries]=useState([])
//     useEffect(()=>{
//         fetch('https://restcountries.com/v2/all')
//         .then(res=>res.json)
//         .then(json=>setContries(json))
//     },[])
//       return (
//     <div className='grid-container'>
//     {
//         contries.map((contry,index)=>(
//             <div key={contry.name} className='card'>
//       <div className='card-flag-container'>
//             <Link to={contry.alpha2Code}> <img className='card-flag' src="contry.flag.svg" alt="" /> </Link>
//       </div>

//       <div className='card-info'>
//         <h2>{contry.name}</h2>
//         <p>population:{contry.population}</p>
//         <p>{contry.region}</p>
//         <p>{contry.capital}</p>
//       </div>
//             </div>
//         ))
//     }

//     </div>
//   )
// }

// export default Treading


import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Treading = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v2/all')
            .then(res => res.json())
            .then(data => setCountries(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className='grid-container'>
            {countries.map((country, index) => (
                <div key={country.name} className='card'>
                    <div className='card-flag-container'>
                        <Link to={country.alpha2Code}>
                            <img className='card-flag' src={country.flag} alt={`${country.name} flag`} />
                        </Link>
                    </div>
                    <div className='card-info'>
                        <h2>{country.name}</h2>
                        <p>Population: {country.population}</p>
                        <p>Region: {country.region}</p>
                        <p>Capital: {country.capital}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Treading;
