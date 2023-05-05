using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using System.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using config_service.Models;

namespace config_service.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClientDetailController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public ClientDetailController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        // Get Client Details for particular partner (2023/01/28)
        [HttpGet]
        [Route("ClientDetails")]
        public JsonResult ClientDetails(int partnerId)
        {
            string q = @"select client_id, first_name, last_name, mobile_no, email, designation from client_detail where partner_id = @pId";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ConfigDBConnecion");
            SqlDataReader myReader;
            using(SqlConnection myCon = new SqlConnection(sqlDataSource)) 
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(q, myCon))
                {
                    myCommand.Parameters.AddWithValue("@pId", partnerId);

                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(table);
        }

        // Get check the same email user (2023/03/26)
        [HttpGet]
        [Route("CheckEmail")]
        public JsonResult CheckEmail(string email)
        {
            string q = @"select first_name from client_detail where email  = @ema";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ConfigDBConnecion");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(q, myCon))
                {
                    myCommand.Parameters.AddWithValue("@ema", email);

                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();

                }
            }
            if (table.Rows.Count == 0)
            {
                return new JsonResult(1);
            }
            else
            {
                return new JsonResult(-1);
            }
        }

        // Add Client to the database (2023/03/06)
        [HttpPost]
        [Route("AddClient")]
        public JsonResult AddClient(ClientDetail c)
        {
            string q = @"insert into client_detail (first_name, last_name, nic, mobile_no, email, designation, server_name, partner_id) 
                         values (@first_name, @last_name, @nic, @mobileNo, @email, @designation, @serverName, @pId)";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ConfigDBConnecion");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(q, myCon))
                {
                    myCommand.Parameters.AddWithValue("@first_name", c.first_name);
                    myCommand.Parameters.AddWithValue("@last_name", c.last_name);
                    myCommand.Parameters.AddWithValue("@nic", c.nic);
                    myCommand.Parameters.AddWithValue("@mobileNo", c.mobile_no);
                    myCommand.Parameters.AddWithValue("@email", c.email);
                    myCommand.Parameters.AddWithValue("@designation", c.designation);
                    myCommand.Parameters.AddWithValue("@serverName", c.server_name);
                    myCommand.Parameters.AddWithValue("@pId", c.partner_id);

                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();

                }
            }

            q = @"select client_id from client_detail where email  = @ema";

            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(q, myCon))
                {
                    myCommand.Parameters.AddWithValue("@ema", c.email);

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
                return new JsonResult(table);
            }
        }

        // Get All Client Details (2023/03/16)
        [HttpGet]
        [Route("GetAllClients")]
        public JsonResult GetAllClients()
        {
            string q = @"select client_id, first_name, last_name, mobile_no, email, designation from client_detail";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ConfigDBConnecion");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(q, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(table);
        }
    }
}
