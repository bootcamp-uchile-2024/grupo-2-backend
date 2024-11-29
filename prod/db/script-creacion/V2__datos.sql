
-- Insertar datos en la tabla Región
INSERT INTO Region (id, nombre) VALUES
('AP', 'Región de Arica y Parinacota'),
('TA', 'Región de Tarapacá'),
('AN', 'Región de Antofagasta'),
('AT', 'Región de Atacama'),
('CO', 'Región de Coquimbo'),
('VA', 'Región de Valparaíso'),
('RM', 'Región Metropolitana'),
('OH', 'Región del Libertador General Bernardo O’Higgins'),
('MA', 'Región del Maule'),
('NB', 'Región de Ñuble'),
('BI', 'Región del Biobío'),
('AR', 'Región de La Araucanía'),
('LR', 'Región de Los Ríos'),
('LL', 'Región de Los Lagos'),
('AI', 'Región de Aysén del General Carlos Ibáñez del Campo'),
('MG', 'Región de Magallanes y de la Antártica Chilena');

-- Insertar datos en la tabla Amargor
INSERT INTO Amargor (id, nivel, descripcion) VALUES
    ('Bajo_0_20_IBU', 'Bajo', 'Bajo amargor, típico en cervezas suaves como las de trigo o lagers ligeras.'),
    ('Moderado_20_40_IBU', 'Moderado', 'Amargor moderado, común en Pale Ales y Amber Ales.'),
    ('Notable_40_60_IBU', 'Notable', 'Amargor notable, presente en cervezas como las IPAs.'),
    ('Alto_60_IBU', 'Alto', 'Amargor fuerte, característico de Imperial IPAs y algunas Stouts.');

 -- Insertar datos en la tabla Comuna
