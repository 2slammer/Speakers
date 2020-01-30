import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';
import SpeakingEngagementsList from './components/SpeakingEngagementsList';
import Home from './components/materialComponents/onePirate/Home';
import AppAppBar from './components/materialComponents/onePirate/modules/views/AppAppBar';


const App = () => (
  <BrowserRouter >
    <Route exact path='/' component={Home} />
    <Route path='/speakingEngagementsList' component={SpeakingEngagementsList} />
    <AppAppBar />
  </BrowserRouter >
);

export default App;
