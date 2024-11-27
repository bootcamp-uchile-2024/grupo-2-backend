CREATE DATABASE IF NOT EXISTS Cervezario;

USE Cervezario;

CREATE TABLE Region (
    id VARCHAR(2) PRIMARY KEY,
    nombre VARCHAR(100)
);

CREATE TABLE Comuna (
    id VARCHAR(100) PRIMARY KEY,
    nombre VARCHAR(100),
    id_region VARCHAR(2)
);

CREATE TABLE Tipo_Envio (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100),
    descripcion TEXT
);

CREATE TABLE Tipo_Cerveza (
    id INT PRIMARY KEY AUTO_INCREMENT,
    tipo VARCHAR(50),
    nombre VARCHAR(50),
    categoria VARCHAR(50),
    color VARCHAR(50),
    descripcion TEXT 
);

CREATE TABLE Amargor (
    id VARCHAR(20) PRIMARY KEY,
    nivel VARCHAR(20),
    descripcion TEXT
);

CREATE TABLE Formato (
    id VARCHAR(50) PRIMARY KEY,
    descripcion TEXT
);

CREATE TABLE Personaje (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100),
    estilo VARCHAR(100),
    atributos TEXT
);

CREATE TABLE Suscripcion (
    id INT PRIMARY KEY AUTO_INCREMENT,
    tipo_suscripcion ENUM('BRONZE', 'SILVER', 'GOLDEN', 'PLATINUM', 'ELITE', 'SIN_SUSCRIPCION') NOT NULL,
    nombre VARCHAR(50),
    descripcion TEXT,
    precio DECIMAL(10,0),
    descuento DECIMAL(5,2),
    tipo_envio INT,
    -- Agregar el índice en la columna tipo_suscripcion
    INDEX (tipo_suscripcion)
);

CREATE TABLE Formulario_Preferencias (
    id INT PRIMARY KEY AUTO_INCREMENT,
    actividad_viernes VARCHAR(100),
    descripcion_amigos VARCHAR(100),
    tipo_comida VARCHAR(100),
    destino_vacaciones VARCHAR(100),
    sabor_bebida VARCHAR(100)
);

CREATE TABLE Proveedor (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100),
    id_comuna VARCHAR(100),
    contacto VARCHAR(100),
    telefono VARCHAR(15),
    correo_electronico VARCHAR(100)
);

CREATE TABLE Cerveza (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100),
    marca VARCHAR(100),
    id_tipo INT,
    stock INT,
    descripcion TEXT,
    precio DECIMAL(10,0),
    id_proveedor INT,
    id_amargor VARCHAR(20),
    graduacion DECIMAL(5,2),
    id_formato VARCHAR(100),
    imagen VARCHAR(100)
);

CREATE TABLE Perfil (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_personaje INT,
    historial_pedido INT,
    tipo_suscripcion ENUM('BRONZE', 'SILVER', 'GOLDEN', 'PLATINUM', 'ELITE', 'SIN_SUSCRIPCION') NOT NULL,
    id_formulario INT,
    recomendaciones TEXT,
    nivel_usuario VARCHAR(50)
);

CREATE TABLE Usuario (
    rut VARCHAR(12) PRIMARY KEY,
    nombre VARCHAR(100),
    apellido VARCHAR(100),
    contrasena VARCHAR(100),
    edad INT,
    tipo_suscripcion ENUM('BRONZE', 'SILVER', 'GOLDEN', 'PLATINUM','ELITE', 'SIN_SUSCRIPCION') NOT NULL,
    telefono_comprador VARCHAR(15),
    correo_comprador VARCHAR(100)
);

CREATE TABLE Datos_Envio (
    id INT PRIMARY KEY AUTO_INCREMENT,
    calle VARCHAR(100),
    numero VARCHAR(10),
    departamento VARCHAR(10),
    id_comuna VARCHAR(100),
    codigo_postal VARCHAR(7),
    rut_usuario VARCHAR(12),
    telefono VARCHAR(15),
    correo_electronico VARCHAR(100),
    estado VARCHAR(100)
);

