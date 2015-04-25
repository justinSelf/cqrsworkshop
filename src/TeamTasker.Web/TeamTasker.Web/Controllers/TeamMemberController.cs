using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TeamTasker.Web.Domain;

namespace TeamTasker.Web.Controllers
{
    public class TeamMemberController : Controller
    {

        [HttpPost]
        public JsonResult Add(string name)
        {
            return Json("success");
        }

        [HttpGet]
        public JsonResult AllTeamMembers()
        {
            var teamMembers = new List<TeamMember>()
            {
                new TeamMember {Name = "Bandhu"},
                new TeamMember {Name = "Vitaliy"},
                new TeamMember {Name = "Justin"},
            };

            return Json(teamMembers, JsonRequestBehavior.AllowGet);
        }

    }
}