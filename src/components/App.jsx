import React from "react";
import Kegs from './Kegs';
import Error404 from './Error404';
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
  }

  handleAddingNewKegToList(newKeg) {
    let newMasterKegList = this.state.masterKegList.slice();
    newMasterKegList.push(newKeg);
    this.setState({masterKegList: newMasterKegList});
  }

  render() {
    return (
      <div>
        <h1>React Tap Room</h1>
        <Link to="/">Home</Link> | <Link to="/newkeg">Create Keg</Link>
        <Switch>
        <Route exact path='/' render={()=><Kegs kegs={this.state.masterKegList} />}  />
        <Route path='/newkeg' render={()=><NewKeg onNewKegCreation={this.handleAddingNewKegToList} />} />
        <Route component={Error404} />
        </Switch>
      </div>
    );
  }
  
}

export default App;