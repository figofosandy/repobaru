use belajarsql;
select * from kota join provinsi on kota.idProvinsi=provinsi.idProvinsi;
select * from kota join provinsi on kota.idProvinsi=provinsi.idProvinsi where namaProvinsi='DKI Jakarta';
select * from kota right join provinsi on kota.idProvinsi=provinsi.idProvinsi;
select * from kota left join provinsi on kota.idProvinsi=provinsi.idProvinsi;

/*  
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
 */