using SiteGrupos.Bussines;
using SiteGrupos.Exception;
using SiteGrupos.Models;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SiteGrupos.Controllers
{
    public class UsuariosController : Controller
    {
        // GET: Usuarios
        public ActionResult Usuarios()
        {
            try
            {
                ManagerCookie cookie = new ManagerCookie();
                ClientCookie coookieSession = cookie.ObtenerCookie(HttpContext.Request.Cookies["userAuth"]);

                if (coookieSession != null)
                {
                    ViewData["userName"] = string.IsNullOrEmpty(coookieSession.userName) ? string.Empty : coookieSession.userName.ToString();
                }
            }
            catch (GettingException ex)
            {
                StackTrace st = new StackTrace(ex, true);
                StackFrame frame = st.GetFrame(0);
                throw new GettingException(string.Format("{0}", "Error: " + ex.Message.ToString() + " Origen: " + ex.TargetSite.ReflectedType.FullName.ToString() + " Metodo: " + frame.GetMethod().Name.ToString() + " Linea: " + frame.GetFileLineNumber().ToString()));
            }
            return View();
        }
        public JsonResult ListadoUsuarios()
        {
            return Json(new BUsuario().ListadoUsuarios(), JsonRequestBehavior.AllowGet);
        }

        public bool ModificarStatusUsuario(string email, int action)
        {
            return new BUsuario().ModificarStatusUsuario(email, action);
        }
    }
}