import React from 'react';
import { render } from 'react-dom';
import App from './App';

// Create a node to attach the virtual react dom
// tree to the body
const node = document.createElement('div');
node.setAttribute('id', 'node');
document.body.appendChild(node);

// Render the App
render(<App/>, node);
