import axios from './_axios';

export default (newEngagement) => axios
  .patch(`api/speaking-engagements/${newEngagement.id}`, newEngagement)
  .then((response) => response.data);
