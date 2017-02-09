import React from 'react';
import Paper from 'material-ui/Paper';

const styles = {
  root: {
    height: '130px',
    width: '130px',
    backgroundSize: 'cover',
    borderRadius: '50%',
    display: 'block',
    margin: 'auto',
    backgroundImage: "url('images/silhouette.jpeg')",
  },
};

const Portrait = () => (
  <Paper style={styles.root} zDepth={5}>
  </Paper>
);

export default Portrait;
