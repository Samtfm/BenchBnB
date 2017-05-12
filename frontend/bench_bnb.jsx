import React from 'react';
import ReactDOM from 'react-dom';
import * as APIUtilsS from './util/session_api_util'

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  window.APIUtilsS = APIUtilsS;
  ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);
});
