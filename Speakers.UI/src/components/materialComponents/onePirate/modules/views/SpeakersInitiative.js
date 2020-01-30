import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '../components/Button';
import Typography from '../components/Typography';
import SpeakersInitiativeLayout from './SpeakersInitiativeLayout';

const backgroundImage = 'https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9?auto=format&fit=crop&w=1400&q=80';

const styles = (theme) => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'center',
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
});

const SpeakersInitiative = ({ classes }) => (
  <SpeakersInitiativeLayout backgroundClassName={classes.background}>
    {/* Increase the network loading priority of the background image. */}
    <img style={{ display: 'none' }} src={backgroundImage} alt="increase priority" />
    <Typography color="inherit" align="center" variant="h2">
      Speakers Initiative
      </Typography>
    <Button
      color="secondary"
      size="large"
      className={classes.button}
      href="/"
    >
      Sign-up to Speak
      </Button>
  </SpeakersInitiativeLayout>
);

SpeakersInitiative.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SpeakersInitiative);
