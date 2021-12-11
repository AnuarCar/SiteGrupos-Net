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
    public class ReservaController : Controller
    {
        string urlBase = "https://localhost:44300";
        public ActionResult ConfirmarReserva(string tarifa, string impuesto, string adt, string chd, string fsi, string fli, string nvi, string ci, string fsr, string flr, string nvr, string cr, string codAerolinea, string origen, string destino, string origenText, string destinotext, string cabina)
        {
            try
            {
                ManagerCookie cookie = new ManagerCookie();
                ClientCookie coookieSession = cookie.ObtenerCookie(HttpContext.Request.Cookies["userAuth"]);

                if (coookieSession != null)
                {
                    if (ValidarParametros(tarifa, impuesto, adt, chd))
                    {
                        int taridaPlena = int.Parse(tarifa) - int.Parse(impuesto);
                        ViewBag.adt = int.Parse(adt);
                        ViewBag.chd = int.Parse(chd);
                        ViewData["tarifaPlena"] = String.Format("{0:#,0}", taridaPlena);
                        ViewData["tarifaTotal"] = String.Format("{0:#,0}", int.Parse(tarifa));
                        ViewData["impuesto"] = String.Format("{0:#,0}", int.Parse(impuesto));
                        ViewData["tarifaPlenaNum"] = taridaPlena;
                        ViewData["impuestoNum"] = impuesto;
                        ViewData["tarifaTotalNum"] = tarifa;
                        ViewData["fsi"] = fsi;
                        ViewData["fli"] = fli;
                        ViewData["nvi"] = nvi;
                        ViewData["ci"] = ci;
                        ViewData["fsr"] = fsr;
                        ViewData["flr"] = flr;
                        ViewData["nvr"] = nvr;
                        ViewData["cr"] = cr;
                        ViewData["codAerolinea"] = codAerolinea;
                        ViewData["origen"] = origen;
                        ViewData["destino"] = destino;
                        ViewData["origentext"] = origenText;
                        ViewData["destinotext"] = destinotext;
                        ViewData["cabina"] = cabina;

                        switch (ci)
                        {
                            case "T":
                                ViewData["FamiliaIda"] = "Mini";
                                ViewData["AccesorioIda"] = "1 Articulo sin Costo";
                                ViewData["Equipaje_manoIda"] = "1 Pieza de 8Kg / 5Lb";
                                ViewData["Equipaje_BodegaIda"] = "No incluido cargo adicional desde 35.000";
                                ViewData["Abordaje_preferencialIda"] = "No";
                                break;
                            case "V":
                                ViewData["FamiliaIda"] = "Mini";
                                ViewData["AccesorioIda"] = "1 Articulo sin Costo";
                                ViewData["Equipaje_manoIda"] = "1 Pieza de 8Kg / 5Lb";
                                ViewData["Equipaje_BodegaIda"] = "No incluido cargo adicional desde 35.000";
                                ViewData["Abordaje_preferencialIda"] = "No";
                                break;
                            case "L":
                                ViewData["FamiliaIda"] = "Maxi";
                                ViewData["AccesorioIda"] = "1 Articulo sin Costo";
                                ViewData["Equipaje_manoIda"] = "1 Pieza de 8Kg / 5Lb";
                                ViewData["Equipaje_BodegaIda"] = "1 Pieza de 23Kg / 50Lb";
                                ViewData["Abordaje_preferencialIda"] = "No";
                                break;
                            case "K":
                                ViewData["FamiliaIda"] = "Maxi";
                                ViewData["AccesorioIda"] = "1 Articulo sin Costo";
                                ViewData["Equipaje_manoIda"] = "1 Pieza de 8Kg / 5Lb";
                                ViewData["Equipaje_BodegaIda"] = "1 Pieza de 23Kg / 50Lb";
                                ViewData["Abordaje_preferencialIda"] = "No";
                                break;
                            case "H":
                                ViewData["FamiliaIda"] = "Maxi";
                                ViewData["AccesorioIda"] = "1 Articulo sin Costo";
                                ViewData["Equipaje_manoIda"] = "1 Pieza de 8Kg / 5Lb";
                                ViewData["Equipaje_BodegaIda"] = "1 Pieza de 23Kg / 50Lb";
                                ViewData["Abordaje_preferencialIda"] = "No";
                                break;
                            case "S":
                                ViewData["FamiliaIda"] = "Super";
                                ViewData["AccesorioIda"] = "1 Articulo sin Costo";
                                ViewData["Equipaje_manoIda"] = "1 Pieza de 8Kg / 5Lb";
                                ViewData["Equipaje_BodegaIda"] = "1 Pieza de 23Kg / 50Lb";
                                ViewData["Abordaje_preferencialIda"] = "No";
                                break;
                            case "W":
                                ViewData["FamiliaIda"] = "Super";
                                ViewData["AccesorioIda"] = "1 Articulo sin Costo";
                                ViewData["Equipaje_manoIda"] = "1 Pieza de 8Kg / 5Lb";
                                ViewData["Equipaje_BodegaIda"] = "1 Pieza de 23Kg / 50Lb";
                                ViewData["Abordaje_preferencialIda"] = "No";
                                break;
                            case "Y":
                                ViewData["FamiliaIda"] = "Super";
                                ViewData["AccesorioIda"] = "1 Articulo sin Costo";
                                ViewData["Equipaje_manoIda"] = "1 Pieza de 8Kg / 5Lb";
                                ViewData["Equipaje_BodegaIda"] = "1 Pieza de 23Kg / 50Lb";
                                ViewData["Abordaje_preferencialIda"] = "No";
                                break;
                            case "J":
                                ViewData["FamiliaIda"] = "Mega";
                                ViewData["AccesorioIda"] = "1 Articulo sin Costo";
                                ViewData["Equipaje_manoIda"] = "1 Pieza de 8Kg / 5Lb";
                                ViewData["Equipaje_BodegaIda"] = "2 Pieza de 23Kg / 50Lb";
                                ViewData["Abordaje_preferencialIda"] = "Si";
                                break;
                            case "C":
                                ViewData["FamiliaIda"] = "Mega";
                                ViewData["AccesorioIda"] = "1 Articulo sin Costo";
                                ViewData["Equipaje_manoIda"] = "1 Pieza de 8Kg / 5Lb";
                                ViewData["Equipaje_BodegaIda"] = "2 Pieza de 23Kg / 50Lb";
                                ViewData["Abordaje_preferencialIda"] = "Si";
                                break;
                        }

                        switch (cr)
                        {
                            case "T":
                                ViewData["FamiliaRegreso"] = "Mini";
                                ViewData["AccesorioRegreso"] = "1 Articulo sin Costo";
                                ViewData["Equipaje_manoRegreso"] = "1 Pieza de 8Kg / 5Lb";
                                ViewData["Equipaje_BodegaRegreso"] = "No incluido cargo adicional desde 35.000";
                                ViewData["Abordaje_preferencialRegreso"] = "No";
                                break;
                            case "V":
                                ViewData["FamiliaRegreso"] = "Mini";
                                ViewData["AccesorioRegreso"] = "1 Articulo sin Costo";
                                ViewData["Equipaje_manoRegreso"] = "1 Pieza de 8Kg / 5Lb";
                                ViewData["Equipaje_BodegaRegreso"] = "No incluido cargo adicional desde 35.000";
                                ViewData["Abordaje_preferencialRegreso"] = "No";
                                break;
                            case "L":
                                ViewData["FamiliaRegreso"] = "Maxi";
                                ViewData["AccesorioRegreso"] = "1 Articulo sin Costo";
                                ViewData["Equipaje_manoRegreso"] = "1 Pieza de 8Kg / 5Lb";
                                ViewData["Equipaje_BodegaRegreso"] = "1 Pieza de 23Kg / 50Lb";
                                ViewData["Abordaje_preferencialRegreso"] = "No";
                                break;
                            case "K":
                                ViewData["FamiliaRegreso"] = "Maxi";
                                ViewData["AccesorioRegreso"] = "1 Articulo sin Costo";
                                ViewData["Equipaje_manoRegreso"] = "1 Pieza de 8Kg / 5Lb";
                                ViewData["Equipaje_BodegaRegreso"] = "1 Pieza de 23Kg / 50Lb";
                                ViewData["Abordaje_preferencialRegreso"] = "No";
                                break;
                            case "H":
                                ViewData["FamiliaRegreso"] = "Maxi";
                                ViewData["AccesorioRegreso"] = "1 Articulo sin Costo";
                                ViewData["Equipaje_manoRegreso"] = "1 Pieza de 8Kg / 5Lb";
                                ViewData["Equipaje_BodegaRegreso"] = "1 Pieza de 23Kg / 50Lb";
                                ViewData["Abordaje_preferencialRegreso"] = "No";
                                break;
                            case "S":
                                ViewData["FamiliaRegreso"] = "Super";
                                ViewData["AccesorioRegreso"] = "1 Articulo sin Costo";
                                ViewData["Equipaje_manoRegreso"] = "1 Pieza de 8Kg / 5Lb";
                                ViewData["Equipaje_BodegaRegreso"] = "1 Pieza de 23Kg / 50Lb";
                                ViewData["Abordaje_preferencialRegreso"] = "No";
                                break;
                            case "W":
                                ViewData["FamiliaRegreso"] = "Super";
                                ViewData["AccesorioRegreso"] = "1 Articulo sin Costo";
                                ViewData["Equipaje_manoRegreso"] = "1 Pieza de 8Kg / 5Lb";
                                ViewData["Equipaje_BodegaRegreso"] = "1 Pieza de 23Kg / 50Lb";
                                ViewData["Abordaje_preferencialRegreso"] = "No";
                                break;
                            case "Y":
                                ViewData["FamiliaRegreso"] = "Super";
                                ViewData["AccesorioRegreso"] = "1 Articulo sin Costo";
                                ViewData["Equipaje_manoRegreso"] = "1 Pieza de 8Kg / 5Lb";
                                ViewData["Equipaje_BodegaRegreso"] = "1 Pieza de 23Kg / 50Lb";
                                ViewData["Abordaje_preferencialRegreso"] = "No";
                                break;
                            case "J":
                                ViewData["FamiliaRegreso"] = "Mega";
                                ViewData["AccesorioRegreso"] = "1 Articulo sin Costo";
                                ViewData["Equipaje_manoRegreso"] = "1 Pieza de 8Kg / 5Lb";
                                ViewData["Equipaje_BodegaRegreso"] = "2 Pieza de 23Kg / 50Lb";
                                ViewData["Abordaje_preferencialRegreso"] = "Si";
                                break;
                            case "C":
                                ViewData["FamiliaRegreso"] = "Mega";
                                ViewData["AccesorioRegreso"] = "1 Articulo sin Costo";
                                ViewData["Equipaje_manoRegreso"] = "1 Pieza de 8Kg / 5Lb";
                                ViewData["Equipaje_BodegaRegreso"] = "2 Pieza de 23Kg / 50Lb";
                                ViewData["Abordaje_preferencialRegreso"] = "Si";
                                break;
                        }
                    }
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
        public ActionResult ReservaRealizada(string CodReserva, string tarifaPlena, string impuesto, string tarifaTotal, string numAdt, string numChd)
        {
            try
            {
                ManagerCookie cookie = new ManagerCookie();
                ClientCookie coookieSession = cookie.ObtenerCookie(HttpContext.Request.Cookies["userAuth"]);

                if (coookieSession != null)
                {
                    ViewData["CodReserva"] = CodReserva;
                    ViewData["tarifaPlena"] = tarifaPlena;
                    ViewData["impuesto"] = impuesto;
                    ViewData["tarifaPlenaNum"] = tarifaPlena;
                    ViewData["impuestoNum"] = impuesto;
                    ViewData["tarifaTotalNum"] = tarifaTotal;
                    ViewData["tarifaTotal"] = tarifaTotal;
                    ViewData["numAdt"] = numAdt;
                    ViewData["numChd"] = numChd;
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
        public bool ValidarParametros(string tarifa, string impuesto, string adt, string chd)
        {
            if (tarifa == null || impuesto == null || adt == null || chd == null)
            {
                return false;
            }
            return true;
        }
    }
}