import React from 'react';
import Portrait from './Portrait';
import Name from './Name';
import Bio from './Bio';
import Projects from './Projects';
import Links from './Links';
import Paper from 'material-ui/Paper';

const styles = {
  root: {
    top: '50px',
    position: 'relative',
    height: '660px',
    minHeight: '660px',
    maxWidth: '600px',
    minWidth: '420px',
    margin: 'auto',
    paddingTop: '30px',
  },
};

const Main = () => (
  <Paper style={styles.root} zDepth={5}>
    <Portrait />
    <Name />
    <Bio />
    <Projects />
    <Links />
  </Paper>
);

export default Main;
