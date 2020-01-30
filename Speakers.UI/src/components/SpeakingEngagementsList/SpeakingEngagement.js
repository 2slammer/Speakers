import React from 'react';
import PropTypes from 'prop-types';


const SpeakingEngagement = ({
  speakerName, talkName, hostGroupName, startDate, endDate, city, state, attendance, id,
}) => (
    <li>{startDate}. {speakerName} | {talkName} | {hostGroupName}
      | {endDate} | {city} | {state} | {attendance} | {id}</li>);

SpeakingEngagement.propTypes = {
  speakerName: PropTypes.string.isRequired,
  attendance: PropTypes.number,
  talkName: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  hostGroupName: PropTypes.string,
  city: PropTypes.string,
  state: PropTypes.string,
  id: PropTypes.string,
};

export default SpeakingEngagement;
