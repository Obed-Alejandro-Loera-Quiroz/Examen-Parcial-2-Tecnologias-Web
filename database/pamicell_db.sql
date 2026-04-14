
CREATE DATABASE IF NOT EXISTS pamicell_db;
USE pamicell_db;

-- 2 tabla obligatoria de productos
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

-- 3 Tabla obligatoria de mensajes de contacto 
CREATE TABLE mensajes(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    correo VARCHAR(100) NOT NULL,
    asunto VARCHAR(150),
    mensaje TEXT NOT NULL
);

-- 4 datos de prueba para el catalogo 
INSERT INTO productos (nombre, categoria, marca, precio, stock, imagen, descripcion, disponible)
VALUES
('Iphone 13', 'smartphones', 'Apple', 999.99, 50, 'iphone13.jpg', 'El iPhone 13 con pantalla Super Retina XDR y chip A15 Bionic.', 1),
('Galaxy S21', 'smartphones', 'Samsung', 799.99, 30, 'galaxy_s21.jpg', 'El Samsung Galaxy S21 con pantalla Dynamic AMOLED 2X y cámara de alta resolución.', 1),
('MacBook Pro', 'laptops', 'Apple', 1999.99, 20, 'macbook_pro.jpg', 'El MacBook Pro con chip M1 y pantalla Retina de alta resolución.', 1),
('Dell XPS 13', 'laptops', 'Dell', 1499.99, 15, 'dell_xps_13.jpg', 'El Dell XPS 13 con pantalla InfinityEdge y procesador Intel Core i7.', 1),
('iPad Pro', 'tablets', 'Apple', 1099.99, 25, 'ipad_pro.jpg', 'El iPad Pro con pantalla Liquid Retina y chip M1 para un rendimiento excepcional.', 1),

('iPhone 14', 'smartphones', 'Apple', 1099.99, 40, 'iphone14.jpg', 'iPhone 14 con mejoras en cámara y rendimiento.', 1),
('iPhone 15 Pro', 'smartphones', 'Apple', 1299.99, 35, 'iphone15pro.jpg', 'iPhone 15 Pro con titanio y chip A17.', 1),
('Galaxy S23', 'smartphones', 'Samsung', 899.99, 45, 'galaxy_s23.jpg', 'Samsung Galaxy S23 con Snapdragon potente.', 1),
('Galaxy Z Flip 5', 'smartphones', 'Samsung', 999.99, 20, 'zflip5.jpg', 'Teléfono plegable Galaxy Z Flip 5.', 1),
('Xiaomi 13', 'smartphones', 'Xiaomi', 699.99, 60, 'xiaomi13.jpg', 'Xiaomi 13 con excelente relación calidad-precio.', 1),
('Redmi Note 12', 'smartphones', 'Xiaomi', 299.99, 80, 'redmi_note12.jpg', 'Redmi Note 12 económico y potente.', 1),

('HP Pavilion 15', 'laptops', 'HP', 899.99, 25, 'hp_pavilion.jpg', 'Laptop HP Pavilion para uso diario.', 1),
('Lenovo ThinkPad X1', 'laptops', 'Lenovo', 1799.99, 10, 'thinkpad_x1.jpg', 'Laptop empresarial ThinkPad X1.', 1),
('Asus ROG Zephyrus', 'laptops', 'Asus', 1599.99, 12, 'rog_zephyrus.jpg', 'Laptop gamer Asus ROG Zephyrus.', 1),

('iPad Air', 'tablets', 'Apple', 799.99, 30, 'ipadair.jpg', 'iPad Air ligero y potente.', 1),
('Samsung Tab S9', 'tablets', 'Samsung', 899.99, 20, 'tabs9.jpg', 'Tablet premium Samsung Tab S9.', 1),

('AirPods Pro', 'accesorios', 'Apple', 249.99, 100, 'airpods_pro.jpg', 'Audífonos inalámbricos con cancelación de ruido.', 1),
('Galaxy Buds 2', 'accesorios', 'Samsung', 149.99, 90, 'galaxy_buds2.jpg', 'Audífonos Samsung con gran calidad de sonido.', 1),
('Smartwatch Series 9', 'wearables', 'Apple', 499.99, 50, 'watch9.jpg', 'Apple Watch Series 9 con funciones avanzadas.', 1),
('Galaxy Watch 6', 'wearables', 'Samsung', 399.99, 45, 'watch6.jpg', 'Smartwatch Samsung Galaxy Watch 6.', 1),
('Cargador inalámbrico', 'accesorios', 'Anker', 39.99, 150, 'cargador.jpg', 'Cargador inalámbrico rápido.', 1);
