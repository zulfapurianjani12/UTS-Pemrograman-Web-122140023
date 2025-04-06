import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CafeList from './components/CafeList';
import CafeDetail from './components/CafeDetail';

function App() {
  return React.createElement(
    'div',
    { className: 'app-container' },
    React.createElement(Routes, null, [
      React.createElement(Route, {
        key: 'home',
        path: '/',
        element: React.createElement(CafeList)
      }),
      React.createElement(Route, {
        key: 'detail',
        path: '/cafe/:id',
        element: React.createElement(CafeDetail)
      })
    ])
  );
}

export default App;

