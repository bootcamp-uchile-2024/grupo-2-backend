# Proyecto Cervezario Nacional

Cervezario Nacional es una API RESTful desarrollada en NestJS para gestionar la venta de cervezas artesanales. Permite a los usuarios consultar el catálogo de cervezas, realizar pedidos y gestionar información relacionada con la producción y distribución. El objetivo es ofrecer una plataforma eficiente y escalable para los productores y distribuidores de cervezas artesanales en el país.

Este proyecto es parte del Bootcamp y se ha desarrollado utilizando Docker Compose para gestionar los ambientes.

## Contenidos
1. [Requisitos Previos](#requisitos-previos)
2. [Instalación](#instalacion)
3. [Configuración](#configuracion)
4. [Ejecución](#ejecucion)
   4.1 [Desarrollo](#ejecucion-desarrollo)
   4.2 [Producción](#ejecucion-produccion)
5. [Estructura del Proyecto](#estructura-del-proyecto)
6. [Documentación de la API](#documentacion-de-la-api)
7. [Flujo de Trabajo](#flujo-de-trabajo)
8. [Contacto](#contacto)
9. [Contribuir](#contribuir)
10. [Licencia](#licencia)
11. [Otros](#otros)

## 1. Requisitos Previos
Antes de ejecutar el proyecto, asegúrate de tener instalados los siguientes componentes:

- **Node.js**: >= v16.0.0
- **NestJS CLI**: `npm install -g @nestjs/cli`
- **Docker**: Para ejecutar el proyecto en contenedores.
- **Docker Compose**: Para orquestar múltiples contenedores.
- **Workbrench**: para manejar la base de datos (puede ser otro de su preferencia)

Opcionalmente, puedes instalar herramientas adicionales para el desarrollo y pruebas:
- **Swagger**: La documentación API generada se puede acceder tras iniciar el servidor.

## 2. Instalación

Para iniciar el proyecto, sigue estos pasos:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/bootcamp-uchile-2024/grupo-2-backend.git
   ```

2. Entra al directorio del proyecto:
   ```bash
   cd grupo-2-backend
   ```

3. Instala las dependencias necesarias:
   ```bash
   npm install
   ```

## 3. Configuración

1. Variables principales de Entorno a utilizar en archivo .env anteriormente creado

    - **PORT**: El puerto en el que se ejecutará la aplicación. Ejemplo: 3000.
    - **APP_NAME**: El nombre de la aplicación. Ejemplo: Cervezario Nacional.
    - **APP_VERSION**: La versión de la aplicación. Ejemplo: 1.0.0.
    - **LOG_LEVEL**: El nivel de registro para la aplicación. Ejemplo: info, debug, etc.
    - **AMBIENTE**: El entorno en el que se ejecuta la aplicación. Ejemplo: desarrollo, producción.

2. Completar el archivo .env en la raíz del proyecto, configurando las siguientes variables de entorno:
    ```bash
    PORT=3000
    APP_NAME=Cervezario Nacional
    APP_VERSION=2.1.1
    LOG_LEVEL=info
    AMBIENTE=desarrollo
    ```

3. En caso que se ejecute en ambiente productivo, adicionalmente se debe modificar la variable **DATABASE_URL** para conectar con la base de datos correspondiente. Ejemplo:
   ```bash
   DATABASE_URL=postgres://usuario:contraseña@localhost:5432/cervezario_nacional
   ```

## 4. Ejecución

#### 4.1. Ejecución - Desarrollo

Para ejecutar el proyecto en modo desarrollo, usa el siguiente comando:
1. Levanta el contenedor de Docker con los servicios necesarios:
   ```bash
   docker compose up -d
   ```
    Esto levantará todos los servicios definidos en tu archivo `docker-compose.yml` y permitirá que trabajes en tu entorno local. Se utiliza Flyway para la ejecución de los scripts de creación de la base de datos.

2. Dado que el levantamiento se realiza en segundo plano, puedes utilizar el siguiente comando para ver los logs de docker:
   ```bash
   docker logs -f
   ```
    
3. Verifica si los datos estan cargados correctamente en la Base de Datos, en caso que debas cargarlos manualmente debes ejecutar el scrip ubicado en
   ```bash
     grupo-2-backend/db/script-creacion
   ```

#### 4.2. Ejecución - Producción

Para ejecutar el proyecto en modo producción, primero debes cambiar el directorio
   ```bash
     ./grupo-2-backend/prod
  ``` 
luego levanta los servicios utilizando el comando:
   ```bash
   docker compose up -d
   ```
Esto levantará todos los servicios definidos en tu archivo `docker-compose.yml` de producción. Se utiliza Flyway para la ejecución de los scripts de creación de la base de datos y se utiliza una imagen docker precreada de la aplicación desarrollada: kmreyes/cervezarionacional:2.2.2

## 5. Estructura del Proyecto
La estructura del proyecto sigue un patrón modular, facilitando la organización del código y la escalabilidad. A continuación, se describen las carpetas más importantes y su propósito:

```bash
grupo-2-backend/
├── db/                                # Directorio para scripts de creación y datos de desarrollo de la base de datos
│   ├── data_dev/                      # Scripts de datos de desarrollo
│   └── script-creacion/               # Scripts de creación de base de datos
│       ├── creacion-db.sql            # Script SQL para la creación de la base de datos
│       └── datos.sql                  # Script SQL para la inserción de datos iniciales
├── dist/                              # Directorio de salida para el código compilado
├── node_modules/                      # Dependencias del proyecto
├── prod/                              # Archivos de configuración para producción
│   ├── .env                           # Variables de entorno para producción
│   └── docker-compose.yml             # Configuración de Docker Compose para orquestar servicios
└── src/                               # Código fuente de la aplicación
    ├── Amargor/                       # Módulo de amargor (misma estructura que carrito)
    ├── carrito/                       # Módulo del carrito de compras
    │   ├── dto/                       # Definición de DTOs para el carrito
    │   │   ├── getCarrito.dto.ts      # DTO de creación carrito
    │   │   └── updateCarrito.dto.ts   # DTO de actualización carrito
    │   ├── entities/                  # Entidades del carrito
    │   │   └── carrito.entity.ts      # Entidad Carrito
    │   ├── mapper/                    # Mapeadores específicos del carrito
    │   │   └── carrito.mapper.ts      # Mapeo de Carrito
    │   ├── carrito.controller.ts      # Controlador del carrito
    │   ├── carrito.module.ts          # Módulo del carrito
    │   └── carrito.service.ts         # Servicio de Carrito
    ├── cervezas/                      # Módulo de cervezas (misma estructura que carrito)
    ├── common/                        # Componentes comunes para toda la aplicación
    │   ├── common.filter.ts           # Filtro global para manejo de errores
    │   ├── common.interceptor.ts      # Interceptor global para modificar respuestas
    │   └── common.middleware.ts       # Middleware común para la aplicación
    ├── Comunas/                       # Módulo para la gestión de comunas (misma estructura que carrito)
    ├── Datos_Envio/                   # Módulo para la gestión de datos de envío (misma estructura que carrito)
    ├── enum/                          # Definición de enumeraciones
    │   ├── amargor.ts
    │   ├── comunas.ts
    │   ├── estado-pedidos.ts
    │   ├── formato.ts
    │   ├── personajes.ts
    │   ├── preferencias-formulario.ts
    │   ├── regiones.ts
    │   ├── tipo-envio.ts
    │   ├── tipo-suscripcion.ts
    │   └── tipos-cerveza.ts
    ├── equipo/                        # Módulo de gestión de equipo (misma estructura que carrito)
    ├── Formato/                       # Módulo para la gestión de formatos (misma estructura que carrito)
    ├── formularios/                   # Módulo de formularios para capturar datos de usuarios (misma estructura que carrito)
    ├── modelos compartidos/           # Definiciones de modelos compartidos en la aplicación
    ├── pedidos/                       # Módulo para la gestión de pedidos (misma estructura que carrito)
    ├── perfiles/                      # Módulo para la gestión de perfiles de usuarios (misma estructura que carrito)
    ├── Proveedores/                   # Módulo para la gestión de proveedores (misma estructura que carrito)
    ├── Region/                        # Módulo para la gestión de regiones (misma estructura que carrito)
    ├── suscripciones/                 # Módulo para la gestión de suscripciones (misma estructura que carrito)
    ├── tipos_cerveza/                 # Módulo para gestionar tipos de cerveza (misma estructura que carrito)
    ├── tipos-personajes/              # Módulo para gestionar tipos de personajes (misma estructura que carrito)
    ├── usuarios/                      # Módulo de usuarios (misma estructura que carrito)
    ├── app.controller.ts              # Controlador principal de la aplicación
    ├── app.module.ts                  # Módulo raíz de la aplicación
    ├── app.service.ts                 # Servicio principal de la aplicación
    └── main.ts                        # Punto de entrada que inicializa la aplicación y configura middleware
├── test/                              # Directorio de pruebas
├── .env                               # Variables de entorno para el desarrollo
├── .eslintrc.js                       # Configuración de ESLint
├── .gitignore                         # Ignorar archivos en el control de versiones
├── .prettierrc                        # Configuración de Prettier
├── docker-compose.yml                 # Configuración de Docker Compose para desarrollo
├── Dockerfile                         # Instrucciones para construir la imagen del contenedor
├── nest-cli.json                      # Configuración del CLI de Nest
├── package-lock.json                  # Registro de versiones específicas de dependencias
├── package.json                       # Dependencias y scripts del proyecto
├── README.md                          # Documentación del proyecto
├── tsconfig.build.json                # Configuración de TypeScript para la construcción
└── tsconfig.json                      # Configuración principal de TypeScript
```

## 6. Documentación de la API
Swagger está habilitado en este proyecto. Puedes acceder a la documentación de la API después de iniciar el servidor.

1. Inicia el proyecto:
   ```bash
   docker-compose up 
   ```

2. Accede a Swagger en tu navegador:
   ```bash
   http://localhost:3000/api (ajusta el puerto si es necesario según tu configuración).
    ```
    Esto te llevará a la interfaz de Swagger, donde podrás explorar y probar los diferentes endpoints de tu API. 
    Tambien puedes obtener el json en el siguiente link 
    ```bash
   http://localhost:3000/api-json 
    ```

## 7. Flujo de Trabajo Basado en Ramas
Este proyecto sigue un flujo de trabajo basado en ramas para facilitar el desarrollo de nuevas características y la corrección de errores. A continuación, se describe el proceso para crear, integrar, revisar y desplegar cambios de manera eficiente.

### Branch Principal
La rama principal del proyecto es main. Esta rama siempre contiene la última versión estable y aprobada del código y no debe ser modificada directamente. Todos los cambios deben pasar por un proceso de revisión antes de ser integrados en main.

### Creación de Ramas para Desarrollo
Para cada nueva funcionalidad o corrección de errores, se debe crear una rama específica derivada de main. Esto ayuda a mantener el historial de cambios ordenado y facilita la colaboración entre desarrolladores.

### Nomenclatura de las Ramas
Sigue estas convenciones de nombres para identificar fácilmente el propósito de cada rama:

- Ramas de nuevas funcionalidades: Usa el prefijo feature/ seguido de una breve descripción de la funcionalidad.
    - Ejemplo: feature/autenticacion-usuarios
- Ramas de corrección de errores: Usa el prefijo fix/ seguido de una breve descripción del error.
    - Ejemplo: fix/error-en-login
- Ejemplos Adicionales
    - Mejoras: Para mejoras no urgentes o ajustes menores, usa el prefijo enhancement/.
                -Ejemplo: enhancement/mejora-ui-dashboard
    - Refactorización: Para cambios en la estructura del código sin alterar su funcionalidad, usa el prefijo refactor/.
            - Ejemplo: refactor/reorganizacion-carpetas

### Proceso de Desarrollo y Pruebas

- Crear una rama: Al iniciar el trabajo en una funcionalidad o corrección de error, crea una nueva rama siguiendo la nomenclatura descrita.
- Desarrollo y pruebas locales: Realiza los cambios necesarios en la rama y asegúrate de que pasen las pruebas locales.
- Actualización de la rama main: Asegúrate de que tu rama esté sincronizada con la última versión de main para evitar conflictos al momento de la integración.

### Integración y Revisión (Pull Request)
Una vez que hayas completado y probado tus cambios:

- Crear un Pull Request (PR): Abre un PR desde tu rama hacia main. Asegúrate de proporcionar:
    - Una descripción detallada de los cambios realizados.
    - Cualquier instrucción adicional para probar la funcionalidad o corrección.

- Revisión de Código: Otro miembro del equipo revisará el PR. Se espera que:
    - Comenten y sugieran mejoras o ajustes si es necesario.
    - Aprueben el PR cuando esté listo para integrarse en main.
    
- Resolución de Comentarios: Si se solicitan cambios, realiza los ajustes necesarios en tu rama y actualiza el PR.

### Integración a main y Despliegue a Producción
Una vez que el PR ha sido aprobado:

- Integración: La rama puede fusionarse en main. Asegúrate de que el historial de la rama esté limpio y sin conflictos.
- Pruebas Finales: Antes del despliegue, realiza pruebas finales en el entorno de staging o preproducción, si está disponible.
- Despliegue a Producción: Una vez aprobadas las pruebas finales, despliega la última versión de main en el entorno de producción.

### Buenas Prácticas
- Frecuencia de commits: Realiza commits con frecuencia y escribe mensajes descriptivos.
- Mantén el código limpio: Sigue las convenciones de estilo del proyecto y escribe código limpio y fácil de mantener.
- Documentación: Actualiza la documentación (si es necesario) cuando desarrolles nuevas funcionalidades o realices cambios significativos.

## 8. Contacto

Si tienes alguna pregunta o necesitas asistencia, puedes contactarnos a través de:

**Karla Reyes**  
Email: desarrollador@example.com  
GitHub: [kmreyes](https://github.com/kmreyes)

**Andres Fariña**  
Email: desarrollador2@example.com  
GitHub: [afarina1982](https://github.com/afarina1982)

## 9. Contribuir

Si deseas contribuir a este proyecto, por favor sigue los siguientes pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commit (`git commit -m 'Agrega nueva funcionalidad'`).
4. Sube tus cambios (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

## 10. Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

## 11. Otros
Para información adicional o asistencia, consulta la [documentación oficial de NestJS](https://docs.nestjs.com/) o la [documentación de Docker](https://docs.docker.com/).