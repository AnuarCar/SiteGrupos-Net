using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SiteGrupos.Models
{
    public class EAgency
    {
        public int agencyId { get; set; }
        public string documentType { get; set; }
        public string agencyName { get; set; }
        public string contactType { get; set; }
        public string contactName { get; set; }
        public string cityName { get; set; }
        public string phoneNumber { get; set; }
        public string emailAddress { get; set; }
        public Nullable<bool> terminos { get; set; }
        public string userName { get; set; }
        public string password { get; set; }
        public Nullable<bool> status { get; set; }
        public string dateCreate { get; set; }
        public Nullable<int> IdProfile { get; set; }
    }
}