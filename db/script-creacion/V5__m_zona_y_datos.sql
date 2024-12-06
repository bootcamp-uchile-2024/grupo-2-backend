CREATE TABLE Zona (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL
);

INSERT INTO Zona (nombre) VALUES
('Zona Norte'),
('Zona Centro'),
('Zona Sur');

ALTER TABLE Region
ADD COLUMN zona_id INT;

ALTER TABLE Region
ADD CONSTRAINT fk_zona
FOREIGN KEY (zona_id) REFERENCES Zona(id);

UPDATE Region
SET zona_id = (SELECT id FROM Zona WHERE Zona.nombre = 'Zona Norte') 
WHERE id IN ('AP','TA','AN', 'AT','CO');

UPDATE Region
SET zona_id = (SELECT id FROM Zona WHERE Zona.nombre = 'Zona Centro') 
WHERE id IN ('VA','RM','OH','MA','NB');

UPDATE Region
SET zona_id = (SELECT id FROM Zona WHERE Zona.nombre = 'Zona Sur') 
WHERE id IN ('BI','AR','LR','LL','AI','MG');

UPDATE Cerveza
SET id_proveedor = 2
WHERE id IN(5, 8, 3, 7);

UPDATE Cerveza
SET id_tipo = 15
WHERE id = 1;