CREATE TABLE Pedido (
    id INT PRIMARY KEY AUTO_INCREMENT,
    estado VARCHAR(100),
    fecha_ingreso DATE,
    fecha_entrega DATE,
    rut_comprador VARCHAR(12),
    direccion_entrega INT
);

CREATE TABLE Pedido_Cerveza (
    id_pedido INT,  
    id_cerveza INT,
    cantidad INT,
    PRIMARY KEY (id_pedido, id_cerveza),
    FOREIGN KEY (id_pedido) REFERENCES Pedido(id) ON DELETE CASCADE, -- Agregado ON DELETE CASCADE
    FOREIGN KEY (id_cerveza) REFERENCES Cerveza(id)
);

CREATE TABLE Carrito (
    id INT PRIMARY KEY AUTO_INCREMENT,
    total_a_pagar DECIMAL(10,0)
);

CREATE TABLE Promocion_Suscripcion (
    id_suscripcion INT,
    id_cerveza INT,
    descuento_adicional DECIMAL(5,2),
    PRIMARY KEY (id_suscripcion, id_cerveza)
);

CREATE TABLE Documento (
    id INT PRIMARY KEY AUTO_INCREMENT,
    tipo VARCHAR(50),
    comentario TEXT
);

CREATE TABLE Estado_Pedido (
    descripcion VARCHAR(50) PRIMARY KEY
);

CREATE TABLE Cerveza_Comuna (
    id_cerveza INT,
    id_comuna VARCHAR(100),
    PRIMARY KEY (id_cerveza, id_comuna),
    FOREIGN KEY (id_cerveza) REFERENCES Cerveza(id),
    FOREIGN KEY (id_comuna) REFERENCES Comuna(id)
);

-- Añadir claves foráneas

ALTER TABLE Comuna
ADD FOREIGN KEY (id_region) REFERENCES Region(id);

ALTER TABLE Proveedor
ADD FOREIGN KEY (id_comuna) REFERENCES Comuna(id);

ALTER TABLE Cerveza
ADD FOREIGN KEY (id_proveedor) REFERENCES Proveedor(id),
ADD FOREIGN KEY (id_formato) REFERENCES Formato(id),
ADD FOREIGN KEY (id_tipo) REFERENCES Tipo_Cerveza(id),
ADD FOREIGN KEY (id_amargor) REFERENCES Amargor(id);

ALTER TABLE Usuario
ADD FOREIGN KEY (tipo_suscripcion) REFERENCES Suscripcion(tipo_suscripcion);

ALTER TABLE Datos_Envio
ADD FOREIGN KEY (id_comuna) REFERENCES Comuna(id),
ADD FOREIGN KEY (rut_usuario) REFERENCES Usuario(rut);

ALTER TABLE Pedido
ADD FOREIGN KEY (rut_comprador) REFERENCES Usuario(rut),
ADD FOREIGN KEY (direccion_entrega) REFERENCES Datos_Envio(id);

ALTER TABLE Promocion_Suscripcion
ADD FOREIGN KEY (id_suscripcion) REFERENCES Suscripcion(id),
ADD FOREIGN KEY (id_cerveza) REFERENCES Cerveza(id);

ALTER TABLE Perfil
ADD FOREIGN KEY (historial_pedido) REFERENCES Pedido(id),
ADD FOREIGN KEY (tipo_suscripcion) REFERENCES Suscripcion(tipo_suscripcion),
ADD FOREIGN KEY (id_formulario) REFERENCES Formulario_Preferencias(id),
ADD FOREIGN KEY (id_personaje) REFERENCES Personaje(id);

ALTER TABLE Pedido 
ADD FOREIGN KEY (estado) REFERENCES Estado_Pedido(descripcion);

ALTER TABLE Suscripcion 
ADD FOREIGN KEY (tipo_envio) REFERENCES Tipo_Envio(id);
