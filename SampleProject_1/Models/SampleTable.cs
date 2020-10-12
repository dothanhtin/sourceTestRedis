namespace SampleProject_1.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("SampleTable")]
    public partial class SampleTable
    {
        [Key]
        public int ID { get; set; }
        public string NAME { get; set; }
        public string DESCRIPTION { get; set; }
    }
}
