using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace HomeAutomationMockBackend.Controllers
{
    [Route("homes")]
    public class HomeController : Controller
    {
        // GET homes
        [HttpGet()]
        [DisableCors]
        public string Get()
        {
            HomeFactory houseFactory = new HomeFactory();
            return houseFactory.createHomeList();
        }

        // GET homes/{id}/data
        [HttpGet("{id}/data")]
        [DisableCors]
        public string Get(String id)
        {
            HomeFactory houseFactory = new HomeFactory();
            return houseFactory.createHome(id);
        }
    }
}
