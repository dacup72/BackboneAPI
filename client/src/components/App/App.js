import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions';

// Components
import Landing from '../Landing';
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

export default connect(null, actions)(App);
