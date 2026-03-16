# 🚀 Planity - Sistema de Gestión de Proyectos

Planity es una aplicación web para la gestión ágil de proyectos, tableros y equipos. Este proyecto nace como Trabajo de Fin de Grado (TFG) y está construido bajo una arquitectura moderna separando el cliente (Frontend) del servidor (Backend API REST).

## 🛠️ Stack Tecnológico

**Frontend (Cliente):**
* React 18
* TypeScript
* Vite (Bundler)
* Tailwind CSS 3 (Estilos y Diseño UI)

**Backend (API REST):**
* Java (17 / 21)
* Spring Boot 3.x
* Spring Data JPA (Hibernate)
* Maven

**Base de Datos:**
* MySQL (Motor relacional)

---

## 🏗️ Arquitectura del Sistema

El proyecto ha sido migrado de una arquitectura monolítica (Thymeleaf) a una arquitectura cliente-servidor para mejorar la escalabilidad y la experiencia de usuario:
* **Frontend:** Corre en el puerto `http://localhost:5173/` y consume datos en formato JSON.
* **Backend:** Corre en el puerto `http://localhost:8080/` y expone los endpoints de la API.

---

## 📝 Bitácora de Desarrollo (Paso a Paso)

### Fase 1: Diseño y Base de Datos ✅
1. Creación del script SQL relacional (`planity_db`).
2. Definición de tablas clave: `USUARIO`, `PROYECTO`, `USUARIO_PROYECTO` (para manejar invitaciones y roles), `BLOQUE`, `TAREA` y `SUBTAREA`.
3. Uso de `BIGINT` para optimizar las claves primarias (Primary Keys) y foráneas (Foreign Keys) en compatibilidad con Java `Long`.

### Fase 2: Configuración del Frontend ✅
1. Inicialización del proyecto con **Vite** usando el template de React + TypeScript.
2. Instalación y configuración de **Tailwind CSS** para el diseño de interfaces limpias (Glassmorphism, Tailwind UI).
3. Limpieza de archivos base y creación de la pantalla de bienvenida de prueba.

### Fase 3: Configuración del Backend ✅
1. Generación del proyecto base de **Spring Boot** mediante Spring Initializr / VS Code.
2. Inclusión de dependencias clave: `Spring Web`, `Spring Data JPA` y `MySQL Driver`.
3. Configuración del archivo `application.properties` para enlazar el motor de Java con la base de datos MySQL local.
4. Ajuste de Hibernate (`ddl-auto=update`) para que el ORM respete la estructura de tablas creada manualmente por SQL.
5. Creación de la estructura de paquetes profesional (`Entity`, `Repository`, `Service`, `Controller`, `DTO`).
6. Creación del primer controlador de prueba (`TestController`) para verificar que el servidor Tomcat responde correctamente a las peticiones HTTP.

### Próximos Pasos (To-Do) ⏳
- [ ] Mapear las Entidades Java exactas con las tablas SQL.
- [ ] Crear los Repositorios y la capa de Servicios para la gestión de Usuarios y Proyectos.
- [ ] Desarrollar los Controladores REST para la API.
- [ ] Conectar el Frontend con el Backend mediante peticiones `fetch` o `axios`.

---

## ⚙️ Cómo ejecutar el proyecto en local

1. **Base de datos:** Ejecutar el script SQL proporcionado para montar `planity_db` en MySQL.
2. **Backend:** Abrir la carpeta `backend` en el IDE y ejecutar `BackendApplication.java`.
3. **Frontend:** Abrir la terminal en la carpeta `frontend`, ejecutar `npm install` y luego `npm run dev`.