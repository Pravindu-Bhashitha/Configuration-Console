create database config_db;
use config_db;

drop database config_db;

create table department (
	dep_id int not null IDENTITY(1, 1),
	dep_name varchar(255) not null,
	constraint dept_pk primary key (dep_id)
);

insert into department values 
	('IT Section A'),
	('IT Section B'),
	('IT Section C');

select * from department;

create table designation (
	desig_id int not null IDENTITY(1, 1),
	desig_name varchar(255) not null,
	constraint desig_pk primary key (desig_id)
);

insert into designation (desig_name) values 
	('Super Admin'),
	('Admin'),
	('Partner');

select * from designation;

create table profile (
	pro_id int not null IDENTITY(1, 1),
	pro_first_name varchar(100) not null,
	pro_last_name varchar(100) not null,
	pro_email varchar(200) not null,
	pro_dept_id int not null,
	pro_desig_id int not null,
	pro_dob date not null,
	pro_gender varchar(20) not null,
	pro_mobile varchar(30) not null,
	pro_joined_date date not null,
	pro_updated_time datetime not null,
	constraint pro_dep_fk foreign key (pro_dept_id) references department(dep_id) on delete NO ACTION on update cascade,
	constraint pro_desig_fk foreign key (pro_desig_id) references designation(desig_id) on delete NO ACTION on update cascade,
	constraint pro_pk primary key (pro_id)
);

insert into profile (pro_first_name, pro_last_name, pro_email, pro_dept_id, pro_desig_id, pro_dob, pro_gender, pro_mobile, pro_joined_date, pro_updated_time) values
	('Vinuka', 'Navod', 'vinuka@gmail.com', 1, 1, '1998-12-29', 'Male', '7111236700', '2023-01-01', GETDATE());
insert into profile (pro_first_name, pro_last_name, pro_email, pro_dept_id, pro_desig_id, pro_dob, pro_gender, pro_mobile, pro_joined_date, pro_updated_time) values
	('Nethmi', 'Anjani', 'nethmi@gmail.com', 1, 2, '1999-05-20', 'Female', '7610206555', '2023-01-01', GETDATE()),
	('Pravindu', 'Bhashitha', 'pravindu@gmail.com', 1, 3, '1999-10-10', 'Male', '7111285420', '2023-01-01', GETDATE());

insert into profile (pro_first_name, pro_last_name, pro_email, pro_dept_id, pro_desig_id, pro_dob, pro_gender, pro_mobile, pro_joined_date, pro_updated_time) values
	('Tharindu', 'Ruwanpathirana', 'tharindu@gmail.com', 1, 3, '2000-04-25', 'Male', '7155236852', '2023-01-01', GETDATE());

select * from profile;

Create table login (
	id int not null identity(1, 1),
	username varchar(200) not null,
	password varchar(200) not null,
	pro_id int,
	desig_id int,
	constraint login_fk_pro_id foreign key(pro_id) references profile(pro_id),
	constraint login_fk_desig_id foreign key(desig_id) references designation(desig_id),
	constraint login_pk primary key (id)
);

insert into login (username, password, pro_id, desig_id) values 
	('vinuka@gmail.com', 'vinuka', 1, 1),
	('nethmi@gmail.com', 'nethmi', 2, 2),
	('pravindu@gmail.com', 'pravindu', 3, 3);

insert into login (username, password, pro_id, desig_id) values 
	('tharindu@gmail.com', 'tharindu', 4, 3);

select * from login;

create table client_detail(
	client_id int not null identity(1, 1),
	first_name varchar(200) not null,
	last_name varchar(200) not null,
	nic varchar(50) not null,
	mobile_no varchar(20) not null,
	email varchar(200) not null,
	designation varchar(50),
	server_name varchar(100),
	partner_id int,
	constraint client_detail_fk_prt_id foreign key(partner_id) references profile(pro_id),
	constraint client_detail_pk primary key(client_id) 
);

insert into client_detail (first_name, last_name, nic, mobile_no, email, designation, server_name, partner_id) values
	('Amal', 'Perera', '784520856V', '0764578963', 'amal@gmail.com', 'General Manager', 'Server A', 3);

