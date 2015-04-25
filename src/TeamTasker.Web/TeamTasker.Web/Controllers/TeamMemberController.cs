using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace TeamTasker.Web.Controllers
{
    public class TeamMemberController : Controller
    {

        [HttpPost]
        public JsonResult Add(string name)
        {
            return Json("success");
        }

    }
}