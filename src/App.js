import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { Router } from './router/Router';
import './style.css';

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to="/">Home</Link>
        <br />
        <Link to="/page1">Page1</Link>
        <br />
        <Link to="/page2">Page2</Link>
        <br />
      </div>
      <Router />
    </BrowserRouter>
  );
}
