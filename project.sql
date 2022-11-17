use airport;

create table flights (
flight_id varchar(255) primary key,
airline_name varchar(255),
arrival varchar(255),
departure varchar(255),
start_time time,
reach_time time, 
duration varchar(255)
);
create table class (
class_type varchar(255) primary key ,
price int ,
no_of_seats int 
);
create table passenger(
id int primary key auto_increment,
username varchar(255),
email varchar(255),
phonenumber bigint,
password varchar(255)
);
create table seat (
seat_no varchar(255)  primary key,
class_type varchar(255),
foreign key (class_type) references class(class_type)
);



create table ticket (
ticket_id int primary key  auto_increment  ,
flight_id varchar(255),
name varchar(255),
email varchar(255),
gender varchar(255),
gate_no int ,
date date,
seat_no varchar(255), 
class_type varchar(255),
arrival varchar(255),
departure varchar(255),
foreign key (class_type) references class(class_type),

foreign key (flight_id) references flights(flight_id) 
);
alter table ticket auto_increment = 1200;




insert into class values
('BUSINESS',10000,15),
('ECONOMY',3500,70),
('FIRST CLASS',6300,18);



insert into flights(flight_id , airline_name , arrival , departure , start_time , reach_time , duration)
values('6E6023','INDIGO','HYDERABAD','INDORE','14:10','15:40','1hr30mins'),
('6E6021','SPICEJET','INDORE','DELHI','15:10','17:40','2hr30mins'),
('6E6024','INDIGO','INDORE','BOMBAY','11:10','12:30','1hr20mins'),
('6E6018','VISTARA','HYDERABAD','INDORE','9:10','10:40','1hr30mins'),
('6E6027','AIRASIA','INDORE','DELHI','21:10','23:40','1hr30mins'),
('6E6029','INDIGO','HYDERABAD','INDORE','21:10','23:40','2hr30mins'),
('6E6030','INDIGO','INDORE','BOMBAY','9:10','11:40','2hr30mins'),
('6E6028','INDIGO','BANGLORE','INDORE','18:10','19:50','1hr40mins');



insert into seat values('1A','BUSINESS');
insert into seat values('1B','BUSINESS');
insert into seat values('1C','BUSINESS');
insert into seat values('2A','BUSINESS');
insert into seat values('2B','BUSINESS');
insert into seat values('2C','BUSINESS');
insert into seat values('3A','BUSINESS');
insert into seat values('3B','BUSINESS');
insert into seat values('3C','BUSINESS');
insert into seat values('4A','BUSINESS');
insert into seat values('4B','BUSINESS');
insert into seat values('4C','BUSINESS');
insert into seat values('5A','BUSINESS');
insert into seat values('5B','BUSINESS');
insert into seat values('5C','BUSINESS');
insert into seat values('6A','ECONOMY');
insert into seat values('6B','ECONOMY');
insert into seat values('6C','ECONOMY');
insert into seat values('6D','ECONOMY');
insert into seat values('6E','ECONOMY');
insert into seat values('6F','ECONOMY');
insert into seat values('7A','ECONOMY');
insert into seat values('7B','ECONOMY');
insert into seat values('7C','ECONOMY');
insert into seat values('7D','ECONOMY');
insert into seat values('7E','ECONOMY');
insert into seat values('7F','ECONOMY');
insert into seat values('8A','ECONOMY');
insert into seat values('8B','ECONOMY');
insert into seat values('8C','ECONOMY');
insert into seat values('8D','ECONOMY');
insert into seat values('8E','ECONOMY');
insert into seat values('8F','ECONOMY');
insert into seat values('9A','FIRST CLASS');
insert into seat values('9B','FIRST CLASS');
insert into seat values('9C','FIRST CLASS');
insert into seat values('10A','FIRST CLASS');
insert into seat values('10B','FIRST CLASS');
insert into seat values('10C','FIRST CLASS');
insert into seat values('11A','FIRST CLASS');
insert into seat values('11B','FIRST CLASS');
insert into seat values('11C','FIRST CLASS');
insert into seat values('12A','FIRST CLASS');
insert into seat values('12B','FIRST CLASS');
insert into seat values('13A','FIRST CLASS');
insert into seat values('12C','FIRST CLASS');
insert into seat values('13B','FIRST CLASS');
insert into seat values('13C','FIRST CLASS');











create table airport(
airport_id int primary key,
passenger_id int,
foreign key (passenger_id) references passenger(id)
);

insert into airport (airport_id)
values(1567);
create table airport_employee(
SSN int primary key auto_increment ,
name varchar(255),
airport_id int ,
email varchar(255),
job_type varchar(255),
salary int,
ph_no bigint,
gender varchar(255),
address varchar(255),
foreign key (airport_id) references airport(airport_id)
);

alter table airport_employee auto_increment = 2345;

insert into airport_employee ( name , email , job_type , salary , ph_no , gender , address)
values("sravya" , "sravya@gmail.com" , "manager" , 200000 , 9876543210 , "female" , "hyderabad") ,
("anuksha" , "anuksha@gmail.com" , "security officer" , 100000 , 9566543210 , "female" , "gwalior") ,
("poojitha" , "poo@gmail.com" , "air traffic controller" , 250000 , 9876789210 , "female" , "maharashtra") ,
("roopa" , "roo@gmail.com" , "passenger service aggent " , 100000 , 7856543210 , "female" , "dhanbad");


create table shop(

shop_id int primary key auto_increment,
shop_name varchar(255),
airport_id int, 
area varchar(255),
terminal int ,
owner_contact bigint ,
foreign key (airport_id) references airport(airport_id)
);

alter table shop auto_increment=1345; 

insert into shop( shop_name , area , terminal , owner_contact )
values("FOREST ESSENTIALS" , "DEPARTURE,SHA (FIRST FLOOR)" , 1 , 9876543278),
("LEE COOPER" , "DEPARTURE,SHA (FIRST FLOOR)" , 2 , 9676543278),
("KAMA AYURVEDA" , "DEPARTURE,SHA (FIRST FLOOR)" , 2 , 8776543278),
("HALDIRAMS" , "DEPARTURE,SHA (FIRST FLOOR)" , 3 , 9876546778);

create table transport_facility(

vehicle_id int primary key auto_increment,
airport_id int,
location varchar(255),
driver_contact bigint ,
foreign key (airport_id) references airport(airport_id)
);

alter table shop auto_increment=1270; 

insert into transport_facility (location , driver_contact)
values("LANE 1 ARRIVALS" , 9876543278),
("MEET & GREET AREA" , 9676543278),
("LEVEL 0 CAR PARK" ,  8776543278),
("T3, Pillar no 3." ,  9876546778);
