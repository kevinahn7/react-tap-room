import React from "react";
import Kegs from './Kegs';
import Error404 from './Error404';
import Home from './Home';
import { Switch, Route, Link } from 'react-router-dom';
import NewKeg from './NewKeg';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterKegList: [
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
    };
    this.handleAddingNewKegToList = this.handleAddingNewKegToList.bind(this);
    this.sellPint = this.sellPint.bind(this);
  }

  handleAddingNewKegToList(newKeg) {
    let newMasterKegList = this.state.masterKegList.slice();
    newMasterKegList.push(newKeg);
    this.setState({masterKegList: newMasterKegList});
  }
  
  sellPint(kegIndex) {
    let newMasterKegList = this.state.masterKegList.slice();
    newMasterKegList[kegIndex].remaining--;
    this.setState({masterKegList: newMasterKegList});
  }



  render() {
    let appStyling = {
      textAlign: "center",
      backgroundImage: "url('https://americantaphouse.com/wp-content/uploads/2016/03/taps-with-hand-background.jpg')",
      backgroundSize: "cover",
      backgroundAttachment: "fixed"
    }

    let headingStyle = {
      backgroundColor: "rgba(255, 255, 255, 0.7)",
      position: "absolute",
      width: "80%",
      margin: "20px auto",
      left: "0",
      right: "0",
      padding: "20px 0"
    }

    let bodyStyles = {
      minHeight: "100%",
      paddingTop: "160px",
      boxSizing: "border-box",
      width: "80%",
      margin: "0 auto"
    }

    let linkStyles = {
      fontSize: "20px"
    }

    return (
      <div style={appStyling}>
        <div style={headingStyle}>
          <h1>React Tap Room</h1>
          <span style={linkStyles}><Link to="/">Home</Link></span> | <span style={linkStyles}><Link to="/kegs">All Kegs</Link></span> | <span style={linkStyles}><Link to="/newkeg">Create Keg</Link></span>
        </div>
        <div style={bodyStyles}>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/kegs' render={()=><Kegs kegs={this.state.masterKegList} sellPint={this.sellPint}/>}  />
            <Route path='/newkeg' render={()=><NewKeg onNewKegCreation={this.handleAddingNewKegToList} />} />
            <Route component={Error404} />
          </Switch>
        </div>
      </div>
    );
  }
  
}

export default App;