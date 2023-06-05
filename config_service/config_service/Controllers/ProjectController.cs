using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;
using System.Data;
using config_service.Models;

namespace config_service.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProjectController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public ProjectController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        // Get Project Details for particular partner
        [HttpGet]
        [Route("ProjectDetails")]
        public JsonResult ProjectDetails(int id)
        {
            string q = @"select id, p_name, status, progress, created_at from project where pro_id = @Id";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ConfigDBConnecion");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(q, myCon))
                {
                    myCommand.Parameters.AddWithValue("@Id", id);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(table);
        }

        // Add project
        [HttpPost]
        [Route("AddProject")]
        public JsonResult AddProject(Project p)
        {
            string q = @"insert into project (pro_id, p_name, status, progress) values (@pId, @pName, @status, @progress)";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ConfigDBConnecion");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(q, myCon))
                {
                    myCommand.Parameters.AddWithValue("@pId", p.pro_id);
                    myCommand.Parameters.AddWithValue("@pName", p.p_name);
                    myCommand.Parameters.AddWithValue("@status", p.status);
                    myCommand.Parameters.AddWithValue("@progress", p.progress);

                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }

                return new JsonResult(1);
            }
        }
    }
}