import Titulo from '../components/Titulo';
import AlumnoCard from '../components/AlumnoCard';
import { Link } from 'react-router-dom';

const listContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center', 
    gap: '20px',                   
};
const noAlumnosStyle = {
    textAlign: 'center',
    marginTop: '30px',
    fontSize: '1.1em',
};

const linkNuevoStyle = {
    display: 'inline-block',
    marginTop: '15px',
    padding: '10px 15px',
    backgroundColor: '#28a745',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px'
};

const alumnoListWrapperStyle = {
    paddingTop: '20px',
};


function AlumnoList({ alumnos }) {
    if (!alumnos || alumnos.length === 0) {
        return (
            <div style={alumnoListWrapperStyle}>
                <Titulo texto={"Lista de Alumnos"} />
                <div style={noAlumnosStyle}>
                    <p>No hay alumnos para mostrar.</p>
                    <Link to="/alumnos/nuevo" style={linkNuevoStyle}>Agregar Nuevo Alumno</Link>
                </div>
            </div>
        );
    }

    return (
        <div style={alumnoListWrapperStyle}>
            <Titulo texto={"Lista de Alumnos"} />
            <div style={listContainerStyle}>
                {alumnos.map((alumno) => (
                    <AlumnoCard
                        key={alumno.lu}
                        alumno={alumno}
                    />
                ))}
            </div>
        </div>
    );
}

export default AlumnoList;