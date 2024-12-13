ALTER TABLE Usuario
ADD COLUMN rol VARCHAR(20) NOT NULL;

UPDATE Usuario
SET rol = 'user';

UPDATE Usuario
SET contrasena = null;