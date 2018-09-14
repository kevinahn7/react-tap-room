import React from 'react';
import PropTypes from 'prop-types';
import Keg from './Keg';

function SelectedKeg(prop) {

	return(
		<div>
			<h3>{prop.selectedKeg.name}</h3>
			<h3>Brewer: {prop.selectedKeg.brewer}</h3>
            <h3>ABV: {prop.selectedKeg.abv}</h3>
            <h3>Description: {prop.selectedKeg.description}</h3>
            <h3>Price: {prop.selectedKeg.price}</h3>
            <h3>Remaining: {prop.selectedKeg.remaining}</h3>
            <button>Sell Pint</button>
		</div>
	)
}

Keg.propTypes = {
   selectedKeg: PropTypes.object
}

export default SelectedKeg;