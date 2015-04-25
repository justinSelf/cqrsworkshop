using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;

namespace TeamTasker.Web.Controllers
{
    [AllowAnonymous]
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Team()
        {
            return View();
        }

        public ActionResult Task()
        {
            return View();
        }
    }
}