INSERT INTO Comuna (id, nombre, id_region) VALUES
    ('Arica', 'Arica', 'AP'),
    ('Camarones', 'Camarones', 'AP'),
    ('Putre', 'Putre', 'AP'),
    ('GeneralLagos', 'General Lagos', 'AP'),
    ('Iquique', 'Iquique', 'TA'),
    ('AltoHospicio', 'Alto Hospicio', 'TA'),
    ('PozoAlmonte', 'Pozo Almonte', 'TA'),
    ('Huara', 'Huara', 'TA'),
    ('Camina', 'Camiña', 'TA'),
    ('Colchane', 'Colchane', 'TA'),
    ('Pica', 'Pica', 'TA'),
    ('Antofagasta', 'Antofagasta', 'AN'),
    ('Mejillones', 'Mejillones', 'AN'),
    ('SierraGorda', 'Sierra Gorda', 'AN'),
    ('Taltal', 'Taltal', 'AN'),
    ('Calama', 'Calama', 'AN'),
    ('SanPedroDeAtacama', 'San Pedro de Atacama', 'AN'),
    ('MariaElena', 'María Elena', 'AN'),
    ('Tocopilla', 'Tocopilla', 'AN'),
    ('Ollague', 'Ollague', 'AN'),
    ('Copiapo', 'Copiapó', 'AT'),
    ('Caldera', 'Caldera', 'AT'),
    ('TierraAmarilla', 'Tierra Amarilla', 'AT'),
    ('Chanaral', 'Chañaral', 'AT'),
    ('DiegoDeAlmagro', 'Diego de Almagro', 'AT'),
    ('Vallenar', 'Vallenar', 'AT'),
    ('AltoDelCarmen', 'Alto del Carmen', 'AT'),
    ('Freirina', 'Freirina', 'AT'),
    ('Huasco', 'Huasco', 'AT'),
    ('LaSerena', 'La Serena', 'CO'),
    ('Coquimbo', 'Coquimbo', 'CO'),
    ('Andacollo', 'Andacollo', 'CO'),
    ('LaHiguera', 'La Higuera', 'CO'),
    ('Paiguano', 'Paiguano', 'CO'),
    ('Vicuna', 'Vicuña', 'CO'),
    ('Illapel', 'Illapel', 'CO'),
    ('Canela', 'Canela', 'CO'),
    ('LosVilos', 'Los Vilos', 'CO'),
    ('Salamanca', 'Salamanca', 'CO'),
    ('Ovalle', 'Ovalle', 'CO'),
    ('Combarbala', 'Combarbalá', 'CO'),
    ('MontePatria', 'Monte Patria', 'CO'),
    ('Punitaqui', 'Punitaqui', 'CO'),
    ('RioHurtado', 'Río Hurtado', 'CO'),
    ('Valparaiso', 'Valparaíso', 'VA'),
    ('Casablanca', 'Casablanca', 'VA'),
    ('Concon', 'Concón', 'VA'),
    ('JuanFernandez', 'Juan Fernández', 'VA'),
    ('Puchuncavi', 'Puchuncaví', 'VA'),
    ('Quilpue', 'Quilpué', 'VA'),
    ('Quintero', 'Quintero', 'VA'),
    ('VillaAlemana', 'Villa Alemana', 'VA'),
    ('VinaDelMar', 'Viña del Mar', 'VA'),
    ('IslaDePascua', 'Isla de Pascua', 'VA'),
    ('LosAndes', 'Los Andes', 'VA'),
    ('CalleLarga', 'Calle Larga', 'VA'),
    ('Rinconada', 'Rinconada', 'VA'),
    ('SanEsteban', 'San Esteban', 'VA'),
    ('LaLigua', 'La Ligua', 'VA'),
    ('Cabildo', 'Cabildo', 'VA'),
    ('Papudo', 'Papudo', 'VA'),
    ('Petorca', 'Petorca', 'VA'),
    ('Zapallar', 'Zapallar', 'VA'),
    ('Quillota', 'Quillota', 'VA'),
    ('Calera', 'Calera', 'VA'),
    ('Hijuelas', 'Hijuelas', 'VA'),
    ('LaCruz', 'La Cruz', 'VA'),
    ('Limache', 'Limache', 'VA'),
    ('Nogales', 'Nogales', 'VA'),
    ('Olmue', 'Olmué', 'VA'),
    ('SanAntonio', 'San Antonio', 'VA'),
    ('Algarrobo', 'Algarrobo', 'VA'),
    ('Cartagena', 'Cartagena', 'VA'),
    ('ElQuisco', 'El Quisco', 'VA'),
    ('ElTabo', 'El Tabo', 'VA'),
    ('SantoDomingo', 'Santo Domingo', 'VA'),
    ('SanFelipe', 'San Felipe', 'VA'),
    ('Catemu', 'Catemu', 'VA'),
    ('Llaillay', 'Llaillay', 'VA'),
    ('Panquehue', 'Panquehue', 'VA'),
    ('Putaendo', 'Putaendo', 'VA'),
    ('SantaMaria', 'Santa María', 'VA'),
    ('Santiago', 'Santiago', 'RM'),
    ('Cerrillos', 'Cerrillos', 'RM'),
    ('CerroNavia', 'Cerro Navia', 'RM'),
    ('Conchali', 'Conchalí', 'RM'),
    ('ElBosque', 'El Bosque', 'RM'),
    ('EstacionCentral', 'Estación Central', 'RM'),
    ('Huechuraba', 'Huechuraba', 'RM'),
    ('Independencia', 'Independencia', 'RM'),
    ('LaCisterna', 'La Cisterna', 'RM'),
    ('LaFlorida', 'La Florida', 'RM'),
    ('LaGranja', 'La Granja', 'RM'),
    ('LaPintana', 'La Pintana', 'RM'),
    ('LaReina', 'La Reina', 'RM'),
    ('LasCondes', 'Las Condes', 'RM'),
    ('LoBarnechea', 'Lo Barnechea', 'RM'),
    ('LoEspejo', 'Lo Espejo', 'RM'),
    ('LoPrado', 'Lo Prado', 'RM'),
    ('Macul', 'Macul', 'RM'),
    ('Maipu', 'Maipú', 'RM'),
    ('Nunoa', 'Ñuñoa', 'RM'),
    ('PedroAguirreCerda', 'Pedro Aguirre Cerda', 'RM'),
    ('Penalolen', 'Peñalolén', 'RM'),
    ('Providencia', 'Providencia', 'RM'),
    ('Pudahuel', 'Pudahuel', 'RM'),
    ('Quilicura', 'Quilicura', 'RM'),
    ('QuintaNormal', 'Quinta Normal', 'RM'),
    ('Recoleta', 'Recoleta', 'RM'),
    ('Renca', 'Renca', 'RM'),
    ('SanJoaquin', 'San Joaquín', 'RM'),
    ('SanMiguel', 'San Miguel', 'RM'),
    ('SanRamon', 'San Ramón', 'RM'),
    ('Vitacura', 'Vitacura', 'RM'),
    ('PuenteAlto', 'Puente Alto', 'RM'),
    ('Pirque', 'Pirque', 'RM'),
    ('SanJoseDeMaipo', 'San José de Maipo', 'RM'),
    ('Colina', 'Colina', 'RM'),
    ('Lampa', 'Lampa', 'RM'),
    ('Tiltil', 'Tiltil', 'RM'),
    ('SanBernardo', 'San Bernardo', 'RM'),
    ('Buin', 'Buin', 'RM'),
    ('CaleraDeTango', 'Calera de Tango', 'RM'),
    ('Paine', 'Paine', 'RM'),
    ('Melipilla', 'Melipilla', 'RM'),
    ('Alhue', 'Alhué', 'RM'),
    ('Curacavi', 'Curacaví', 'RM'),
    ('MariaPinto', 'María Pinto', 'RM'),
    ('SanPedro', 'San Pedro', 'RM'),
    ('Talagante', 'Talagante', 'RM'),
    ('ElMonte', 'El Monte', 'RM'),
    ('IslaDeMaipo', 'Isla de Maipo', 'RM'),
    ('PadreHurtado', 'Padre Hurtado', 'RM'),
    ('Penaflor', 'Peñaflor', 'RM'),
    ('Rancagua', 'Rancagua', 'OH'),
    ('Codegua', 'Codegua', 'OH'),
    ('Coinco', 'Coinco', 'OH'),
    ('Coltauco', 'Coltauco', 'OH'),
    ('Donihue', 'Doñihue', 'OH'),
    ('Graneros', 'Graneros', 'OH'),
    ('LasCabras', 'Las Cabras', 'OH'),
    ('Machali', 'Machalí', 'OH'),
    ('Malloa', 'Malloa', 'OH'),
    ('Mostazal', 'Mostazal', 'OH'),
    ('Olivar', 'Olivar', 'OH'),
    ('Peumo', 'Peumo', 'OH'),
    ('Pichidegua', 'Pichidegua', 'OH'),
    ('QuintaDeTilcoco', 'Quinta de Tilcoco', 'OH'),
    ('Rengo', 'Rengo', 'OH'),
    ('Requinoa', 'Requínoa', 'OH'),
    ('SanVicente', 'San Vicente', 'OH'),
    ('Pichilemu', 'Pichilemu', 'OH'),
    ('LaEstrella', 'La Estrella', 'OH'),
    ('Litueche', 'Litueche', 'OH'),
    ('Marchihue', 'Marchihue', 'OH'),
    ('Navidad', 'Navidad', 'OH'),
    ('Paredones', 'Paredones', 'OH'),
    ('SanFernando', 'San Fernando', 'OH'),
    ('Chepica', 'Chépica', 'OH'),
    ('Chimbarongo', 'Chimbarongo', 'OH'),
    ('Lolol', 'Lolol', 'OH'),
    ('Nancagua', 'Nancagua', 'OH'),
    ('Palmilla', 'Palmilla', 'OH'),
    ('Peralillo', 'Peralillo', 'OH'),
    ('Placilla', 'Placilla', 'OH'),
    ('Pumanque', 'Pumanque', 'OH'),
    ('SantaCruz', 'Santa Cruz', 'OH'),
    ('Talca', 'Talca', 'MA'),
    ('Constitucion', 'Constitución', 'MA'),
    ('Curepto', 'Curepto', 'MA'),
    ('Empedrado', 'Empedrado', 'MA'),
    ('Maule', 'Maule', 'MA'),
    ('Pelarco', 'Pelarco', 'MA'),
    ('Pencahue', 'Pencahue', 'MA'),
    ('RioClaro', 'Río Claro', 'MA'),
    ('SanClemente', 'San Clemente', 'MA'),
    ('SanRafael', 'San Rafael', 'MA'),
    ('Cauquenes', 'Cauquenes', 'MA'),
    ('Chanco', 'Chanco', 'MA'),
    ('Pelluhue', 'Pelluhue', 'MA'),
    ('Curico', 'Curicó', 'MA'),
    ('Hualane', 'Hualañé', 'MA'),
    ('Licanten', 'Licantén', 'MA'),
    ('Molina', 'Molina', 'MA'),
    ('Rauco', 'Rauco', 'MA'),
    ('Romeral', 'Romeral', 'MA'),
    ('SagradaFamilia', 'Sagrada Familia', 'MA'),
    ('Teno', 'Teno', 'MA'),
    ('Vichuquen', 'Vichuquén', 'MA'),
    ('Linares', 'Linares', 'MA'),
    ('Colbun', 'Colbún', 'MA'),
    ('Longavi', 'Longaví', 'MA'),
    ('Parral', 'Parral', 'MA'),
    ('Retiro', 'Retiro', 'MA'),
    ('SanJavier', 'San Javier', 'MA'),
    ('VillaAlegre', 'Villa Alegre', 'MA'),
    ('YerbasBuenas', 'Yerbas Buenas', 'MA'),
    ('Chillan', 'Chillán', 'NB'),
    ('Bulnes', 'Bulnes', 'NB'),
    ('ChillanViejo', 'Chillán Viejo', 'NB'),
    ('ElCarmen', 'El Carmen', 'NB'),
    ('Pemuco', 'Pemuco', 'NB'),
    ('Pinto', 'Pinto', 'NB'),
    ('Quillon', 'Quillón', 'NB'),
    ('SanIgnacio', 'San Ignacio', 'NB'),
    ('Yungay', 'Yungay', 'NB'),
    ('Quirihue', 'Quirihue', 'NB'),
    ('Cobquecura', 'Cobquecura', 'NB'),
    ('Coelemu', 'Coelemu', 'NB'),
    ('Ninhue', 'Ninhue', 'NB'),
    ('Portezuelo', 'Portezuelo', 'NB'),
    ('Ranquil', 'Ránquil', 'NB'),
    ('Treguaco', 'Treguaco', 'NB'),
    ('SanCarlos', 'San Carlos', 'NB'),
    ('Coihueco', 'Coihueco', 'NB'),
    ('Niquen', 'Ñiquén', 'NB'),
    ('SanFabian', 'San Fabián', 'NB'),
    ('SanNicolas', 'San Nicolás', 'NB'),
    ('Concepcion', 'Concepción', 'BI'),
    ('Coronel', 'Coronel', 'BI'),
    ('Chiguayante', 'Chiguayante', 'BI'),
    ('Florida', 'Florida', 'BI'),
    ('Hualqui', 'Hualqui', 'BI'),
    ('Lota', 'Lota', 'BI'),
    ('Penco', 'Penco', 'BI'),
    ('SanPedroDeLaPaz', 'San Pedro de la Paz', 'BI'),
    ('SantaJuana', 'Santa Juana', 'BI'),
    ('Talcahuano', 'Talcahuano', 'BI'),
    ('Tome', 'Tomé', 'BI'),
    ('Hualpen', 'Hualpén', 'BI'),
    ('Lebu', 'Lebu', 'BI'),
    ('Arauco', 'Arauco', 'BI'),
    ('Canete', 'Cañete', 'BI'),
    ('Contulmo', 'Contulmo', 'BI'),
    ('Curanilahue', 'Curanilahue', 'BI'),
    ('LosAlamos', 'Los Álamos', 'BI'),
    ('Tirua', 'Tirúa', 'BI'),
    ('LosAngeles', 'Los Ángeles', 'BI'),
    ('Antuco', 'Antuco', 'BI'),
    ('Cabrero', 'Cabrero', 'BI'),
    ('Laja', 'Laja', 'BI'),
    ('Mulchen', 'Mulchén', 'BI'),
    ('Nacimiento', 'Nacimiento', 'BI'),
    ('Negrete', 'Negrete', 'BI'),
    ('Quilaco', 'Quilaco', 'BI'),
    ('Quilleco', 'Quilleco', 'BI'),
    ('SanRosendo', 'San Rosendo', 'BI'),
    ('SantaBarbara', 'Santa Bárbara', 'BI'),
    ('Tucapel', 'Tucapel', 'BI'),
    ('Yumbel', 'Yumbel', 'BI'),
    ('AltoBiobio', 'Alto Biobío', 'BI'),
    ('Temuco', 'Temuco', 'AR'),
    ('Carahue', 'Carahue', 'AR'),
    ('Cunco', 'Cunco', 'AR'),
    ('Curarrehué', 'Curarrehue', 'AR'),
    ('Freire', 'Freire', 'AR'),
    ('Galvarino', 'Galvarino', 'AR'),
    ('Gorbea', 'Gorbea', 'AR'),
    ('Lautaro', 'Lautaro', 'AR'),
    ('Loncoche', 'Loncoche', 'AR'),
    ('Melipeuco', 'Melipeuco', 'AR'),
    ('NuevaImperial', 'Nueva Imperial', 'AR'),
    ('PadreLasCasas', 'Padre Las Casas', 'AR'),
    ('Perquenco', 'Perquenco', 'AR'),
    ('Pitrufquen', 'Pitrufquén', 'AR'),
    ('Pucon', 'Pucón', 'AR'),
    ('Saavedra', 'Saavedra', 'AR'),
    ('TeodoroSchmidt', 'Teodoro Schmidt', 'AR'),
    ('Tolten', 'Toltén', 'AR'),
    ('Vilcun', 'Vilcún', 'AR'),
    ('Villarrica', 'Villarrica', 'AR'),
    ('Cholchol', 'Cholchol', 'AR'),
    ('Angol', 'Angol', 'AR'),
    ('Collipulli', 'Collipulli', 'AR'),
    ('Curacautin', 'Curacautín', 'AR'),
    ('Ercilla', 'Ercilla', 'AR'),
    ('Lonquimay', 'Lonquimay', 'AR'),
    ('LosSauces', 'Los Sauces', 'AR'),
    ('Lumaco', 'Lumaco', 'AR'),
    ('Puren', 'Purén', 'AR'),
    ('Renaico', 'Renaico', 'AR'),
    ('Traiguen', 'Traiguén', 'AR'),
    ('Victoria', 'Victoria', 'AR'),
    ('Valdivia', 'Valdivia', 'LR'),
    ('Corral', 'Corral', 'LR'),
    ('Futrono', 'Futrono', 'LR'),
    ('LaUnion', 'La Unión', 'LR'),
    ('LagoRanco', 'Lago Ranco', 'LR'),
    ('Lanco', 'Lanco', 'LR'),
    ('LosLagos', 'Los Lagos', 'LR'),
    ('Mafil', 'Máfil', 'LR'),
    ('Mariquina', 'Mariquina', 'LR'),
    ('Paillaco', 'Paillaco', 'LR'),
    ('Panguipulli', 'Panguipulli', 'LR'),
    ('RioBueno', 'Río Bueno', 'LR'),
    ('PuertoMontt', 'Puerto Montt', 'LL'),
    ('Calbuco', 'Calbuco', 'LL'),
    ('Cochamo', 'Cochamó', 'LL'),
    ('Fresia', 'Fresia', 'LL'),
    ('Frutillar', 'Frutillar', 'LL'),
    ('LosMuermos', 'Los Muermos', 'LL'),
    ('Llanquihue', 'Llanquihue', 'LL'),
    ('Maullin', 'Maullín', 'LL'),
    ('PuertoVaras', 'Puerto Varas', 'LL'),
    ('Castro', 'Castro', 'LL'),
    ('Ancud', 'Ancud', 'LL'),
    ('Chonchi', 'Chonchi', 'LL'),
    ('CuracoDeVelez', 'Curaco de Vélez', 'LL'),
    ('Dalcahue', 'Dalcahue', 'LL'),
    ('Puqueldon', 'Puqueldón', 'LL'),
    ('Queilen', 'Queilén', 'LL'),
    ('Quellon', 'Quellón', 'LL'),
    ('Quemchi', 'Quemchi', 'LL'),
    ('Quinchao', 'Quinchao', 'LL'),
    ('Osorno', 'Osorno', 'LL'),
    ('PuertoOctay', 'Puerto Octay', 'LL'),
    ('Purranque', 'Purranque', 'LL'),
    ('Puyehue', 'Puyehue', 'LL'),
    ('RioNegro', 'Río Negro', 'LL'),
    ('SanJuanDeLaCosta', 'San Juan de la Costa', 'LL'),
    ('SanPablo', 'San Pablo', 'LL'),
    ('Chaiten', 'Chaitén', 'LL'),
    ('Futaleufu', 'Futaleufú', 'LL'),
    ('Hualaihue', 'Hualaihué', 'LL'),
    ('Palena', 'Palena', 'LL'),
    ('Coyhaique', 'Coyhaique', 'AI'),
    ('LagoVerde', 'Lago Verde', 'AI'),
    ('Aisen', 'Aisén', 'AI'),
    ('Cisnes', 'Cisnes', 'AI'),
    ('Guaitecas', 'Guaitecas', 'AI'),
    ('Cochrane', 'Cochrane', 'AI'),
    ('VillaOhiggins', "Villa O'Higgins", 'AI'),
    ('Tortel', 'Tortel', 'AI'),
    ('ChileChico', 'Chile Chico', 'AI'),
    ('RioIbanez', 'Río Ibáñez', 'AI'),
    ('PuntaArenas', 'Punta Arenas', 'MG'),
    ('LagunaBlanca', 'Laguna Blanca', 'MG'),
    ('RioVerde', 'Río Verde', 'MG'),
    ('SanGregorio', 'San Gregorio', 'MG'),
    ('CaboDeHornos', 'Cabo de Hornos', 'MG'),
    ('Antartica', 'Antártica', 'MG'),
    ('Porvenir', 'Porvenir', 'MG'),
    ('Primavera', 'Primavera', 'MG'),
    ('Timaukel', 'Timaukel', 'MG'),
    ('Natales', 'Natales', 'MG'),
    ('TorresDelPaine', 'Torres del Paine', 'MG');

