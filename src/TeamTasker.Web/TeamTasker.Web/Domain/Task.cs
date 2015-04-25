using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace TeamTasker.Web.Domain
{
    public class Task
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        public DateTime DueDate { get; set; }

        public string Instructions { get; set; }

        public List<TeamMember> AssignedMembers { get; set; }
    }
}