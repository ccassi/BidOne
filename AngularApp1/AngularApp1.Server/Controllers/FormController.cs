using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace AngularApp1.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FormController : ControllerBase
    {
        [HttpPost]
        public IActionResult Post([FromBody] FormData formData)
        {
            if (formData != null)
            {
                // Save the data to a JSON file
                string jsonData = JsonConvert.SerializeObject(formData);
                System.IO.File.WriteAllText("data.json", jsonData);

                return Ok("Data saved successfully");
            }

            return BadRequest("Invalid data");
        }
    }

    public class FormData
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
}
