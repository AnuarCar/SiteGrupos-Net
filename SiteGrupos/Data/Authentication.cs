using SiteGrupos.Exception;
using SiteGrupos.Models;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Web;

namespace SiteGrupos.Data
{
    public class Authentication
    {
        public UserLogged Login(LoginRequest request)
        {
            try
            {
                UserLogged userLogged = new UserLogged();
                userLogged.Roles = new List<int>();
                using (ctx_grupos ctx = new ctx_grupos())
                {
                    var query = (from l in ctx.Agency
                                 where l.userName == request.userName && l.password == request.password
                                 && l.status == true
                                 select l).FirstOrDefault();
                    if (query != null)
                    {
                        userLogged.contactName = query.contactName;           
                        var roles = (from r in ctx.RolProfile where r.IdProfile == query.IdProfile select r).ToList();
                        foreach (var rol in roles)
                        {
                            userLogged.Roles.Add(rol.IdRol);
                        }
                    }
                }
                return userLogged;
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