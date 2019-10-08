-- login user
-- mysql -u namaUser -p;
mysql -u root -p;

-- buat database
-- create database namaDatabase;
create database belajarsql;

-- hapus database
-- drop database namaDatabase;
drop database belajarsql;

-- make database belajarsql
-- use namaDatabase;
use belajarsql;

-- buat tabel
-- create tabe namaTable (field1 type(length), field2 type(length), ... , ....);
create table data_diri (
    id_pengguna int(3),
    nama VARCHAR(35),
    alamat VARCHAR(60),
    email VARCHAR(40),
    no_telepon VARCHAR(15),
    jk CHAR(1)
);

-- lihat tabel yang udah dibuat
show tables;

-- lihat deskripsi table
-- desc namaTable;
desc data_diri;

-- menambahkan value by field
-- insert into nama_table(field1,field2,...,...) values(valueField1,valueField2,...,...);
insert into data_diri (id_pengguna,nama,alamat,email,no_telepon,jk) values (1,'anonymous','undefined','anonymous@mail.com','0123456789','N');

-- menambahkan value by field lebih dari satu line
-- insert into nama_table(field1,field2,...,...) values(valueField1,valueField2,...,...),values(valueField1,valueField2,...,...),...;
insert into data_diri (id_pengguna,nama,alamat,email,no_telepon,jk) values (1,'anonymous','undefined','anonymous@mail.com','0123456789','N'),(1,'anonim','unknown','anonim@mail.com','0101010101','L');

-- nampilin isi table
-- semua
-- select * from namaTable;
select * from data_diri;
-- beberapa field(berdasarkan field)
-- select field1,field2,...,... from namaTable;
select id_pengguna,nama from data_diri;

-- nambah field baru
-- alter table namaTable add fieldBaru typeData(length);
alter table data_diri add umur varchar(10);

-- hapus field
-- alter table namaTable drop column namaField;
alter table data_diri drop column umur

-- hapus table
-- drop table namaTable;
drop table data_diri;

-- primary key
-- create table namaTable (fieldPrimary type(length) not null, field2 type(length),...,...);
create table user (
    user_id int(3) not null auto_increment, --not null karna primary gak boleh null & auto increment- jadi auto nambah gak usah diisi value
    nama varchar(35),  
    alamat VARCHAR(60),
    email VARCHAR(40),
    no_telepon VARCHAR(15),
    jk CHAR(1),
    primary key(user_id)
);

-- mencari data berdasarkan kondisi
-- select namaField from namaTable where kondisi;
select email,nama from user where user_id=1;

-- mengupdate data
-- update namaTable set namaField=value,... where kondisi;
update user set jk='P' where user_id=2;

-- hapus data
-- delete from namaTable where kondisi;
delete from user where user_id=3;

SELECT * FROM user WHEre alamat='jakarta';

SELECT salary as salaryAge,count(salary) as banyak from user where salary>4500 group by salary
union all 
select 'jumlah' salary,count(salary) from user where salary>4500
union all
select '',''
union all
SELECT salary,count(salary) as banyak from user where salary=2000
union all
select '',''
union all
SELECT age,count(age) as banyak FROM user where age in(23,25) group by age
UNION ALL
SELECT 'jumlah' age,count(age) from user where age in(23,25);
