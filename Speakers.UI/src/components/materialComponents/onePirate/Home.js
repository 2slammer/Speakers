import React from 'react';
import AppFooter from './modules/views/AppFooter';
import SpeakersInitiative from './modules/views/SpeakersInitiative';
import withRoot from './modules/withRoot';

function Index() {
  return (
    <>
      <SpeakersInitiative />
      <AppFooter />
    </>
  );
}

export default withRoot(Index);
