using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(MySignalR.Startup))]
namespace MySignalR
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            app.MapSignalR();
            ConfigureAuth(app);
        }
    }
}
