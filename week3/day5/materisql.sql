-- create keyword
    -- buat database
    create database coba;
    show databases;
    
    -- buat table
    use coba;
    create table cobaTable(cobaColumn int(3));
    show tables;

-- alter keyword
    -- nambah column baru
    use coba;
    alter table cobaTable add columnBaru int(5); 
    desc cobaTable;

    -- ngubah column
    use coba;
    alter table cobaTable modify columnBaru varchar(30);
    desc cobaTable;

    -- hapus column
    use coba;
    alter table cobaTable drop column columnBaru;
    desc cobaTable;

-- truncate keyword
    -- isi data table
    use coba;
    alter table cobaTable add (columnBaru int(5) auto_increment, primary key(columnBaru)); 
    insert into cobaTable(cobaColumn) values (3),(5); 
    select * from cobaTable;
    
    -- reset table;
    use coba;
    truncate table cobaTable;
    desc cobaTable;
    select * from cobaTable;

    -- isi data table lagi;
    use coba;
    insert into cobaTable(cobaColumn) values (10),(11); 
    select * from cobaTable;

-- drop keyword
    -- hapus table
    use coba;
    drop table cobaTable;
    show tables;
    
    -- hapus database
    drop database coba;
    show databases;

-- SQL Syntax
    -- Where Clause
    select * from belajarsql.user; -- contoh table
    select * from belajarsql.user where nama='Ramis';

    -- In Clause
    select * from belajarsql.user; -- contoh table
    select * from belajarsql.user where nama in ('Ramis','Ana');

    -- Not In Clause
    select * from belajarsql.user; -- contoh table
    select * from belajarsql.user where nama not in ('Ramis','Ana');

    -- Between Clause
    select * from belajarsql.user; -- contoh table
    select * from belajarsql.user where user_id between 1 and 3;

    -- Like Clause
    select * from belajarsql.user; -- contoh table
    select * from belajarsql.user where nama like 'R%'; -- % wildcard untuk semua
    select * from belajarsql.user where nama like '__a%'; -- _ wildcard untuk 1 karakter

-- SQL Join
-- Inner Join
    select * from day3.provinsi;
    select * from day3.kota;
    select * from day3.provinsi join day3.kota on day3.provinsi.idProvinsi=day3.kota.idProvinsi;

-- Outer Join
    -- Left Join
        select * from day3.provinsi;
        select * from day3.kota;
        select * from day3.provinsi left join day3.kota on day3.provinsi.idProvinsi=day3.kota.idProvinsi;

    -- Right Join
        use day3;
        select * from provinsi;
        select * from kota;
        select * from provinsi right join kota on provinsi.idProvinsi=kota.idProvinsi;
