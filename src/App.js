import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from './Components/Landing';
import Register from './Components/Register';
import Login from './Components/Login';
import Profile from './Components/Profile';
import ForgetPass from './Components/ForgetPass';
import details1 from './Components/details1';
import AddToHomescreen from 'react-add-to-homescreen';
import 'tachyons';

class App extends React.Component {
  handleAddToHomescreenClick = () => {
  alert(`
    1. Open Share menu
    2. Tap on "Add to Home Screen" button`);
  };

  render() {    
    return (
      <div className="App">
        <AddToHomescreen onAddToHomescreenClick={this.handleAddToHomescreenClick} />
        <Router>
          <div>
            <Route exact path ="/" component={Landing} />
            <div>
              <Route exact path ="/signup" component={Register} />
              <Route exact path ="/login" component={Login} />
              <Route exact path ="/user" component={Profile} />
              <Route exact path ="/details1" component={details1} />
              <Route exact path ="/fp" component={ForgetPass} />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
//import 'typeface-roboto';