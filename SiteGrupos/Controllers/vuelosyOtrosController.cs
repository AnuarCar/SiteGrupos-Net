using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using SiteGrupos.Bussines;
using SiteGrupos.Data;
using SiteGrupos.Exception;
using SiteGrupos.Models;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Xml;
using System.Xml.Schema;
using System.Xml.Serialization;

namespace SiteGrupos.Controllers
{


    public class vuelosyOtrosController : Controller
    {

        string urlBase = "https://localhost:44300";
        // string urlBase = "https://www.grupos.co/";

        public ActionResult vuelosyOtros()
        {
            try
            {
                ManagerCookie cookie = new ManagerCookie();
                ClientCookie coookieSession = cookie.ObtenerCookie(HttpContext.Request.Cookies["userAuth"]);

                if (coookieSession != null)
                {
                    ViewData["userName"] = string.IsNullOrEmpty(coookieSession.userName) ? string.Empty : coookieSession.userName.ToString();
                    ViewData["roles"] = coookieSession.roles;
                    return View();
                }
                return Content("<script language='javascript' type='text/javascript'>alert('Acceso no autorizado.');window.location.href = '" + urlBase + "';</script>");
            }
            catch (GettingException ex)
            {
                StackTrace st = new StackTrace(ex, true);
                StackFrame frame = st.GetFrame(0);
                throw new GettingException(string.Format("{0}", "Error: " + ex.Message.ToString() + " Origen: " + ex.TargetSite.ReflectedType.FullName.ToString() + " Metodo: " + frame.GetMethod().Name.ToString() + " Linea: " + frame.GetFileLineNumber().ToString()));
            }
        }
        public ActionResult cerrar()
        {
            if (Request.Cookies["userAuth"] != null)
            {
                var c = new HttpCookie("userAuth");
                c.Expires = DateTime.Now.AddDays(-1);
                Response.Cookies.Add(c);
            }
            return RedirectToAction("Index", "Grupos");
        }
        public dynamic error()
        {
            return Content("<script language='javascript' type='text/javascript'>alert('Acceso no autorizado.');</script>");
        }
        public JsonResult ListadoCiudades()
        {
            return Json(new BCities().ListadoCiudades(), JsonRequestBehavior.AllowGet);
        }

        public ActionResult AgregarPrecios(dynamic respuesta)
        {
            JObject resultado = JObject.Parse(respuesta);
            return Json("oK");
        }
        //Método para obtner la familia tarifaria de una clase 
        public ClaseFamilia FamiliaTarifaria(string clase)
        {
            try
            {
                ClaseFamilia Familia = new ClaseFamilia();
                return Familia = new BClasesFamilias().FamiliaTarifaria(clase);
            }
            catch (GettingException ex)
            {
                StackTrace st = new StackTrace(ex, true);
                StackFrame frame = st.GetFrame(0);
                throw new GettingException(string.Format("{0}", "Error: " + ex.Message.ToString() + " Origen: " + ex.TargetSite.ReflectedType.FullName.ToString() + " Metodo: " + frame.GetMethod().Name.ToString() + " Linea: " + frame.GetFileLineNumber().ToString()));
            }
        }
    }
}