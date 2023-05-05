using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using System.Data.SqlClient;
using config_service.Models;

namespace config_service.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public LoginController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        // Testing API - To check DB con and API are working 
        [HttpGet]
        public JsonResult Get()
        {
            string q = @"select id, username, password, pro_id from login";
            DataTable table= new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ConfigDBConnecion");
            SqlDataReader myReader;
            using(SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using(SqlCommand myCommand = new SqlCommand(q, myCon)) 
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(table);
        }

        // Login API (2023/01/23)
        [HttpPost]
        [Route("Login")]
        public JsonResult Login (Login ln)
        {
            string q = @"select pro_id, desig_id from login where username = @username and password = @password";
            DataTable table= new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ConfigDBConnecion");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using(SqlCommand myCommand = new SqlCommand(q, myCon))
                {
                    myCommand.Parameters.AddWithValue("@username", ln.username);
                    myCommand.Parameters.AddWithValue("@password", ln.password);

                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            if (table.Rows.Count == 0)
            {
                return new JsonResult(-1);
            }
            else
            {
                /*DataRow row = table.Rows[0];
                string pro_id = row["pro_id"].ToString();
                string desig_id = row["desig_id"].ToString();
                */
                return new JsonResult(table);
            }
            
        }

        // Add Login Details API (2023/02/28)
        [HttpPost]
        [Route("AddLogin")]
        public JsonResult AddLogin(Login ln)
        {
            string q = @"insert into login (username, password, pro_id, desig_id) values (@username, @password, @pid, @did)";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ConfigDBConnecion");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(q, myCon))
                {
                    myCommand.Parameters.AddWithValue("@username", ln.username);
                    myCommand.Parameters.AddWithValue("@password", ln.password);
                    myCommand.Parameters.AddWithValue("@pid", ln.pro_id);
                    myCommand.Parameters.AddWithValue("@did", ln.desig_id);

                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(1);

        }
    }
}
