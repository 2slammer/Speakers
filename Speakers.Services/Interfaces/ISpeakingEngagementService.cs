using Speakers.Domain;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Speakers.Services
{
    public interface ISpeakingEngagementService
    {
        Task<IEnumerable<SpeakingEngagement>> GetRecentEngagements();
        Task<SpeakingEngagement> GetEngagementById(Guid id);
        Task UpdateEngagement(SpeakingEngagement engagement);
    }
}