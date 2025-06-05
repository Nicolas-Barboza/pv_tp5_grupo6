# Trabajo Práctico N° 5 - React: Gestión de Alumnos 🎓
_Programación Visual - Facultad de Ingeniería, UNJu_

## Descripción del Proyecto 📖

Este proyecto es una aplicación web interactiva desarrollada para la cátedra de Programación Visual. El objetivo principal es la gestión de datos de alumnos, permitiendo agregar, editar, eliminar y visualizar la información detallada de cada uno. Se utilizan **React y Vite** como tecnologías fundamentales, junto con **React Router Dom** para la navegación, proporcionando una interfaz de usuario moderna e intuitiva para administrar el listado de alumnos de forma dinámica.

Los usuarios pueden realizar las siguientes operaciones sobre los datos de los alumnos:
* **Agregar** nuevos alumnos mediante un formulario dedicado.
* **Visualizar** un listado completo de alumnos presentados en tarjetas individuales.
* **Editar** la información de alumnos existentes a través de un formulario precargado.
* **Eliminar** alumnos del listado con una confirmación previa.
* **Consultar** los detalles completos de un alumno específico en una vista dedicada.

La aplicación está estructurada en componentes funcionales, promoviendo la reutilización y una clara separación de responsabilidades para un código mantenible y escalable.

## Funcionalidades Implementadas 📌

* **Página de Inicio**: Bienvenida y presentación del sistema.
* **Listado de Alumnos**: Muestra todos los alumnos en formato de tarjetas interactivas
    * Cada tarjeta de alumno incluye botones para **Editar**, **Eliminar** (con modal de confirmación) y **Ver Detalles**.
* **Formulario de Alumno**: Permite agregar un nuevo alumno o editar uno existente, con validaciones en los campos.
* **Vista de Detalle del Alumno**: Presenta toda la información registrada de un alumno seleccionado.
* **Navegación General**: Un menú de navegación (`NavBar`) persistente y accesible desde todas las vistas de la aplicación.
* **Notificaciones**: Mensajes emergentes para confirmar operaciones exitosas (ej. alumno guardado/eliminado).
* **Página "Acerca de"**: Información sobre los desarrolladores de la aplicación y el proyecto.

## Especificaciones y Tecnologías 🛠️

* **Entorno de Desarrollo:** Vite (v6.3.5)
* **Librería Principal:** React (v19.1.0)
* **Manejo de Rutas:** React Router Dom (v7.6.1)
* **Lenguaje:** JavaScript (ES6+) con sintaxis JSX.
* **Hooks de React Utilizados:**
    * `useState`: Para la gestión de estados como el listado de `alumnos`, datos del formulario, notificaciones, etc.
    * `useEffect`: Para efectos secundarios, como la carga inicial de datos (si aplicara desde API en un futuro) o para manejar el `AlumnoForm` en modo edición.
    * `useCallback`: Para memorizar funciones callback y optimizar el rendimiento.
    * `useParams`: Para obtener los parámetros de la URL (ej. el LU del alumno).
    * `useNavigate`: Para la navegación programática entre rutas.
* **Manejo de Eventos:** Uso de eventos sintéticos de React como `onClick`, `onChange`, `onSubmit`.
* **Estilización:**
    * CSS Modules para componentes específicos (`AlumnoCard`, `AlumnoForm`, `DetalleAlumno`).
    * CSS global para estilos generales y componentes de `react-bootstrap` (`CustomNavBar.css`, `CustomFooter.css`, `Notification.css`).
* **Framework de UI:** React Bootstrap.
* **Iconos:** React Icons (Font Awesome).
* **Componentes Reutilizables Clave:** `NavBar`, `Footer`, `AlumnoCard`, `AlumnoForm`, `DetalleAlumno`, `ConfirmacionModal`, `Notification`, `Titulo`.

## Estructura de Datos del Alumno 📝

Cada alumno se gestiona con la siguiente estructura de datos:

* **`lu`**: Legajo Universitario (Number, ej. 1001). Validado para ser un número entre 1000 y 9999.
* **`nombre`**: Nombre del alumno (String).
* **`apellido`**: Apellido del alumno (String).
* **`curso`**: Curso actual del alumno (String, ej: "Tercero").
* **`email`**: Dirección de correo electrónico del alumno (String).
* **`domicilio`**: Dirección postal del alumno (String).
* **`telefono`**: Número de teléfono de contacto (String).

Los alumnos son almacenados en un array dentro del estado principal de la aplicación.

## Integrantes del Equipo 🧑‍💻👩‍💻

* **Gonzalo Nicolás Barboza** ➡ GitHub: `Nicolas-Barboza`
* **Joaquin Matías Coca** ➡ GitHub: `Coca-m`
* **Facundo Santiago Cortez** ➡ GitHub: `Facundo254`

## Instalación y Ejecución Local 🚀

Para ejecutar este proyecto en tu entorno local, sigue estos pasos:

1.  **Clona el repositorio:**
    ```bash
    git clone https://github.com/Nicolas-Barboza/pv_tp5_grupo6.git
    cd pv_tp5_grupo6
    ```
2.  **Instala las dependencias del proyecto:**
    ```bash
    npm install
    ```
3.  **Inicia el servidor de desarrollo:**
    ```bash
    npm run dev
    ```
    La aplicación estará disponible en `http://localhost:5173` (o el puerto que Vite asigne).

## Estrategia de Control de Versiones (Git) 🌿

El desarrollo sigue un flujo basado en ramas para cumplir con las buenas prácticas:
* **`main`**: Contiene el código de la última versión estable considerada "lista para producción" o entrega.
* **`develop`**: Rama de integración principal donde se consolidan las nuevas funcionalidades y correcciones.
* **Ramas de funcionalidad/corrección (ej. `feature/<nombre-feature>`, `fix/<nombre-fix>`)**: Ramas individuales para cada desarrollo o corrección específica. Estas parten de `develop` y se fusionan nuevamente a `develop` (idealmente mediante Pull Requests).

---