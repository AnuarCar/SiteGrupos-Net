﻿//------------------------------------------------------------------------------
// <auto-generated>
//     Este código se generó a partir de una plantilla.
//
//     Los cambios manuales en este archivo pueden causar un comportamiento inesperado de la aplicación.
//     Los cambios manuales en este archivo se sobrescribirán si se regenera el código.
// </auto-generated>
//------------------------------------------------------------------------------

namespace SiteGrupos.Data
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class ctx_grupos : DbContext
    {
        public ctx_grupos()
            : base("name=ctx_grupos")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<Cities> Cities { get; set; }
        public virtual DbSet<Token> Token { get; set; }
        public virtual DbSet<ClaseFamilia> ClaseFamilia { get; set; }
        public virtual DbSet<Agency> Agency { get; set; }
        public virtual DbSet<Profile> Profile { get; set; }
        public virtual DbSet<Rol> Rol { get; set; }
        public virtual DbSet<RolProfile> RolProfile { get; set; }
    }
}
