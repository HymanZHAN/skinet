using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {

        [HttpGet]
        public string GetProducts()
        {
            return "this is a list of products";
        }

        [HttpGet("{id}")]
        public string GetProduct(int id)
        {
            return "a single product";
        }

    }
}