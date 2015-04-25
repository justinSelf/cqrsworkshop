using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace TeamTasker.Web.Domain
{
    public class TaskerContext : DbContext
    {
        public DbSet<Task> Tasks { get; set; }
        public DbSet<TeamMember> TeamMembers { get; set; }
    }
}