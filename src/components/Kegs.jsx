import React from "react";
import Keg from './Keg'
import PropTypes from 'prop-types';
import SelectedKeg from "./SelectedKeg";

class Kegs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedKeg: null
        }
        this.handleSelectedKeg = this.handleSelectedKeg.bind(this);
        this.sellPintKeg = this.sellPintKeg.bind(this);
        this.handleCloseSelectedKeg = this.handleCloseSelectedKeg.bind(this);
        this.refillKeg = this.refillKeg.bind(this);
        this.deleteKeg = this.deleteKeg.bind(this);
    }

    handleSelectedKeg(newSelectedKeg) {
        this.setState({selectedKeg: newSelectedKeg});
    }

    handleCloseSelectedKeg() {
        this.setState({selectedKeg: null});
    }

    refillKeg(kegIndex) {
        this.props.refillKeg(kegIndex);
        let newSelectedKeg = this.state.selectedKeg;
        newSelectedKeg.remaining = 248;
        this.setState({selectedKeg: newSelectedKeg})
    }

    sellPintKeg(kegIndex) {
        this.props.sellPint(kegIndex);
        let newSelectedKeg = this.state.selectedKeg;
        newSelectedKeg.remaining--;
        this.setState({selectedKeg: newSelectedKeg})
    }

    deleteKeg(kegIndex) {
        this.props.deleteKeg(kegIndex);
        this.setState({selectedKeg: null});
    }


    render() {
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
            padding: "20px",
            gridGap: "5px"
        }

        let ifSelectedKeg;
        if (this.state.selectedKeg != null) {
            ifSelectedKeg = <SelectedKeg selectedKeg={this.state.selectedKeg} sellPint={this.sellPintKeg} closeSelectedKeg={this.handleCloseSelectedKeg} refillKeg={this.refillKeg} deleteKeg={this.deleteKeg} />
        }

        return (
            <div style={kegsStyle}>
                <h1>Kegs</h1>
                <div style={kegsDivStyle}>
                    {this.props.kegs.map((keg, index) => 
                        <Keg
                            name = {keg.name}
                            brewer = {keg.brewer}
                            abv = {keg.abv}
                            description = {keg.description}
                            price = {keg.price}
                            remaining = {keg.remaining}
                            key = {index}
                            index = {index}
                            onKegSelection = {this.handleSelectedKeg}
                            />
                    )}
                </div>
                {ifSelectedKeg}
            </div>
        );
    }
}

Kegs.propTypes = {
    kegs: PropTypes.array,
    sellPint: PropTypes.func,
    refillPint: PropTypes.func,
    deleteKeg: PropTypes.func
};


export default Kegs;