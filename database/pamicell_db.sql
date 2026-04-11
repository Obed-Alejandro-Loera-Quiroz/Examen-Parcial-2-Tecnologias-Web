
CREATE DATABASE IF NOT EXISTS pamicell_db;
USE pamicell_db;

--2 tabla obligatoria de productos
CREATE TABLE productos(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    categoria VARCHAR(50),
    marca VARCHAR(50),
    precio DECIMAL(10,2) NOT NULL,
    stock INT DEFAULT 0,
    imagen VARCHAR(255),
    descripcion TEXT,
    disponible TINYINT(1) DEFAULT 1
);

--3 Tabla obligatoria de mensajes de contacto 
CREATE TABLE mensajes(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    correo VARCHAR(100) NOT NULL,
    asunto VARCHAR(150),
    mensaje TEXT NOT NULL
);

--4 datos de prueba para el catalogo 
INSERT INTO productos (nombre, categoria, marca, precio, stock, imagen, descripcion, disponible)
VALUES
('iphone 13', 'smartphones', 'Apple', 999.99, 50, 'iphone13.jpg', 'El iPhone 13 con pantalla Super Retina XDR y chip A15 Bionic.', 1),
('Galaxy S21', 'smartphones', 'Samsung', 799.99, 30, 'galaxy_s21.jpg', 'El Samsung Galaxy S21 con pantalla Dynamic AMOLED 2X y cámara de alta resolución.', 1),
('MacBook Pro', 'laptops', 'Apple', 1999.99, 20, 'macbook_pro.jpg', 'El MacBook Pro con chip M1 y pantalla Retina de alta resolución.', 1),
('Dell XPS 13', 'laptops', 'Dell', 1499.99, 15, 'dell_xps_13.jpg', 'El Dell XPS 13 con pantalla InfinityEdge y procesador Intel Core i7.', 1),
('iPad Pro', 'tablets', 'Apple', 1099.99, 25, 'ipad_pro.jpg', 'El iPad Pro con pantalla Liquid Retina y chip M1 para un rendimiento excepcional.', 1);