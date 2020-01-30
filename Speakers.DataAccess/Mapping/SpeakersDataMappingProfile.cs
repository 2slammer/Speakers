using AutoMapper;
using Speakers.Domain;
using System;
using System.Collections.Generic;
using System.Text;

namespace Speakers.DataAccess.Mapping
{
    public class SpeakersDataMappingProfile : Profile
    {
        public SpeakersDataMappingProfile()
        {
            CreateMap<SpeakingEngagementEntity, SpeakingEngagement>();
            CreateMap<SpeakingEngagement, SpeakingEngagementEntity>();
        }
    }
}
