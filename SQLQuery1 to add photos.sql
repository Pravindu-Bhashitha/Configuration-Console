use config_db
drop database config_db;
select * from client_detail
select * from profile
select * from login
ALTER TABLE profile ADD PhotoLink VARCHAR(255);


insert into profile (pro_first_name, pro_last_name, pro_email, pro_dept_id, pro_desig_id, pro_dob, pro_gender, pro_mobile, pro_joined_date, pro_updated_time,PhotoLink) values
	('Hasindu', 'Mahanama', 'mahanama@gmail.com', 1, 3, '1998-11-29', 'Male', '7111236600', '2023-04-01', GETDATE(),
	'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fman-id-photo&psig=AOvVaw1bgAp9YJq4rtErFmcPoQXt&ust=1686459509034000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLjDxbH1t_8CFQAAAAAdAAAAABAI');
insert into login (username, password, pro_id, desig_id) values 
	('pravindu@gmail.com', 'pravindu', 3, 3);
insert into login (username, password, pro_id, desig_id) values 
	('mahanama@gmail.com', 'mahanama', 12, 3);
DELETE FROM login WHERE pro_id = 3
DELETE FROM profile
WHERE PhotoLink = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fman-id-photo&psig=AOvVaw1bgAp9YJq4rtErFmcPoQXt&ust=1686459509034000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLjDxbH1t_8CFQAAAAAdAAAAABAI';

insert into profile (pro_first_name, pro_last_name, pro_email, pro_dept_id, pro_desig_id, pro_dob, pro_gender, pro_mobile, pro_joined_date, pro_updated_time,PhotoLink) values
	('Charuka', 'Nadungamuwa', 'charuka@gmail.com', 1, 3, '2000-01-29', 'Male', '7111255100', '2023-04-05', GETDATE(),'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500');
insert into login (username, password, pro_id, desig_id) values 
	('charuka@gmail.com', 'charuka', 13, 3);
UPDATE profile
SET PhotoLink = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Outdoors-man-portrait_%28cropped%29.jpg/1200px-Outdoors-man-portrait_%28cropped%29.jpg' where pro_id = 1;
UPDATE profile
SET PhotoLink = 'https://st.depositphotos.com/1269204/1219/i/600/depositphotos_12196477-stock-photo-smiling-men-isolated-on-the.jpg' where pro_id = 3;
UPDATE profile
SET PhotoLink = 'https://www.jamsadr.com/images/neutrals/person-donald-900x1080.jpg' where pro_id = 4;
UPDATE profile
SET PhotoLink = 'https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.webp?b=1&s=170667a&w=0&k=20&c=YQ_j83pg9fB-HWOd1Qur3_kBmG_ot_hZty8pvoFkr6A=' where pro_id = 2;
UPDATE profile
SET PhotoLink = 'https://womensagenda.com.au/wp-content/uploads/2021/03/yasmin_poole.png' where pro_id = 6;

UPDATE profile
SET PhotoLink = 'https://st2.depositphotos.com/3809847/5507/i/600/depositphotos_55071625-stock-photo-portrait-young-woman-smiling.jpg' where pro_id = 9;



UPDATE profile
SET PhotoLink = 'https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg' where pro_id = 5;
UPDATE profile
SET PhotoLink = 'https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg' where pro_id = 7;
UPDATE profile
SET PhotoLink = 'https://img.freepik.com/premium-photo/onfident-handsome-man-with-arms-crossed-body-smiling-looking-determined_911620-3103.jpg' where pro_id = 8;