-- Insertar datos en la tabla Estado    
INSERT INTO Estado_Pedido (descripcion) VALUES
("Aceptado"),
("Creado"),
("Entregado"),
("Enviado"),
("Pagado");

-- Insertar datos en la tabla Formato
INSERT INTO Formato (id, descripcion) VALUES
('Lata', 'Envase de aluminio que contiene generalmente 355 ml de bebida. Ideal para el consumo individual y fácil de transportar.'),
('Botella', 'Envase de vidrio o plástico que generalmente contiene 330 ml o 500 ml de bebida. A menudo utilizado para cervezas artesanales y premium.'),
('Barril', 'Contenedor grande, usualmente de acero inoxidable, utilizado para almacenar y servir cerveza en establecimientos. Capacidad variable, comúnmente de 20 litros o más.'),
('Growler', 'Botella de vidrio, generalmente de 1.89 litros, utilizada para transportar cerveza de barril. Permite disfrutar de cerveza fresca en casa.'),
('SixPack', 'Paquete que contiene seis latas o botellas de cerveza. Práctico para llevar y compartir en reuniones y eventos.');

-- Insertar datos en la tabla tipo envio
INSERT INTO Tipo_Envio (nombre, descripcion) VALUES 
('Express', 'Servicio de envío rápido que garantiza la entrega en menos de 24 horas. Ideal para paquetes urgentes.'),
('Estándar', 'Servicio de envío regular que suele tardar entre 3 a 5 días hábiles. Adecuado para envíos no urgentes.'),
('Prioritario', 'Servicio de envío que ofrece un tiempo de entrega más rápido que el estándar, normalmente en 1 a 3 días hábiles.'),
('Internacional', 'Servicio de envío para paquetes que cruzan fronteras, con tiempos de entrega que varían según el destino y el servicio elegido.');

