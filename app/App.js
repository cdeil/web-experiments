import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

import Navbar from './components/Navbar';
import LeftPane from './components/LeftPane';
import Content from './components/Content';
import Footer from './components/Footer';
import ImageView from './components/ImageView';

import gll from '../data/data.json!json';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      route: window.location.hash.substr(1) || null,
      catalog: null,
      sourceName: null,
    };

    // Need to manually bind `this` in ES6 class methods
    this.sourceNameChange = this.sourceNameChange.bind(this);
    this.router = this.router.bind(this);
    this.setRoute = this.setRoute.bind(this);

    this.data = JSON.parse(gll);

    // If more catalogs, we can have a dynamic array
    this.catalog = '2fhl';
  }

  setRoute(route) {
    this.setState({
      route,
    });
  }

  /**
   * Changes sourceName state whenever called
   */
  sourceNameChange(e) {
    this.setState({
      sourceName: e,
    });
  }

  // This is the router which decides on how to
  // route the application logic depending on the URL.
  router() {
    console.log(this.state.route);

    switch (this.state.route) {
      case 'image':
        return <ImageView />;
      default:
        return (
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
        );
    }
  }

  render() {
    return (
      <div className="app">
          <Navbar setRoute={this.setRoute}/>
          {this.router()}
        <Footer/>
      </div>
    );
  }
}
