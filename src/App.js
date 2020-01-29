import React, { Component } from 'react';

import './App.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

import 'bootstrap/dist/css/bootstrap.min.css';
import CustomLayout from './containers/Layout'
import StarShipList from './components/StarShipList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CustomLayout>
          <StarShipList />
        </CustomLayout>
      </div>
    );
  }
}

export default App;
