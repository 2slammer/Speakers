import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


document.addEventListener('DOMContentLoaded', () => {
  const mount = document.getElementById('mount-point');

  if (!mount) {
    throw new Error('Mount point not found.');
  }

  ReactDOM.render(<App />,
    mount);
});
