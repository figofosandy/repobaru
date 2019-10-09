insert into kota (idProvinsi,namaKota) values (3,'Bandung');
create table siswa (
    id int(3) not null auto_increment,
    nis int(5),
    idKota int(3),
    gender char(3),
    namaSiswa varchar(20),
    primary key(id),
    foreign key(idKota) references kota(idKota)
);
insert into siswa (nis,idKota,gender,namaSiswa) values(111,3,'L','Abdul'),(112,1,'L','Dandy'),(113,6,'L','Aris'),(114,2,'P','Ririn');
create table detailSiswa (
    id int(3) not null auto_increment,
    idSiswa int(5),
    alamat varchar(20),
    noTelp varchar(20),
    primary key(id),
    foreign key(idSiswa) references siswa(id)
);
insert into detailSiswa (idSiswa,alamat,noTelp) values (1,'BSD','6211'),(2,'Kemayoran','6212'),(3,'Cihampelas','6213'),(4,'Kebayoran','6214');
create table pelajaran (
    id int(3) not null auto_increment,
    namaPelajaran varchar(20),
    primary key(id)
);
insert into pelajaran(namaPelajaran) values('PKN'),("MTK"),('IPA');
create table krs (
    id int(3) not null auto_increment,
    idSiswa int(5),
mo    idPelajaran int(5),
    primary key(id),
    foreign key(idSiswa) references siswa(id),
    foreign key(idPelajaran) references pelajaran(id)
);
insert into krs(idSiswa,idPelajaran) values(1,1),(1,2),(2,1),(3,2),(3,3);

use day3;
select siswa.namaSiswa,detailSiswa.alamat,kota.namaKota,provinsi.namaProvinsi
from siswa join detailSiswa on siswa.id=detailSiswa.idSiswa
join kota on siswa.idKota=kota.idKota
join provinsi on kota.idProvinsi=provinsi.idProvinsi;

select siswa.namaSiswa,pelajaran.namaPelajaran
from siswa join krs on siswa.id=krs.idSiswa
join pelajaran on krs.idPelajaran=pelajaran.id;

select siswa.id,siswa.namaSiswa,siswa.nis,siswa.gender,detailSiswa.noTelp,detailSiswa.alamat,kota.namaKota,provinsi.namaProvinsi
from siswa join detailSiswa on siswa.id=detailSiswa.idSiswa
join kota on siswa.idKota=kota.idKota
join provinsi on kota.idProvinsi=provinsi.idProvinsi;