import React, { useState ,useCallback} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './views/Home';
import AlumnosList from './views/AlumnosList';
import DetalleAlumno from './views/DetalleAlumno';
import AlumnoForm from './views/AlumnoForm';
import Acercade from './views/Acercade';
import Footer from './components/Footer';
import Notification from './components/Notification';

const initialAlumnosData = [
  { lu: 1001, nombre: "Juan", apellido: "Perez", curso: "Primero", email: "juan@example.com", domicilio: "Av. Siempre Viva 123", telefono: "3884123456" },
  { lu: 1002, nombre: "Ana", apellido: "Gomez", curso: "Segundo", email: "ana@example.com", domicilio: "Calle Falsa 456", telefono: "3884654321" },
  { lu: 1003, nombre: "Luis", apellido: "Castro", curso: "Tercero", email: "luis@example.com", domicilio: "Boulevard 789", telefono: "3884789123" },
  { lu: 1004, nombre: "Maria", apellido: "Lopez", curso: "Cuarto", email: "maria@example.com", domicilio: "Calle Verdadera 101", telefono: "3884890123" },
  { lu: 1005, nombre: "Carlos", apellido: "Martinez", curso: "Quinto", email: "carlos@example.com", domicilio: "Calle Falsa 102", telefono: "3884901234" },
  { lu: 1006, nombre: "Laura", apellido: "Fernandez", curso: "Sexto", email: "laura@example.com", domicilio: "Calle Imaginaria 103", telefono: "3884912345" },
];
//En este caso LU puede ser un numero entero entre 1000 y 9999, y no una Nextlu que se va incrementando automáticamente como manejabamos IDs en el anterior tp.

function App() {
  const [alumnos, setAlumnos] = useState(initialAlumnosData);
  const [notification, setNotification] = useState(null);

  const mostrarNotification = (mensaje, tipo) => {
    setNotification({ mensaje, tipo }); 
  };

  const handleGuardarAlumno = useCallback((alumnoData, esEdicion) => {
        console.log("App.jsx handleGuardarAlumno: esEdicion =", esEdicion, "alumnoData =", alumnoData); 

        if (esEdicion) {
            // En modo edición, alumnoData.lu es el identificador del alumno a actualizar.
            setAlumnos(prevAlumnos => {
                const actualizados = prevAlumnos.map(a =>
                    a.lu === alumnoData.lu ? { ...alumnoData } : a 
                );
                return actualizados;
            });
            mostrarNotification('Alumno editado con éxito', 'success');
        } else { // Nuevo alumno
            // AlumnoForm ya debería haber validado y asignado el LU.
            setAlumnos(prevAlumnos => {
                const nuevos = [...prevAlumnos, { ...alumnoData }];
                return nuevos;
            });
            mostrarNotification('Alumno guardado con éxito', 'success');
        }
    }, []);
  
  const handleEliminarAlumno = useCallback((luAlumnoAEliminar) => {
        setAlumnos(prevAlumnos =>
            prevAlumnos.filter(a => a.lu !== luAlumnoAEliminar)
        );
        mostrarNotification('Alumno eliminado con éxito', 'error');
    }, []);

  return (
    <div>
      <Router>
        <div className="app-container">
          <NavBar />
          <main className="content-wrap" style={{ paddingTop: "10px" }}>
             <div className="main-content-area">
            <Routes>
              <Route path="/" element={<Home />} /> 
              <Route path="/alumnos" element={<AlumnosList alumnos={alumnos} onEliminarAlumno={handleEliminarAlumno} />} />
              <Route path="/alumnos/:lu" element={<DetalleAlumno alumnos={alumnos} onEliminar={handleEliminarAlumno} />} />
              <Route path="/alumnos/nuevo" element={<AlumnoForm alumnos={alumnos} onGuardar={handleGuardarAlumno}/>} />
              <Route path="/alumnos/:lu/editar" element={<AlumnoForm alumnos={alumnos} onGuardar={handleGuardarAlumno} />} />
              <Route path="/acerca" element={<Acercade />} />
            </Routes>
            </div>
          </main>
           <Footer />
        </div>
      </Router>
      {notification && (
        <Notification
          mensaje={notification.mensaje}
          tipo={notification.tipo}
          onClose={() => setNotification(null)}
        />
      )}
    </div>
  );
}

export default App;