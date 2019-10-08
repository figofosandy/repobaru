create table orders (
    orderId int(3) not null auto_increment,
    user_id int,
    orderNumber varchar(25),
    namaPesanan varchar(25),
    primary key (orderId),
    foreign key (user_id) references user(user_id)
);

-- sql join
-- select namaField from namaTable join 
select * from user join orders on user.user_id=orders.user_id;

--left join
select * from user left join orders on user.user_id=orders.user_id;

--right join
select * from user right join orders on user.user_id=orders.user_id;

insert into orders(user_id,orderNumber,namaPesanan) values
(3,'ord-001','printer'),
(4,'ord-002','monitor'),
(5,'ord-003','mouse'),
(6,'ord-004','flash disk'),
(7,'ord-005','ram'),
(7,'ord-006','mouse'),
(7,'ord-007','keyboard'),
(3,'ord-008','flash disk');
