import React, { useState, useEffect } from 'react';
import { getSpeakingEngagements, updateEngagement } from '../../api/speakingEngagements';
import SpeakingEngagement from './SpeakingEngagement';
import Album from '../materialComponents/album';


export const loadEngagements = (engagements, setEngagements) => () => {
  (async () => {
    setEngagements({
      ...engagements,
      loading: true,
    });

    try {
      // eslint-disable-next-line no-console
      const engagementsIn = await getSpeakingEngagements().catch((error) => console.log(error));

      setEngagements({
        ...engagementsIn,
        loading: false,
      });
    } catch (e) {
      setEngagements({
        ...engagements,
        loading: false,
        error: e,
      });
    }
  })();
};


const useEngagements = () => {
  const [engagements, setEngagements] = useState({});

  useEffect(loadEngagements(engagements, setEngagements), []);

  return [engagements, setEngagements];
};

const SpeakingEngagements = () => {
  const [engagements] = useEngagements();
  const engagementArray = Object.values(engagements);
  const editEngagement = (engagementToUpdate) => {
    updateEngagement(engagementToUpdate);
  };
  const engagementList = engagementArray[0] && engagementArray
    .map((engagement) => engagement.id && <SpeakingEngagement
      key={engagement.id}
      speakerName={engagement.speakerName}
      hostGroupName={engagement.hostGroupName}
      city={engagement.city}
      startDate={engagement.dateTimeStart}
      endDate={engagement.dateTimeEnd}
      state={engagement.state}
      talkName={engagement.talkName}
      attendance={engagement.attendance}
      id={engagement.id}
    />);

  return (
    <div>
      {
        engagementList && <Album engagements={engagementList} handleEdit={editEngagement} />
      }
    </div>
  );
};


export default SpeakingEngagements;
