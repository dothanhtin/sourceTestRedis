using SampleProject_1.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SampleProject_1.Controllers
{
    public class SampleCodeController : Controller
    {
        // GET: SampleCode
        public ActionResult Sample()
        {
            return View();
        }

        //Get all
        public ActionResult getAll()
        {
            try
            {
                Sample cs = new Sample(); 
                var res = cs.SampleTables.AsQueryable().ToList();
                return Json(res, JsonRequestBehavior.AllowGet);
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }

        //Add new record
        public ActionResult addRecord(string name,string descript)
        {
            try
            {
                Sample cs = new Sample();
                SampleTable st = new SampleTable();
                st.NAME = name;
                st.DESCRIPTION = descript;
                cs.SampleTables.Add(st);
                cs.SaveChanges();//tương tự commit
                return Json("1");
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }

        //Edit record
        public ActionResult editRecord(string id,string name, string descript)
        {
            try
            {
                Sample cs = new Sample();
                int _id = int.Parse(id);
                var st = cs.SampleTables.Find(_id);
                st.NAME = name;
                st.DESCRIPTION = descript;
                cs.SaveChanges();//tương tự commit
                return Json("1");
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        //Delete record
        public ActionResult deleteRecord(string id)
        {
            try
            {
                Sample cs = new Sample();
                int _id = int.Parse(id);
                var st = cs.SampleTables.Find(_id);
                cs.SampleTables.Remove(st);
                cs.SaveChanges();//tương tự commit
                return Json("1");
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}