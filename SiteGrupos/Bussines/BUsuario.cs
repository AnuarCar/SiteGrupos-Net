using SiteGrupos.Data;
using SiteGrupos.Exception;
using SiteGrupos.Models;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Web;

namespace SiteGrupos.Bussines
{
    public class BUsuario
    {
        public List<EAgency> ListadoUsuarios()
        {
            try
            {
                List<EAgency> Listado = new List<EAgency>();
                Listado = new DUsuario().ListaUsuarios();
                return Listado;
            }
            catch (GettingException ex)
            {
                StackTrace st = new StackTrace(ex, true);
                StackFrame frame = st.GetFrame(0);
                throw new GettingException(string.Format("{0}", "Error: " + ex.Message.ToString() + " Origen: " + ex.TargetSite.ReflectedType.FullName.ToString() + " Metodo: " + frame.GetMethod().Name.ToString() + " Linea: " + frame.GetFileLineNumber().ToString()));
            }
        }
        public bool ModificarStatusUsuario(string email, int action)
        {
            try
            {
                bool resouesta = new DUsuario().ModificarStatusUsuario(email, action);
                return resouesta;
            }
            catch (GettingException)
            {

                return false;
            }
        }
    }
}