insert into client_detail (first_name, last_name, nic, mobile_no, email, designation, server_name, partner_id) values
	('Amal', 'Perera', '784520856V', '0764578963', 'amal@gmail.com', 'General Manager', 'Server B', 3),
	('Kamal', 'De Perera', '884520410V', '0714522789', 'kamal@gmail.com', 'General Manager', 'Server C', 3),
	('Nimal', 'Wijethunga', '854520889V', '0704578666', 'nimal@gmail.com', 'General Manager', 'Server D', 3),
	('Chathura', 'Vinod', '654510878V', '0714544912', 'chathura@gmail.com', 'General Manager', 'Server E', 4),
	('Hasitha', 'Manohara', '805520899V', '0774288955', 'hasitha@gmail.com', 'General Manager', 'Server F', 4);

insert into client_detail (first_name, last_name, nic, mobile_no, email, designation, server_name, partner_id) values
	('Kelum', 'Srinath', '965148239V', '0772546189', 'kelum@gmail.com', 'General Manager', 'Server B', 3),
	('Sampath', 'Kumara', '991258476V', '0712148790', 'sampath@gmail.com', 'General Manager', 'Server C', 3),
	('Sasika', 'Sankalana', '200014521426', '0704621789', 'sasika@gmail.com', 'General Manager', 'Server D', 3);

update client_detail set first_name = 'Jagath', last_name = 'Gallage', nic = '864512777V', mobile_no = '0714452122', email = 'jagath@gmail.com' where client_id = 2;

select * from client_detail;

2023/02/25 - Supervisor table
  
create table supervisor (
	id int not null IDENTITY(1, 1),
	pro_id int not null,
	sup_id int not null,
	constraint supervisor_fk_pro_id foreign key(pro_id) references profile(pro_id),
	constraint supervisor_fk_sup_id foreign key(sup_id) references profile(pro_id),
	constraint supervisor_pk primary key (id)
);

insert into supervisor (pro_id, sup_id) values (2, 1), (3, 2), (4, 2); 
insert into supervisor (pro_id, sup_id) values (19, 2);
select * from supervisor;



*****************************************************************************************************************
*****************************************************************************************************************
*****************************************************************************************************************


create table profile_reportto (
	id int not null IDENTITY(1, 1),
	sup_id int,
	prof_id int,
	constraint pro_repo_fk_sup_id foreign key(sup_id) references profile(pro_id),
	constraint pro_repo_fk_prof_id foreign key(prof_id) references profile(pro_id),
	constraint pro_repo_pk primary key (id)
);

create table sys_capability (
	sys_capa_id int not null IDENTITY(1, 1),
	sys_capa_name varchar(100) not null,
	constraint sys_capa_pk primary key (sys_capa_id)
);

create table sys_cap_matrix (
	matrix_id int not null IDENTITY(1, 1),
	sys_capability_id int,
	action varchar(255),
	access_right int,
	constraint cap_matrix_fk_capa_id foreign key(sys_capability_id) references sys_capability(sys_capa_id) on delete set null on update cascade,
	constraint cap_matrix_pk primary key (matrix_id)
);

create table config_user (
	user_key int not null IDENTITY(1, 1),
	pro_id int,
	user_name varchar(200),
	display_name varchar(200),
	user_status int,
	user_time_stamp datetime,
	user_update_time datetime,
	sys_capability_id int,
	constraint user_fk_pro_id foreign key(pro_id) references profile(pro_id) on delete NO ACTION on update cascade,
	constraint user_fk_cap_id foreign key(sys_capability_id) references sys_capability(sys_capa_id) on delete NO ACTION on update cascade,
	constraint user_pk primary key (user_key)
);

create table config_user_login (
	usl_id int not null IDENTITY(1, 1),
	usl_provider varchar(255) not null,
	usl_password varchar(100) not null,
	user_key int,
	usl_status int,
	usl_updatedate date,
	constraint usl_fk_user_key foreign key(user_key) references config_user(user_key) on delete NO ACTION on update cascade,
	constraint config_user_login_pk primary key (usl_id)
);

create table log_history (
	log_id int not null IDENTITY(1, 1),
	usl_id int,
	pro_id int,
	log_time datetime not null,
	action varchar(255),
	description varchar(255),
	change_old varchar(255),
	change_new varchar(255),
	constraint log_history_fk_usl_id foreign key(usl_id) references config_user_login(usl_id),
	constraint log_history_fk_pro_id foreign key(pro_id) references profile(pro_id),
	constraint log_history_pk primary key (log_id)
);

