import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

import Navbar from './components/Navbar';
import LeftPane from './components/LeftPane';
import Content from './components/Content';
import Footer from './components/Footer';

import gll from '../data/data.json!json';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      catalog: null,
      sourceName: null,
    };
    // Need to manually bind `this` in ES6 class methods
    this.sourceNameChange = this.sourceNameChange.bind(this);

    this.data = JSON.parse(gll);

    // If more catalogs, we can have a dynamic array
    this.catalog = '2fhl';
  }
  /**
   * Changes sourceName state whenever called
   */
  sourceNameChange(e) {
    this.setState({
      sourceName: e,
    });
  }
  render() {
    return (
      <div className="app">
        <Navbar/>
        <div style={{ marginTop: '80px' }}>
          <Col md={2} className="sidebar">
            <LeftPane catalog={this.catalog}
              data={this.data}
              sourceName={this.state.sourceName}
              sourceNameChange={this.sourceNameChange}
            />
          </Col>
          <Col md={8} mdOffset={3}>
            <Content sourceName={this.state.sourceName} data={this.data}/>
          </Col>
        </div>
        <Footer/>
      </div>
    );
  }
}
