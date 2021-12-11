using SiteGrupos.Controllers;
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
    public class BLogin
    {
        public DataResult ValidarAcceso(LoginRequest login)
        {

            DataResult respuesta = new DataResult(); 
            try
            {
                //Validamos que el usuario exista en la aplicación
                var usuario = new Authentication().Login(login);

                if (usuario != null)
                {
                    var tokenJwt = new TokenGeneratorController().GenerateTokenJwt(usuario);

                    DataResult datos = new DataResult
                    {
                        token = tokenJwt,
                        userName = usuario.contactName,
                        roles = usuario.Roles
                    };

                    respuesta = datos;
                }
            }

            catch (GettingException ex)
            {
                StackTrace st = new StackTrace(ex, true);
                StackFrame frame = st.GetFrame(0);
                throw new GettingException(string.Format("{0}", "Error: " + ex.Message.ToString() + " Origen: " + ex.TargetSite.ReflectedType.FullName.ToString() + " Metodo: " + frame.GetMethod().Name.ToString() + " Linea: " + frame.GetFileLineNumber().ToString()));
            }

            return respuesta;
        }

        public long AgregarRegistro(Registro registro)
        {
            try
            {
                long result = -1;
                var exist = new Register().ValdidarEmail(registro.emailAddress);
                if (!exist)
                {
                    result = new Register().AgregarRegistro(registro); 
                }
                return result;
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
