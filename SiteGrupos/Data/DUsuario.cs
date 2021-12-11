using SiteGrupos.Exception;
using SiteGrupos.Models;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Globalization;
using System.Linq;
using System.Web;

namespace SiteGrupos.Data
{
    public class DUsuario
    {
        private readonly CultureInfo colombiaCultureInfo = new CultureInfo("es-CO");
        public List<EAgency> ListaUsuarios()
        {
            try
            {
                List<EAgency> Listado = new List<EAgency>();
                using (ctx_grupos ctx = new ctx_grupos())
                {
                    var query = (from c in ctx.Agency select c).ToList();
                    foreach (var item in query)
                    {
                        string scheduledDateFormat = string.Format("{1} de {0} de {2}", item.dateCreate.GetValueOrDefault().ToString("MMMM", this.colombiaCultureInfo), (item.dateCreate.GetValueOrDefault().Day == 1 ? "1" : item.dateCreate.GetValueOrDefault().Day.ToString()), item.dateCreate.GetValueOrDefault().Year);
                        EAgency nuevaAgencia = new EAgency
                        {
                            agencyId = item.agencyId,
                            agencyName = item.agencyName,
                            cityName=item.cityName,
                            contactName = item.contactName,
                            contactType = item.contactType,
                            documentType = item.documentType,
                            emailAddress = item.emailAddress,
                            dateCreate = scheduledDateFormat,
                            IdProfile = item.IdProfile,
                            phoneNumber = item.phoneNumber,
                            status = item.status,
                            userName = item.userName,
                            terminos = item.terminos
                        };
                        Listado.Add(nuevaAgencia);
                    }
                }
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
                bool respuesta = false;
                using (ctx_grupos ctx = new ctx_grupos())
                {
                    var query = (from u in ctx.Agency where u.emailAddress == email select u).FirstOrDefault();
                    if (query != null)
                    {
                        query.status = action == 1 ? true : false;
                        ctx.SaveChanges();
                        respuesta = true;
                    }
                }
                return respuesta;
            }
            catch (GettingException)
            {
                return false;
            }
        }
    }
}