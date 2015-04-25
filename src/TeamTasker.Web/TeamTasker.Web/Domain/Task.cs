using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
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

        [Column(TypeName = "datetime2")]
        public DateTime? DueDate { get; set; }

        public int Status { get; set; }

        public bool IsPublished { get; set; }

        public DateTime? CompletionDate { get; set; }
        
        public string Instructions { get; set; }
        
        public virtual ICollection<TeamMember> AssignedMembers { get; set; }
    }
}