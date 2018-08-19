import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';


// Components
import Landing from '../Landing';
//import NewProduct from '../Product';
import Header from '../Header';

class App extends Component {

  render() {
    return (
        <BrowserRouter>
          <div className="container" style={{width: '85%'}}>
            <Header />
            <Route exact path='/' component={Landing}/>
          </div>
        </BrowserRouter>
    )
  }
}

export default App;
