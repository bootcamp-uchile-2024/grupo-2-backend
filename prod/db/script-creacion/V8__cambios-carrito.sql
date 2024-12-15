UPDATE Usuario
SET Usuario.correo_comprador = CONCAT( rut, '@ejemplo.com');

ALTER TABLE Usuario
MODIFY COLUMN correo_comprador VARCHAR(100) NOT NULL UNIQUE;

DROP table Pedido_Cerveza;

CREATE TABLE Pedido_Cerveza (
    id_carrito INT,  
    id_cerveza INT,
    cantidad INT,
    precio_venta INT,
    PRIMARY KEY (id_carrito, id_cerveza)
);

INSERT INTO Pedido_Cerveza (id_carrito, id_cerveza, cantidad, precio_venta) VALUES
(1,3,5, 2000),
(1,4,3, 1700),
(2,7,1, 1900),
(5,8,4, 1400),
(6,3,9, 2000),
(7,4,3, 1700),
(8,3,5, 2000),
(3,9,5, 2300),
(4,8,15, 1400);

ALTER TABLE Pedido_Cerveza
ADD CONSTRAINT fk_id_cerveza
FOREIGN KEY (id_cerveza) REFERENCES Cerveza(id);

ALTER TABLE Carrito
ADD COLUMN rut_comprador VARCHAR(12);

ALTER TABLE Carrito
DROP COLUMN total_a_pagar;

ALTER TABLE Pedido
ADD COLUMN id_carrito INT,
ADD COLUMN total_a_pagar INT;

UPDATE Pedido
SET Pedido.id_carrito = Pedido.id;
DELETE 
FROM Pedido
WHERE Pedido.id IN(9,10);

ALTER TABLE Pedido
ADD CONSTRAINT fk_id_carrito_pedido
FOREIGN KEY (id_carrito) REFERENCES Carrito(id);

