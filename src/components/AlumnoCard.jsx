import { Link } from 'react-router-dom';
import styles from '../styles/AlumnoCard.module.css'; 

function AlumnoCard({ alumno }) {
    if (!alumno) {
        return null;
    }

    return (
        <div className={styles.alumnoCard}>
            <div className={styles.infoContainer}>
                <h4>{alumno.nombre} {alumno.apellido}</h4>
                <p><strong>LU:</strong> {alumno.lu}</p>
                <p><strong>Email:</strong> {alumno.email}</p>
            </div>
            <Link to={`/alumnos/${alumno.lu}`} className={styles.detalleLink}>Ver Detalles</Link>
        </div>
    );
}

export default AlumnoCard;