CREATE DATABASE burgers_db;
USE burgers_db;
CREATE TABLE burgers(
id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(100) NOT NULL,
devoured boolean not null default 0,
date TIMESTAMP
);




