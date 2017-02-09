import React from 'react';

const description = 'This is the part where I succinctly convey my eligibility as a developer while maintaining a sharp balance between professionalism and relatability.'

const styles = {
  root: {
    height: '135px',
    width: '40%',
    minWidth: '400px',
    margin: 'auto',
    textAlign: 'center',
  },
};

const Bio = () => (
  <div style={styles.root}>
    <p> {description} </p>
    <a className='more-info' href={'https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=define+hero'}> more about me </a>
  </div>
);

export default Bio;
