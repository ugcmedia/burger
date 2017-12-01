DROP DATABASE IF EXISTS burger;
CREATE DATABASE burger;
CREATE TABLE burger.burgers (
  id int(10) NOT NULL AUTO_INCREMENT,
  name varchar(100) NOT NULL,
  devoured tinyint(1) NOT NULL DEFAULT '0',
  date timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);
INSERT INTO burger.burgers (id,name,devoured,date) VALUES (1,'Big Mac',1,'2017-11-24 02:02:24');
INSERT INTO burger.burgers (id,name,devoured,date) VALUES (2,'Double Cheeseburger',1,'2017-11-24 02:02:24');
INSERT INTO burger.burgers (id,name,devoured,date) VALUES (3,'Chicken Burger',1,'2017-11-24 02:05:47');
INSERT INTO burger.burgers (id,name,devoured,date) VALUES (4,'Veggie Burger',1,'2017-11-24 02:14:19');
INSERT INTO burger.burgers (id,name,devoured,datE) VALUES (5,'Bacon Burger',1,'2017-11-24 02:17:59');
INSERT INTO burger.burgers (id,name,devoured,date) VALUES (6,'Black Bean Burger',1,'2017-11-24 02:18:24');
INSERT INTO burger.burgers (id,name,devoured,date) VALUES (7,'Apple burger ',1,'2017-11-24 20:06:22');
INSERT INTO burger.burgers (id,name,devoured,date) VALUES (8,'Krabby Patty',1,'2017-11-24 20:14:03');
INSERT INTO burger.burgers (id,name,devoured,date) VALUES (9,'Turkey Burger',1,'2017-11-24 06:08:33');