import React from 'react';
import PropTypes from 'prop-types';
import Keg from './Keg';

function SelectedKeg(prop) {

    function handleSellPint() {
        if (prop.selectedKeg.remaining > 0)
        prop.sellPint(prop.selectedKeg.index);
    }

    function handleRefillKeg() {
        prop.refillKeg(prop.selectedKeg.index);
    }

    let selectedKegStyle = {
        paddingBottom: "20px"
    }

	return(
		<div style={selectedKegStyle}>
            <h2>Details</h2>
			<h3>{prop.selectedKeg.name}</h3>
			<h3>Brewer: {prop.selectedKeg.brewer}</h3>
            <h3>ABV: {prop.selectedKeg.abv}</h3>
            <h3>Description: {prop.selectedKeg.description}</h3>
            <h3>Price: ${prop.selectedKeg.price}</h3>
            <h3>Remaining: {prop.selectedKeg.remaining}</h3>
            <button onClick={handleSellPint}>Sell Pint</button>
            <button onClick={handleRefillKeg}>Refill Pint</button>
            <button onClick={prop.closeSelectedKeg}>Close</button>
		</div>
	)
}

SelectedKeg.propTypes = {
   selectedKeg: PropTypes.object,
   sellPint: PropTypes.func,
   refillKeg: PropTypes.func,
   closeSelectedKeg: PropTypes.func
}

export default SelectedKeg;