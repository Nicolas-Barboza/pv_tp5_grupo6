import React, { useState ,useCallback} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import AlumnosList from './views/AlumnosList';
import DetalleAlumno from './views/DetalleAlumno';

const initialAlumnosData = [
  { lu: 1001, nombre: "Juan", apellido: "Perez", curso: "Primero", email: "juan@example.com", domicilio: "Av. Siempre Viva 123", telefono: "3884123456" },
  { lu: 1002, nombre: "Ana", apellido: "Gomez", curso: "Segundo", email: "ana@example.com", domicilio: "Calle Falsa 456", telefono: "3884654321" },
  { lu: 1003, nombre: "Luis", apellido: "Castro", curso: "Tercero", email: "luis@example.com", domicilio: "Boulevard 789", telefono: "3884789123" },
  { lu: 1004, nombre: "Maria", apellido: "Lopez", curso: "Cuarto", email: "maria@example.com", domicilio: "Calle Verdadera 101", telefono: "3884890123" },
  { lu: 1005, nombre: "Carlos", apellido: "Martinez", curso: "Quinto", email: "carlos@example.com", domicilio: "Calle Falsa 102", telefono: "3884901234" },
  { lu: 1006, nombre: "Laura", apellido: "Fernandez", curso: "Sexto", email: "laura@example.com", domicilio: "Calle Imaginaria 103", telefono: "3884912345" },
];

function App() {
  const [alumnos, setAlumnos] = useState(initialAlumnosData);
  
  const handleEliminarAlumno = useCallback((luAlumnoAEliminar) => {
        setAlumnos(prevAlumnos =>
            prevAlumnos.filter(a => a.lu !== luAlumnoAEliminar)
        );
    }, []);

  return (
    <div>
      <Router>
        <div>
          <NavBar />
          <div style={{ paddingTop: "50px" }}>
            <Routes>
              <Route path="/alumnos" element={<AlumnosList alumnos={alumnos} />} />
              <Route path="/alumnos/:lu" element={<DetalleAlumno alumnos={alumnos} onEliminar={handleEliminarAlumno} />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;