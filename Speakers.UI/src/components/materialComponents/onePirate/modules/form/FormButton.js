import React from 'react';
import PropTypes from 'prop-types';
import defer from './defer';
import Button from '../components/Button';

const FormButton = ({ disabled, mounted, ...others }) => (
  <Button disabled={!mounted || disabled} type="submit" variant="contained" {...others} />
);

FormButton.propTypes = {
  disabled: PropTypes.bool,
  mounted: PropTypes.bool,
};

export default defer(FormButton);
