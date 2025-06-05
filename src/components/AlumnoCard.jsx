import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/AlumnoCard.module.css';
import { FaEdit, FaTrashAlt, FaEye } from 'react-icons/fa'; 
import ConfirmacionModal from './ConfirmacionModal';


function AlumnoCard({ alumno, onEliminar  }) {
    if (!alumno) {
        return null;
    }
    const [showModal, setShowModal] = React.useState(false);

    const handleEliminarClick = () => {
        setShowModal(true);
    };

    const handleConfirmarEliminar = () => {
        if (alumno && onEliminar) {
            onEliminar(alumno.lu);
        }
    };

    return (
        <div className={styles.alumnoCard}>
            <div className={styles.infoContainer}>
                <h4>{alumno.nombre} {alumno.apellido}</h4>
                <p><strong>LU:</strong> {alumno.lu}</p>
                <p><strong>Email:</strong> {alumno.email}</p>
            </div>
            <div className={styles.actionsContainer}>
                <Link to={`/alumnos/${alumno.lu}/editar`} className={styles.iconLink} title="Editar Alumno">
                    <FaEdit />
                </Link>
                <button onClick={handleEliminarClick} className={styles.iconButton} title="Eliminar Alumno">
                    <FaTrashAlt />
                </button>
                <Link to={`/alumnos/${alumno.lu}`} className={styles.iconLink} title="Ver Detalles">
                    <FaEye />
                </Link>
            </div>

            <ConfirmacionModal
                show={showModal}
                onHide={() => setShowModal(false)}
                onConfirm={handleConfirmarEliminar}
                title="Confirmar Eliminación"
                message={`¿Estás seguro de que deseas eliminar al alumno ${alumno.nombre} ${alumno.apellido} (LU: ${alumno.lu})?`}
            />
        </div>
    );
}
export default AlumnoCard;