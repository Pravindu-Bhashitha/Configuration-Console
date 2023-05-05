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
    public class ProfileController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public ProfileController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        // Get user name (2023/02/05)
        [HttpGet]
        [Route("UserName")]
        public JsonResult UserName(int id)
        {
            string q = @"select pro_first_name from profile where pro_id = @Id";
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

        // Get desig_id of the user (2023/02/16)
        [HttpGet]
        [Route("DesigId")]
        public JsonResult DesigID(int id)
        {
            string q = @"select pro_desig_id from profile where pro_id = @id";
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

        // Get Admin Names (2023/02/25)
        [HttpGet]
        [Route("AdminNames")]
        public JsonResult AdminNames()
        {
            string q = @"select pro_id, pro_first_name, pro_last_name from profile where pro_desig_id = 2";
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

        // Get Partner Names (2023/03/06)
        [HttpGet]
        [Route("PartnerNames")]
        public JsonResult PartnerNames()
        {
            string q = @"select pro_id, pro_first_name, pro_last_name from profile where pro_desig_id = 3";
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

        // Get Count of the same email user (2023/02/28)
        [HttpGet]
        [Route("CountEmail")]
        public JsonResult CountEmail(string email)
        {
            string q = @"select pro_first_name from profile where pro_email  = @email";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ConfigDBConnecion");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(q, myCon))
                {
                    myCommand.Parameters.AddWithValue("@email", email);

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

        // Get pro_id of the user (2023/02/28)
        [HttpPost]
        [Route("GetId")]
        public JsonResult GetId(Profile p)
        {
            string q = @"select pro_id from profile where pro_email  = @email";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ConfigDBConnecion");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(q, myCon))
                {
                    myCommand.Parameters.AddWithValue("@email", p.pro_email);

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

        // Add Partner to the database (2023/02/28)
        [HttpPost]
        [Route("AddPartner")]
        public JsonResult AddPartner(Profile p)
        {
            string q = @"insert into profile (pro_first_name, pro_last_name, pro_email, pro_dept_id, pro_desig_id, pro_dob, pro_gender, pro_mobile, pro_joined_date, pro_updated_time) 
                         values (@first_name, @last_name, @email, @dept_id, @desig_id, @dob, @gender, @mobile, @joined_date, @updated_time)";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ConfigDBConnecion");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(q, myCon))
                {
                    myCommand.Parameters.AddWithValue("@first_name", p.pro_first_name);
                    myCommand.Parameters.AddWithValue("@last_name", p.pro_last_name);
                    myCommand.Parameters.AddWithValue("@email", p.pro_email);
                    myCommand.Parameters.AddWithValue("@dept_id", p.pro_dept_id);
                    myCommand.Parameters.AddWithValue("@desig_id", p.pro_desig_id);
                    myCommand.Parameters.AddWithValue("@dob", p.pro_dob);
                    myCommand.Parameters.AddWithValue("@gender", p.pro_gender);
                    myCommand.Parameters.AddWithValue("@mobile", p.pro_mobile);
                    myCommand.Parameters.AddWithValue("@joined_date", p.pro_joined_date);
                    myCommand.Parameters.AddWithValue("@updated_time", DateTime.Now);

                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();

                }
            }

            q = @"select pro_id from profile where pro_email  = @email";

            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(q, myCon))
                {
                    myCommand.Parameters.AddWithValue("@email", p.pro_email);

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

        // Get Partner Details for particular Admin (2023/03/10)
        [HttpPost]
        [Route("PartnerDetails")]
        public JsonResult PartnerDetails(Profile[] p)
        {
            string q = @"select pro_id, pro_first_name, pro_last_name, pro_email, pro_mobile from profile where partner_id = @pId";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ConfigDBConnecion");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();

                foreach (Profile P in p)
                {
                    using (SqlCommand myCommand = new SqlCommand(q, myCon))
                    {
                        myCommand.Parameters.AddWithValue("@pId", P.pro_id);

                        myReader = myCommand.ExecuteReader();
                        table.Load(myReader);
                        
                    }
                }
                myReader = null;
                myReader.Close();
                myCon.Close();

            }
            return new JsonResult(table);
        }

        // Get Partner IDs for particular Admin (2023/03/10)
        [HttpGet]
        [Route("PartnerIDs")]
        public JsonResult PartnerIDs(int supervisorId)
        {
            string q = @"select  pro_id from supervisor where sup_id = @sId";
            DataTable table = new DataTable();
            DataTable table2 = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ConfigDBConnecion");
            SqlDataReader myReader1;
            SqlDataReader myReader2;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(q, myCon))
                {
                    myCommand.Parameters.AddWithValue("@sId", supervisorId);

                    myReader1 = myCommand.ExecuteReader();
                    table.Load(myReader1);
                    myReader1.Close();

                }

                q = @"select pro_id, pro_first_name, pro_last_name, pro_email, pro_mobile from profile where pro_id = @pId";

                for (int i=0; i<table.Rows.Count; i++)
                {
                    var id = table.Rows[i]["pro_id"].ToString();
                    using (SqlCommand myCommand = new SqlCommand(q, myCon))
                    {
                        myCommand.Parameters.AddWithValue("@pId", id);

                        myReader2 = myCommand.ExecuteReader();
                        table2.Load(myReader2);
                        // table2.Rows.Add(myReader2);

                    }

                }
                //myReader2.Close();
                myCon.Close();
            }
            return new JsonResult(table2);
        }

        // Get All Admin details (2023/03/16)
        [HttpGet]
        [Route("GetAllAdmins")]
        public JsonResult GetAllAdmins()
        {
            string q = @"select pro_id, pro_first_name, pro_last_name, pro_email, pro_mobile from profile where pro_desig_id = 2";
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

        // Get All Partner details (2023/03/16)
        [HttpGet]
        [Route("GetAllPartners")]
        public JsonResult GetAllPartners()
        {
            string q = @"select pro_id, pro_first_name, pro_last_name, pro_email, pro_mobile from profile where pro_desig_id = 3";
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
