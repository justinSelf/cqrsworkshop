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
        private TaskerContext db = new TaskerContext();

        [HttpPost]
        public JsonResult Add(string name)
        {
            var teamMember = new TeamMember { Name = name };

            db.TeamMembers.Add(teamMember);
            db.SaveChanges();

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