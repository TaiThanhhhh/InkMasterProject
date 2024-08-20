using Microsoft.AspNetCore.Mvc;

namespace InkMasterAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetProducts()
        {
            var products = new List<string> { "Product1", "Product2", "Product3" };
            return Ok(products);
        }
    }
}
