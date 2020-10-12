using System;
using System.Data.Entity;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;

namespace SampleProject_1.Models
{
    public partial class Sample : DbContext
    {
        //sample này là 1 tập được ánh xạ ngang bằng với 1 Instance Database, bên trong có chứa các set con tương tự như table
        public Sample(): base("Sample")
        {
        }

        public virtual DbSet<SampleTable> SampleTables { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
        }
    }
}
