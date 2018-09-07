import React from "react";
import Keg from './Keg'
import PropTypes from 'prop-types';

function Kegs(props) {
    let kegsStyle = {
        backgroundColor: "rgba(255, 255 ,255, 0.8)"
    }
    let kegsDivStyle = {
        overflow: "auto",
        height: "70%",
        width: "80%",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        padding: "20px"
    }
	return (
		<div style={kegsStyle}>
			<h1>Kegs</h1>
            <div style={kegsDivStyle}>
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
            
		</div>
	);
}

Kegs.propTypes = {
    kegs: PropTypes.array
};

export default Kegs;