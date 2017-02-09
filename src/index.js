import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Main from './Main';
import './index.css';

const App = () => (
  <MuiThemeProvider style={{
    backgroundImage: "url('images/background.jpg')",
    backgroundSize: 'cover'
  }} muiTheme={getMuiTheme()}>
    <Main />
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
