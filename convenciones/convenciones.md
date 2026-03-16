# Guía de Estandarización para GitHub: Issues y Commits

Esta guía detalla las normas para mantener la coherencia, profesionalidad y trazabilidad en nuestro proyecto.

---

## 1. Convención para nombrar ISSUES

A diferencia de un commit (que registra algo que ya pasó), una Issue define algo que *va a pasar*. Sin embargo, mantener la estructura `tipo(alcance): descripción` crea una coherencia visual perfecta entre el plan y la ejecución.

### La Estructura Propuesta

```text
[TIPO] (Alcance opcional): Título descriptivo y conciso

```

### A. Los Tipos (Prefixes)

Usad los mismos que en los commits, pero pensados como tareas:

* **`feat` (Feature):** Para una nueva funcionalidad que aporta valor al usuario.
* *Ejemplo:* Crear el componente de la galería, Endpoint de listado de tartas.


* **`fix` (Bugfix):** Para corregir un error o fallo reportado.
* *Ejemplo:* El footer se rompe en pantallas móviles.


* **`refactor`:** Cambios de código que no añaden funcionalidad ni arreglan bugs (limpieza, optimización).
* *Ejemplo:* Reorganizar carpetas de componentes, limpiar código CSS duplicado.


* **`docs`:** Cambios solo en la documentación.
* *Ejemplo:* Actualizar el README, documentar la API con Swagger.


* **`chore` (Tareas rutinarias):** Tareas de configuración, herramientas, librerías que no tocan el código de producción directamente.
* *Ejemplo:* Configurar Tailwind, instalar Axios, configurar la conexión a MySQL.


* **`design`:** Tareas específicas de maquetación o UI/UX visual.

### B. El Alcance (Scope)

Dado nuestro stack (React + Spring), el alcance es vital para identificar la responsabilidad:

* **`front`**: Todo lo relativo a React/Tailwind.
* **`back`**: Todo lo relativo a Spring Boot.
* **`db`**: Cambios en MySQL (schemas, migraciones).
* **`api`**: Definición de contratos o comunicación Axios.

### C. Ejemplos Prácticos

| Tarea | Mal nombre de Issue | Buen nombre de Issue (Normado) |
| --- | --- | --- |
| Crear la barra de navegación | "Hacer el menú" | `feat(front): implementar Navbar responsive con Tailwind` |
| Crear la tabla de productos | "Base de datos productos" | `feat(db): diseñar esquema entidad-relación para Productos` |
| Arreglar error al login | "El login falla" | `fix(back): corregir excepción null pointer en AuthController` |
| Instalar librerías | "Instalar cosas" | `chore(project): inicializar repositorio y dependencias base` |

---

## 2. Convención para COMMITS (Conventional Commits)

Nos basamos en [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) para que el historial sea legible para humanos y máquinas.

### La Estructura Obligatoria

```text
<tipo>[alcance opcional]: <descripción>

[cuerpo opcional]

[pie opcional]

```

### Reglas de Oro para la Descripción (Subject)

1. **Imperativo:** Escribe como si estuvieras dando una orden o completando la frase *"If applied, this commit will..."*.
* ✅ *Bien:* `add feature` (añadir funcionalidad).
* ❌ *Mal:* `added feature` (funcionalidad añadida) o `adding feature`.


2. **Minúsculas:** No empieces con mayúscula (a menos que sea nombre propio).
* ✅ *Bien:* `feat: agregar validación de formulario`


3. **Sin punto final:** No pongas `.` al final de la línea del título.

### Vinculación con Issues (El "Pie opcional")

Si en el commit usas las palabras clave `Closes`, `Fixes` o `Resolves` seguidas del número de la Issue, GitHub cerrará la Issue automáticamente.

**Ejemplo de flujo completo:**

1. Creas la Issue: `#12 feat(front): crear componente de formulario de contacto`
2. Haces el commit:

```text
feat(front): añadir formulario de contacto con validación

Se ha implementado el formulario usando React Hook Form.
Se conecta con el endpoint /api/contact.

Closes #12

```

---

## 3. Issue Templates (Plantillas)

Para facilitar el proceso, configuramos plantillas en:
`Settings > General > Features > Issues > Set up templates`

Archivo: `.github/ISSUE_TEMPLATE/feature_request.md`

```markdown
---
name: Feature Request
about: Sugerir una nueva funcionalidad para la web
title: "[feat/scope]: Título corto"
labels: enhancement
assignees: ''
---

**Descripción de la funcionalidad**
Una descripción clara de qué es la nueva función.

**Criterios de Aceptación**
- [ ] Debe ser responsive
- [ ] Debe guardar en base de datos

```

---

## Resumen Rápido

* **Issues:** `[tipo](scope): Título`
* *Definen el "QUÉ" hay que hacer.*


* **Commits:** `tipo(scope): verbo en imperativo`
* *Definen el "CÓMO" se hizo.*



```

```