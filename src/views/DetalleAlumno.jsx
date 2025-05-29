import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Titulo from '../components/Titulo';
import styles from '../styles/DetalleAlumno.module.css'; 

function DetalleAlumno({ alumnos, onEliminar }) {
    const { lu: luParamString } = useParams();
    const navigate = useNavigate();
    const [alumno, setAlumno] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        if (luParamString && alumnos && alumnos.length > 0) {
            const luNumerico = parseInt(luParamString, 10);
            if (isNaN(luNumerico)) {
                console.warn("DetalleAlumno: El LU de la URL no es un número válido:", luParamString);
                setAlumno(null); setLoading(false); return;
            }
            const alumnoEncontrado = alumnos.find(a => a.lu === luNumerico);
            setAlumno(alumnoEncontrado || null);
        } else {
            setAlumno(null);
        }
        setLoading(false);
    }, [luParamString, alumnos]);

    const handleEliminarClick = () => {
        if (alumno && onEliminar) {
            if (window.confirm(`¿Estás seguro de que deseas eliminar al alumno ${alumno.nombre} ${alumno.apellido} (LU: ${alumno.lu})?`)) {
                onEliminar(alumno.lu);
                navigate('/alumnos');
            }
        } else if (!onEliminar) {
            alert("Error: La función de eliminación no está configurada correctamente.");
        }
    };

    if (loading) {
        return (
            <div> 
                <Titulo texto="Detalle del Alumno" />
                <p style={{ textAlign: 'center', marginTop: '20px' }}>Cargando detalles del alumno...</p>
            </div>
        );
    }

    if (!alumno) {
        return (
            <div> 
                <Titulo texto="Error al Cargar Detalles" />
                <p style={{ textAlign: 'center', marginTop: '20px' }}>
                    Alumno no encontrado o LU inválido.
                </p>
                <div className={styles.centeredButtonContainer}>
                    <Link to="/alumnos" className={styles.backButton}>Volver a la Lista</Link>
                </div>
            </div>
        );
    }

    return (
        <div> 
            <Titulo texto={`Detalle Alumno: ${alumno.nombre} ${alumno.apellido}`} />

            <div className={styles.detalleContainer}>
                <p className={styles.parrafoDetalle}><strong className={styles.strongDetalle}>LU:</strong> {alumno.lu}</p>
                <p className={styles.parrafoDetalle}><strong className={styles.strongDetalle}>Nombre:</strong> {alumno.nombre}</p>
                <p className={styles.parrafoDetalle}><strong className={styles.strongDetalle}>Apellido:</strong> {alumno.apellido}</p>
                <p className={styles.parrafoDetalle}><strong className={styles.strongDetalle}>Curso:</strong> {alumno.curso || "No especificado"}</p>
                <p className={styles.parrafoDetalle}><strong className={styles.strongDetalle}>Email:</strong> {alumno.email}</p>
                <p className={styles.parrafoDetalle}><strong className={styles.strongDetalle}>Domicilio:</strong> {alumno.domicilio || "No especificado"}</p>
                <p className={styles.parrafoDetalle}><strong className={styles.strongDetalle}>Teléfono:</strong> {alumno.telefono || "No especificado"}</p>

                <div className={styles.actionButtonContainer}>
                    <Link to={`/alumnos/${alumno.lu}/editar`} className={styles.editButton}>Editar Alumno</Link>
                    <button onClick={handleEliminarClick} className={styles.deleteButton}>Eliminar Alumno</button>
                </div>
            </div>

            <div className={styles.centeredButtonContainer}>
                <Link to="/alumnos" className={styles.backButton}>Volver a la Lista</Link>
            </div>
        </div>
    );
}

export default DetalleAlumno;