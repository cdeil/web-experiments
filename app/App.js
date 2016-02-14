import React, { Component } from 'react';
import gll from '../data/data.json!json';
// import './app.css!css';
import { Col } from 'react-bootstrap';
import Navbar from './components/Navbar';
import LeftPane from './components/LeftPane';
import Content from './components/Content';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      catalog: null,
      sourceName: 0,
    };
    this.sourceNameChange = this.sourceNameChange.bind(this);
    this.data = JSON.parse(gll);
    console.log(this.data);
    this.catalog = '2fhl';
  }
  sourceNameChange(e) {
    console.log('changed');
    this.setState({
      sourceName: e.target.value,
    });
  }
  render() {
    return (
      <div className="app">
        <Navbar/>
        <Col md={2} className="sidebar">
          <LeftPane catalog={this.catalog}
            data={this.data}
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
