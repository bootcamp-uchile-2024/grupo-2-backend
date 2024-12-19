ALTER TABLE Usuario
ADD COLUMN is_active BOOLEAN NOT NULL;

UPDATE Usuario
SET is_active = true;
