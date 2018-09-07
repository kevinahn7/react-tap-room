import React from "react";
import Keg from './Keg'
import PropTypes from 'prop-types';

function Kegs(props) {
	return (
		<div>
			<h1>Kegs</h1>
            {props.kegs.map((keg, index) => 
                <Keg
                    name = {keg.name}
                    brewer = {keg.brewer}
                    abv = {keg.abv}
                    description = {keg.description}
                    price = {keg.price}
                    remaining = {keg.remaining}
                    key = {index}
                    />
            )}
		</div>
	);
}

Kegs.propTypes = {
    kegs: PropTypes.array
};

export default Kegs;