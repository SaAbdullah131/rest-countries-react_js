

import React from 'react';
import "./Country.css";

const Country = (props) => {
    // console.log(props.country.area)
    const {name,region,capital,population,flags} = props.country;
    return (
        <div className='country'>
            <h2>Country Name: {name.common}</h2>
            <img src={flags.png} alt=" "/>
            <h3>Capital: {capital}</h3>
            <h5>Region:{region}</h5>
            <h4>Population:{population}</h4>
        </div>
    );
};

export default Country;