-- Insertar datos en la tabla Suscripcion
INSERT INTO Suscripcion (tipo_suscripcion, nombre, descripcion, precio, descuento, tipo_envio) VALUES
('BRONZE', 'Bronce Básico', 'Acceso a características estándar y descuentos limitados', 10000, 5, 2),
('SILVER', 'Plata Premium', 'Beneficios adicionales, como descuentos exclusivos y acceso anticipado a productos', 20000, 10, 1),
('GOLDEN', 'Oro Dorado', 'Acceso a ofertas especiales, envíos gratuitos y contenido exclusivo', 30000, 15, 1),
('PLATINUM', 'Platino Exclusivo', 'Beneficios premium, soporte personalizado y acceso a eventos exclusivos', 50000, 20,4),
('ELITE', 'VIP Élite', 'Máximo nivel de suscripción con todos los beneficios, incluyendo experiencias personalizadas y prioridad en todo', 80000, 25,3),
('SIN_SUSCRIPCION', 'Sin Suscripción', 'Acceso limitado a características y sin descuentos', 0, 0, 2);

-- Insertar datos en la tabla Categoria
INSERT INTO Tipo_Cerveza (tipo, nombre, descripcion) VALUES
('PaleAle', 'Pale Ale', 'Sabor balanceado con notas afrutadas y lupuladas.'),
('AmericanPaleAle', 'American Pale Ale', 'Variante americana de la Pale Ale, más lupulada.'),
('IndiaPaleAle', 'India Pale Ale', 'Cerveza fuertemente lupulada, con mayor amargor.'),
('AmberAle', 'Amber Ale', 'Maltosa y caramelizada, con color ámbar.'),
('BrownAle', 'Brown Ale', 'Cerveza marrón con sabores a nuez y chocolate.'),
('Porter', 'Porter', 'Oscura con sabores a chocolate y café.'),
('Stout', 'Stout', 'Similar a la Porter, más intensa con malta tostada.'),
('DryStout', 'Dry Stout', 'Stout seca, con menos dulzura y cuerpo ligero.'),
('ImperialStout', 'Imperial Stout', 'Stout más fuerte y robusta, alto contenido alcohólico.'),
('Pilsner', 'Pilsner', 'Ligera y refrescante con amargor moderado.'),
('AmberLager', 'Amber Lager', 'Lager más maltosa y caramelizada.'),
('DarkLager', 'Dark Lager', 'Lager oscura con sabores tostados.'),
('Bock', 'Bock', 'Lager fuerte, dulce y maltosa, de color oscuro.'),
('Hefeweizen', 'Hefeweizen', 'Turbia con sabores afrutados y especiados.'),
('Witbier', 'Witbier', 'Cerveza de trigo belga con cáscara de naranja y cilantro.'),
('BerlinerWeisse', 'Berliner Weisse', 'Ácida y ligera, frecuentemente con jarabes de frutas.'),
('Lambic', 'Lambic', 'Cerveza belga de fermentación espontánea, a menudo con frutas.'),
('Gueuze', 'Gueuze', 'Mezcla de Lambics de diferentes edades, ácida y efervescente.'),
('Kriek', 'Kriek', 'Lambic fermentada con cerezas, sabor afrutado y ácido.'),
('Saison', 'Saison', 'Seca, especiada y refrescante con notas frutales.'),
('PumpkinAle', 'Pumpkin Ale', 'Cerveza de temporada con calabaza y especias.'),
('ChristmasAle', 'Christmas Ale', 'Cerveza especiada, típica para las fiestas.'),
('Gose', 'Gose', 'Cerveza ácida y salada, con sabores cítricos y especias.'),
('FlandersRedAle', 'Flanders Red Ale', 'Cerveza belga ácida, agria y afrutada.'),
('Barleywine', 'Barleywine', 'Cerveza fuerte, maltosa y envejecida en barriles.'),
('RyeBeer', 'Rye Beer', 'Cerveza con centeno, sabor especiado y seco.');

