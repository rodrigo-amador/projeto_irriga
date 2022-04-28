CREATE DATABASE IF NOT EXISTS IRRIGA;

USE IRRIGA;

CREATE TABLE IF NOT EXISTS cities (
	id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
	name VARCHAR(100) NOT NULL,
	latitude VARCHAR(50),
	longitude VARCHAR(50),
	gmt INT NOT NULL
);

INSERT INTO cities (name, latitude, longitude, gmt) VALUES ('Santa Maria', '-29.6841666667', '-53.8069444444', -3);
INSERT INTO cities (name, latitude, longitude, gmt) VALUES ('Campo Grande', '-20.4427777778', '-54.6463888889', -4);
INSERT INTO cities (name, latitude, longitude, gmt) VALUES ('Deutsch Jahrndorf', '48.0086111111', '17.1097222222', 2);
INSERT INTO cities (name, latitude, longitude, gmt) VALUES ('Três de Maio', NULL, NULL, -3);

CREATE TABLE IF NOT EXISTS weather (
	id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
	cities_id INT NOT NULL,
	FOREIGN KEY (cities_id) REFERENCES cities(id) ON DELETE CASCADE,
	time_now DATETIME NOT NULL,
	temperature_now DECIMAL(2,2) NOT NULL,
	temperature_min DECIMAL(2,2) NOT NULL,
	temperature_max DECIMAL(2,2) NOT NULL,
	wind_speed DECIMAL(3,2) NOT NULL,
	sunrise DATETIME NOT NULL,
	sunset DATETIME NOT NULL
);