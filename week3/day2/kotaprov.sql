use day3;
create table division(
    id int(3) not null auto_increment,
    divisi varchar(25),
    primary key(id)
);
create table roles(
    id int(3) not null auto_increment,
    roles varchar(25),
    primary key(id)
);
create table job(
    id int(3) not null auto_increment,
    job varchar(25),
    primary key(id)
);
create table employee(
    id int(3) not null auto_increment,
    nama varchar(25),
    divisionId int(3),
    jobId int(3),
    primary key(id),
    foreign key(divisionId) references division(id),
    foreign key(jobId) references job(id)
);
insert into division(nama) values('IT'),('Business'),('Human Capital');
insert into roles(nama) values('Atasan'),('Bawahan');
insert into job(nama) values('Developer'),('Manager'),('UI Design');
insert into employee(nama,divisionId,jobId) values('Linus Torvalds',1,1),('Richard Stallman',2,2),('Lynda Learn',3,3);

use day3;
update division set roleId=1 where id='1';
update division set roleId=2 where id='2';
update division set roleId=2 where id='3';
select * from division;

use day3;
select employee.nama,job.job,division.divisi,roles.roles from employee
join division on employee.divisionId=division.id
join job on employee.jobId=job.id
join roles on division.roleId=roles.id;

use day3;
select employee.nama,job.job,division.divisi from employee
join division on employee.divisionId=division.id
join job on employee.jobId=job.id
where job.job='Developer';

select * from division;
select * from roles;
select * from job;
select * from employee;


use belajarsql;
select * from kota join provinsi on kota.idProvinsi=provinsi.idProvinsi;
select * from kota join provinsi on kota.idProvinsi=provinsi.idProvinsi where namaProvinsi='DKI Jakarta';
select * from kota right join provinsi on kota.idProvinsi=provinsi.idProvinsi;
select * from kota left join provinsi on kota.idProvinsi=provinsi.idProvinsi;

create table provinsi (
    idProvinsi int(3) not null auto_increment,
    namaProvinsi varchar(32),
    primary key(idProvinsi)
);

create table kota (
    idKota int(3) not null auto_increment,
    idProvinsi int(3),
    namaKota varchar(32),
    primary key(idKota),
    foreign key(idProvinsi) references provinsi(idProvinsi)
);

insert into provinsi (namaProvinsi) values('DKI Jakarta'),('Banten'),('Jawa Barat'),('Jawa Tengah');

insert into kota(idProvinsi,namaKota) values(1,'Jakarta Barat'),(1,'Jakarta Timur'),(2,'Tangerang');

insert into kota(namaKota) values('Tokyo'),('Sydney');