INSERT INTO Proveedor (nombre, id_comuna, contacto, telefono, correo_electronico) VALUES
('Proveedores del Sur S.A.', 'Talcahuano', 'Juan Pérez', '987654321', 'juan.perez@proveedores.com'),
('Distribuciones Norte Ltda.', 'Vicuna', 'Ana Gómez', '912345678', 'ana.gomez@distribuciones.com');


INSERT INTO Cerveza (nombre, marca, id_tipo, stock, descripcion, precio, id_proveedor, id_amargor, graduacion, id_formato, is_active) VALUES
('Cerveza Rubia', 'Cerveza del Valle', 1, 150, 'Una cerveza ligera y refrescante.', 1500, 1, 'Notable_40_60_IBU', 4.5, 'Barril', true),
('Cerveza Negra', 'Cerveza del Norte', 2, 100, 'Cerveza oscura con notas de café y chocolate.', 1800, 1, 'Alto_60_IBU', 5.0, 'Botella', true),
('Cerveza IPA', 'Cerveza Artesanal', 2, 80, 'Cerveza con un fuerte sabor a lúpulo y cítricos.', 2000, 1, 'Alto_60_IBU', 6.5, 'Lata', true),
('Cerveza Amber', 'Cerveza del Sur', 4, 120, 'Cerveza ámbar con un sabor a malta tostada.', 1700, 1, 'Moderado_20_40_IBU', 5.2, 'Botella', true),
('Cerveza Stout', 'Cerveza Oscura', 2, 90, 'Una cerveza rica y cremosa, perfecta para el invierno.', 2200, 1, 'Moderado_20_40_IBU', 7.0, 'Botella', true),
('Cerveza Wheat', 'Cerveza Blanca', 5, 110, 'Cerveza de trigo, suave y afrutada.', 1600, 1, 'Moderado_20_40_IBU', 4.8, 'Lata', true),
('Cerveza Pale Ale', 'Cerveza Clásica', 2, 95, 'Cerveza con un equilibrio perfecto entre malta y lúpulo.', 1900, 1, 'Moderado_20_40_IBU', 5.5, 'Botella', true),
('Cerveza Radler', 'Cerveza Verano', 1, 130, 'Cerveza mezclada con limón, ideal para el verano.', 1400, 1, 'Notable_40_60_IBU', 3.5, 'Lata', true),
('Cerveza Bock', 'Cerveza Fuerte', 8, 70, 'Cerveza fuerte con un sabor intenso y profundo.', 2300, 1, 'Notable_40_60_IBU', 6.8, 'Botella', true),
('Cerveza Cerveza del Mes', 'Cerveza Especial', 9, 60, 'Cerveza de edición limitada, un verdadero deleite.', 2500, 1, 'Moderado_20_40_IBU', 6.0, 'Barril', true);

