import React from 'react';
import Link from '@material-ui/core/Link';

const Copyright = () => (
  <React.Fragment>
    {'© '}
    <Link color="inherit" href="https://improving.com/">
      Improving
      </Link>{' '}
    {new Date().getFullYear()}
  </React.Fragment>
);

export default Copyright;
