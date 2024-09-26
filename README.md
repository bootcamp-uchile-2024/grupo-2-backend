
# Proyecto Cervezario Nacional

Cervezario Nacional es una API RESTful desarrollada en NestJS para gestionar la venta de cervezas artesanales. Permite a los usuarios consultar el catálogo de cervezas, realizar pedidos y gestionar información relacionada con la producción y distribución. El objetivo es ofrecer una plataforma eficiente y escalable para los productores y distribuidores de cervezas artesanales en el país.

Este proyecto es parte del Bootcamp y se ha desarrollado utilizando Docker Compose para gestionar los ambientes.

## Contenidos
1. [Requisitos Previos](#requisitos-previos)
2. [Instalación](#instalacion)
3. [Configuración](#configuracion)
4. [Ejecución](#ejecucion)
   - [Desarrollo](#ejecucion-desarrollo)
   - [Producción](#ejecucion-produccion)
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

4. Crea un archivo .env en la raíz del proyecto para las variables de entorno (si es necesario):
   ```bash
   cp .env.example .env
   ```

5. Levanta el contenedor de Docker con los servicios necesarios:
   ```bash
   docker compose up
   ```

## 3. Configuración

1. Se deben completar las siguientes variables de entorno:

    - **PORT**: El puerto en el que se ejecutará la aplicación. Ejemplo: 3000.
    - **APP_NAME**: El nombre de la aplicación. Ejemplo: Cervezario Nacional.
    - **APP_VERSION**: La versión de la aplicación. Ejemplo: 1.0.0.
    - **LOG_LEVEL**: El nivel de registro para la aplicación. Ejemplo: info, debug, etc.
    - **AMBIENTE**: El entorno en el que se ejecuta la aplicación. Ejemplo: desarrollo, producción.

2. Completar el archivo .env en la raíz del proyecto, configurando las siguientes variables de entorno:
    ```bash
    PORT=3000
    APP_NAME=Cervezario Nacional
    APP_VERSION=1.0.0
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
```bash
docker-compose up
```
Esto levantará todos los servicios definidos en tu archivo `docker-compose.yml` y permitirá que trabajes en tu entorno local.

#### 4.2. Ejecución - Producción

Para ejecutar el proyecto en modo producción, primero asegúrate de construir el proyecto:
```bash
docker-compose up --build
```
Este comando construirá la imagen del contenedor si ha habido cambios en el Dockerfile y levantará el servicio en producción. Asegúrate de que las configuraciones necesarias estén adecuadamente definidas en tu archivo .env para el entorno de producción.

## 5. Estructura del Proyecto
La estructura del proyecto sigue un patrón modular, facilitando la organización del código y la escalabilidad. A continuación, se describen las carpetas más importantes y su propósito:

```bash
prod/
│
├── .env.production       # Archivo de variables de entorno para producción que contiene configuraciones específicas como la URL de la base de datos y claves API.
├── Dockerfile            # Instrucciones para construir la imagen del contenedor, definiendo cómo se debe configurar el entorno de la aplicación.
└── docker-compose.yml    # Archivo de configuración para orquestar servicios con Docker Compose, especificando cómo se deben ejecutar los contenedores y sus interacciones.

src/
│
├── app.module.ts         # Módulo raíz de la aplicación, donde se importan y configuran otros módulos, servicios y controladores.
├── main.ts               # Punto de entrada del servidor, que inicializa la aplicación y configura middleware como el manejo de errores y la documentación de Swagger.
├── modules/              # Carpeta que contiene módulos de la aplicación, cada uno encapsulando funcionalidades específicas.
│   └── users/            # Módulo de usuarios que gestiona la lógica relacionada con los usuarios, incluyendo controladores y servicios.
│       ├── users.controller.ts  # Controlador que maneja las solicitudes HTTP relacionadas con usuarios, como crear, leer, actualizar y eliminar usuarios.
│       ├── users.service.ts     # Servicio que contiene la lógica de negocio para gestionar la información de usuarios.
│       └── users.module.ts      # Módulo que agrupa el controlador y el servicio de usuarios, facilitando su inyección de dependencias.
├── common/               # Contiene utilidades y componentes comunes que pueden ser utilizados en toda la aplicación, como interceptores y filtros.
│   ├── common.interceptor.ts     # Interceptor que permite manipular solicitudes y respuestas globalmente, como la adición de encabezados o el manejo de errores.
│   └── common.filter.ts          # Filtro que captura excepciones no controladas y las formatea para ser devueltas como respuesta HTTP.
└── ...
```

## 6. Documentación de la API
Swagger está habilitado en este proyecto. Puedes acceder a la documentación de la API después de iniciar el servidor.

1. Inicia el proyecto:
   ```bash
   docker-compose up 
   ```

2. Accede a Swagger en tu navegador:
   - Dirígete a la siguiente URL: `http://localhost:3000/api` (ajusta el puerto si es necesario según tu configuración).

Esto te llevará a la interfaz de Swagger, donde podrás explorar y probar los diferentes endpoints de tu API. Si necesitas más detalles sobre cómo utilizar Swagger o alguna otra cosa, no dudes en pedirlo.

## 7. Flujo de Trabajo

En este proyecto, seguimos un flujo de trabajo basado en ramas para el desarrollo de nuevas características y corrección de errores. A continuación, se detalla cómo crear nuevas ramas, integrarlas y desplegar a producción.

### Branch Principal
La rama principal de este proyecto es `main`. Esta rama contiene la última versión estable del proyecto y no debe modificarse directamente.

### Creación de Branches para Desarrollo
Cuando se desarrolla una nueva funcionalidad o se corrige un error, es necesario crear una rama específica para ello, derivada de `main`.

#### Nomenclatura de las Ramas
- Ramas para nuevas funcionalidades: Deben comenzar con el prefijo `feature/`.
  - Ejemplo: `feature/autenticacion-usuarios`
  
- Ramas para corrección de errores: Deben comenzar con el prefijo `fix/`.
  - Ejemplo: `fix/error-en-login`

### Integración a Producción
Una vez completados los cambios en tu rama, crea un Pull Request (PR) hacia la rama `main` para revisión. El PR debe contener una descripción clara de los cambios y cualquier instrucción necesaria para probarlos.

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

