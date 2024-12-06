CREATE TABLE Color (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL
);

INSERT INTO Color (nombre) VALUES
('Amarillo pálido (2 - 5)'),
('Ámbar rojizo (6 - 12)'),
('Cobrizo oscuro (13 - 25)'),
('Marrón oscuro/negro (26 - 40+)');

ALTER TABLE Tipo_Cerveza
ADD COLUMN color_id INT;

ALTER TABLE Tipo_Cerveza
ADD CONSTRAINT fk_color
FOREIGN KEY (color_id) REFERENCES Color(id);

UPDATE Tipo_Cerveza
SET color_id = (SELECT id FROM Color WHERE Color.nombre = 'Amarillo pálido (2 - 5)') 
WHERE nombre IN ('Pilsner','Witbier','Berliner Weisse','Hefeweizen','Gose');

UPDATE Tipo_Cerveza
SET color_id = (SELECT id FROM Color WHERE Color.nombre = 'Ámbar rojizo (6 - 12)') 
WHERE nombre IN ('Amber Lager','Amber Ale','Saison','American Pale Ale','Pale Ale','India Pale Ale', 'Flanders Red Ale',
'Pumpkin Ale','Christmas Ale');

UPDATE Tipo_Cerveza
SET color_id = (SELECT id FROM Color WHERE Color.nombre = 'Cobrizo oscuro (13 - 25)') 
WHERE nombre IN ('Rye Beer','Brown Ale','Bock','Barleywine','Kriek','Lambic','Gueuze'); 

UPDATE Tipo_Cerveza
SET color_id = (SELECT id FROM Color WHERE Color.nombre = 'Marrón oscuro/negro (26 - 40+)') 
WHERE nombre IN ('Dry Stout','Dark Lager','Stout','Imperial Stout','Porter'); 

ALTER TABLE Tipo_Cerveza
DROP COLUMN color;