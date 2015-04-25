using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TeamTasker.Web.Domain;

namespace TeamTasker.Web.Controllers
{
    public class TasksController : Controller
    {
        private TaskerContext db = new TaskerContext();

        [HttpPost]
        public JsonResult Create(string name, DateTime dueDate, string instructions)
        {
            var task = new Task
            {
                Name = name,
                DueDate = dueDate.Date,
                Instructions = instructions
            };

            db.Tasks.Add(task);
            db.SaveChanges();

            return Json("success");
        }
    }
}