INSERT INTO Usuario (rut, nombre, apellido, contrasena, edad, tipo_suscripcion) VALUES
('12345678-9', 'Carlos', 'Pérez', 'contraseña1', 28, 'BRONZE'),
('98765432-1', 'Laura', 'Gómez', 'contraseña2', 35, 'SILVER'),
('45678912-3', 'Martín', 'López', 'contraseña3', 22, 'GOLDEN'),
('32165498-7', 'Sofía', 'Martínez', 'contraseña4', 30, 'PLATINUM'),
('14725836-9', 'Pedro', 'Fernández', 'contraseña5', 40, 'ELITE'),
('96385274-1', 'Ana', 'Ramírez', 'contraseña6', 26, 'BRONZE'),
('25896314-5', 'Jorge', 'Santiago', 'contraseña7', 29, 'SILVER'),
('78945612-3', 'Claudia', 'Rojas', 'contraseña8', 34, 'GOLDEN'),
('15975348-6', 'Luis', 'Torres', 'contraseña9', 45, 'PLATINUM'),
('75395124-0', 'Elena', 'Vásquez', 'contraseña10', 38, 'ELITE');

INSERT INTO Datos_Envio (calle, numero, departamento, id_comuna, codigo_postal, rut_usuario, telefono, correo_electronico, estado) VALUES
('Av. Libertador', '123', 'A', 'Aisen', '1234567', '12345678-9', '987654321', 'carlos.perez@example.com','activa'),
('Calle Los Cerezos', '456', 'B', 'Angol', '2345678', '98765432-1', '912345678', 'laura.gomez@example.com','activa'),
('Calle 5 de Abril', '789', '', 'Curico', '3456789', '45678912-3', '987123456', 'martin.lopez@example.com','activa'),
('Calle San Martín', '321', 'C', 'Dalcahue', '4567890', '32165498-7', '998877665', 'sofia.martinez@example.com','activa'),
('Calle del Sol', '654', 'D', 'LaReina', '5678901', '14725836-9', '945678123', 'pedro.fernandez@example.com','activa'),
('Calle del Río', '987', '', 'LaReina', '6789012', '96385274-1', '951753852', 'ana.ramirez@example.com','activa'),
('Calle de la Paz', '159', 'E', 'EstacionCentral', '7890123', '25896314-5', '789456123', 'jorge.santiago@example.com','activa'),
('Calle de los Olmos', '753', '', 'Curico', '8901234', '78945612-3', '123456789', 'claudia.rojas@example.com','activa'),
('Calle del Viento', '258', 'F', 'EstacionCentral', '9012345', '15975348-6', '456123789', 'luis.torres@example.com','activa'),
('Calle de la Luna', '147', '', 'Providencia', '0123456', '75395124-0', '321987654', 'elena.vasquez@example.com','activa');

