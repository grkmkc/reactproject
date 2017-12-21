import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes';
import { AppContainer } from 'react-hot-loader';
import 'theme/globalStyle';
import App from './containers/App/App';


ReactDOM.render(
  routes,
  document.getElementById('root')
);



