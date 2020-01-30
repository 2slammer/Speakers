using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.EntityFrameworkCore;
using Speakers.DataAccess;
using Speakers.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Speakers.Services
{
    internal class SpeakingEngagementService : ISpeakingEngagementService
    {
        readonly SpeakersDataContext _db;
        readonly IConfigurationProvider _automapperConfiguration;

        public SpeakingEngagementService(SpeakersDataContext db, IConfigurationProvider automapperConfiguration)
        {
            _db = db;
            _automapperConfiguration = automapperConfiguration;
        }

        public async Task<IEnumerable<SpeakingEngagement>> GetRecentEngagements() =>
            await _db.SpeakingEngagements
                .OrderByDescending(it => it.DateTimeStart)
                .ProjectTo<SpeakingEngagement>(_automapperConfiguration)
                .ToListAsync();
        
        public async Task<SpeakingEngagement> GetEngagementById(Guid id) =>
            await _db.SpeakingEngagements
                .Where(it => it.Id == id)
                .ProjectTo<SpeakingEngagement>(_automapperConfiguration)
                .SingleAsync();

        public async Task UpdateEngagement(SpeakingEngagement engagement)
        {
            var mapper = _automapperConfiguration.CreateMapper();
            var entity = await _db.SpeakingEngagements.SingleAsync(it => it.Id == engagement.Id);
            mapper.Map(engagement, entity);
            await _db.SaveChangesAsync();
        }
          
    }
}
