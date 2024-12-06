CREATE TABLE Categoria (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL
);

INSERT INTO Categoria (nombre) VALUES
('Ales'),
('Lagers'),
('Trigo'),
('Ácidas'),
('Especiales');

ALTER TABLE Tipo_Cerveza
ADD COLUMN categoria_id INT;

ALTER TABLE Tipo_Cerveza
ADD CONSTRAINT fk_categoria
FOREIGN KEY (categoria_id) REFERENCES Categoria(id);

UPDATE Tipo_Cerveza
SET categoria_id = (SELECT id FROM Categoria WHERE Categoria.nombre = 'Ales') 
WHERE nombre IN ('Saison','Rye Beer','Pale Ale','India Pale Ale','Imperial Stout','Stout',
'Brown Ale','American Pale Ale','Amber Ale','Barleywine','Porter');

UPDATE Tipo_Cerveza
SET categoria_id = (SELECT id FROM Categoria WHERE Categoria.nombre = 'Lagers') 
WHERE nombre IN ('Pilsner','Dry Stout','Dark Lager','Bock','Amber Lager');

UPDATE Tipo_Cerveza
SET categoria_id = (SELECT id FROM Categoria WHERE Categoria.nombre = 'Trigo') 
WHERE nombre IN ('Hefeweizen','Berliner Weisse','Witbier'); 

UPDATE Tipo_Cerveza
SET categoria_id = (SELECT id FROM Categoria WHERE Categoria.nombre = 'Ácidas') 
WHERE nombre IN ('Lambic','Kriek','Gueuze','Gose', 'Flanders Red Ale'); 

UPDATE Tipo_Cerveza
SET categoria_id = (SELECT id FROM Categoria WHERE Categoria.nombre = 'Especiales') 
WHERE nombre IN ('Pumpkin Ale','Christmas Ale','Barleywine');

ALTER TABLE Tipo_Cerveza
DROP COLUMN categoria;