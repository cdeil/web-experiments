import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

import Navbar from './components/Navbar';
import LeftPane from './components/LeftPane';
import Content from './components/Content';
import Footer from './components/Footer';
import ImageView from './components/ImageView';

import gll from '../data/data.json!json';

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  url = url.toLowerCase(); // This is just to avoid case sensitiveness
  name = name.replace(/[\[\]]/g, "\\$&").toLowerCase();// This is just to avoid case sensitiveness for query parameter name
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function updateQueryStringParameter(uri, key, value) {
  var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
  var separator = uri.indexOf('?') !== -1 ? "&" : "?";
  if (uri.match(re)) {
    return uri.replace(re, '$1' + key + "=" + value + '$2');
  }
  else {
    return uri + separator + key + "=" + value;
  }
}

export default class App extends Component {

  constructor() {
    super();
    const cat = getParameterByName('cat');
    const source = getParameterByName('source');

    this.state = {
      route: window.location.hash.substr(1) || null,
      catalog: cat,
      sourceName: source ? { value: source } : null,
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
    const cat = e.label.slice(0, e.label.indexOf(' '));
    console.log(cat);
    const source = e.value;
    let newURI = updateQueryStringParameter(window.location.href, 'cat', cat);
    newURI = updateQueryStringParameter(newURI, 'source', source);
    window.history.pushState({ path: newURI }, '', newURI);
    this.setState({
      sourceName: e,
    });
  }

  // This is the router which decides on how to
  // route the application logic depending on the URL.
  router() {

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
