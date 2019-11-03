import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store';
import Modal from 'react-modal';

document.addEventListener('DOMContentLoaded', () => {

  const root = document.getElementById('root');
  Modal.setAppElement(document.body);

  const store = configureStore();
  ReactDOM.render(<Root store={store}/>, root);
});
