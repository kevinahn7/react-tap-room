import React from "react";
import Keg from './Keg'

function Kegs() {
    const masterKegList = [
        {
            name: 'Ruby Zozzle',
            brewer: 'Hi-Wheel',
            description: 'Sparkling Wine & Grapefruit',
            abv: '6.8%',
            price: '7',
            remaining: 20
        },
        {
            name: 'Tart N Juicy',
            brewer: 'Epic',
            description: 'Sour IPA',
            abv: '4.5%',
            price: '6',
            remaining: 60
        },
        {
            name: 'Hamm\'s',
            brewer: 'Miller/Coors',
            description: 'American Lager',
            abv: '4.7%',
            price: '3',
            remaining: 65
        },
        {
            name: 'Prismatic',
            brewer: 'Ninkasi',
            description: 'Juicy IPA',
            abv:  '5.9%',
            price: '6',
            remaining: 75
        },
        {
            name: 'Juicy Haze',
            brewer: 'New Belgium',
            description: 'India Pale Ale',
            abv:  '7.5%',
            price: '6',
            remaining: 18
        },
        {
            name: '8 Hop',
            brewer: 'New Belgium',
            description: 'Pale Ale',
            abv:  '5.5%',
            price: '6',
            remaining: 58
        }
    ]
	return (
		<div>
			<h1>Kegs</h1>
            {masterKegList.map((keg, index) => 
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

export default Kegs;