import React from 'react';
import PropTypes from 'prop-types';

function Keg(prop) {

	return(
		<div>
			<h3>{prop.name}</h3>
			<h3>{prop.brewer}</h3>
            <h3>{prop.abv}</h3>
            <h3>{prop.description}</h3>
            <h3>{prop.price}</h3>
            <h3>{prop.remaining}</h3>
		</div>
	)
}

Keg.propTypes = {
    name: PropTypes.string,
    brewer: PropTypes.string,
    abv: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.string,
    remaining: PropTypes.number
}

export default Keg;