INSERT INTO Pedido (estado, fecha_ingreso, fecha_entrega, rut_comprador, direccion_entrega) VALUES
('Aceptado', '2024-10-01', '2024-10-05', '12345678-9', 1),
('Enviado', '2024-10-02', '2024-10-06', '98765432-1', 2),
('Entregado', '2024-10-03', '2024-10-07', '45678912-3', 3),
('Creado', '2024-10-04', '2024-10-08', '32165498-7', 4),
('Pagado', '2024-10-05', '2024-10-09', '14725836-9', 5),
('Enviado', '2024-10-06', '2024-10-10', '96385274-1', 6),
('Entregado', '2024-10-07', '2024-10-11', '25896314-5', 7),
('Creado', '2024-10-08', '2024-10-12', '78945612-3', 8),
('Aceptado', '2024-10-09', '2024-10-13', '15975348-6', 9),
('Enviado', '2024-10-10', '2024-10-14', '75395124-0', 10);

INSERT INTO Pedido_Cerveza (id_pedido, id_cerveza, cantidad) VALUES
(1,3,5),
(1,4,3),
(2,7,1),
(5,8,4),
(6,3,9),
(7,4,3),
(8,3,5),
(3,9,5),
(4,8,15);

INSERT INTO Documento (tipo, comentario) VALUES
('boleta', 'texto1'),
('boleta', 'texto2'),
('boleta', 'texto3'),
('boleta', 'texto4'),
('boleta', 'texto5'),
('boleta', 'texto6'),
('boleta', 'texto7'),
('boleta', 'texto8');

INSERT INTO Carrito(total_a_pagar) VALUES
(12000),
(20500),
(17000),
(14000),
(32000),
(52000),
(18000),
(35000);
