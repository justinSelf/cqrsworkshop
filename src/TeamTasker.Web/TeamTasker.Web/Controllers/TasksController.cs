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
                DueDate = dueDate,
                Instructions = instructions
            };

            db.Tasks.Add(task);
            db.SaveChanges();

            return Json(task.Id);
        }

        [HttpPost]
        public JsonResult Assign(int taskId, int memberId)
        {
            var task = db.Tasks.Where(t => t.Id == taskId).Single();

            var member = db.TeamMembers.Where(m => m.Id == memberId).Single();

            task.AssignedMembers.Add(member);

            db.SaveChanges();

            return Json("success");
        }

        [HttpGet]
        public JsonResult AllTasks()
        {
            var tasks = (from t in db.Tasks select new { Id = t.Id, Name = t.Name }).OrderBy(t => t.Name).ToList();

            return Json(tasks, JsonRequestBehavior.AllowGet);
        }
    }
}