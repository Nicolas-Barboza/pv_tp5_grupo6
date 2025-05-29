import { Link } from 'react-router-dom';
import Styles from "../styles/NavBar.module.css"; 

function NavBar() {
    return (
        <nav className={Styles.navBar}>
            <div className={Styles.navSection}>
                <h1 className={Styles.pageTitle}>Gestión de Alumnos</h1> 
            </div>
            <div className={Styles.navSection}>
                <div className={Styles.navActions}>
                    <Link to="/home" className={Styles.navLink}>Inicio</Link>
                    <Link to="/alumnos" className={Styles.navLink}>Lista de Alumnos</Link>
                    <Link to="/alumnos/nuevo" className={Styles.navLink}>Nuevo Alumno</Link>
                    <Link to="/acerca-de" className={Styles.navLink}>Acerca de</Link>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;