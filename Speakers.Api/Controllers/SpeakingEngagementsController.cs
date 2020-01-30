using Microsoft.AspNetCore.Mvc;
using Speakers.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Speakers.Api.Controllers
{
    [Route("api/speaking-engagements")]
    public class SpeakingEngagementsController : Controller
    {
        readonly ISpeakingEngagementService _speakingEngagementsService;
        public SpeakingEngagementsController(ISpeakingEngagementService ses)
        {
            _speakingEngagementsService = ses;
        }

        [Route(""), HttpGet]
        public async Task<ActionResult> GetRecentSpeakingEngagements() =>
            Ok(await _speakingEngagementsService.GetRecentEngagements());
        
        [Route("{id}"), HttpGet]
        public async Task<ActionResult> GetSpeakingEngagementById([FromRoute] Guid id) =>
            Ok(await _speakingEngagementsService.GetEngagementById(id));

        [Route("{id}"), HttpPatch]
        public async Task<ActionResult> EditEngagement([FromRoute] Guid id, [FromBody] Speakers.Domain.SpeakingEngagement engagement)
        {
            try
            {
                engagement.Id = id;
                await _speakingEngagementsService.UpdateEngagement(engagement);
                return Ok();
            }
            catch(Exception e)
            {
                return BadRequest(e);
            }
            
        }
    }
}
