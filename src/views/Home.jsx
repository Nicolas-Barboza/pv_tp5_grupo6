import '../styles/Home.css';
import imagen from '../../public/images/FI-foto-fuera.jpg';
import imagen2 from '../../public/images/logo-fi-unju-institucional-285x159.png';
import { Link } from 'react-router-dom';

function home() {

    return (
    <div>
        <div className="HomeContainer">

        <div>
       <h2>Bienvenido al sistema de gestion de Alumnos <br /> de la facultad de ingenieria</h2>

        <p className="textohome">
        Atraves de esta aplicacion podra acceder al listado de todos los alumnos que <br /> asisten  actualmente a la universidad  nacional  de  ingenieria de san salvador de jujuy  y podra ser  capaz
        de consultar acerca  de la informacion  de cada  alumno <br /> y podra realizar operaciones  de actualizacion sobre dicho listado incluyendo  <br /> las funciones de: agregar alumnos,editar alumnos y eliminar alumnos
        </p>

        </div>

        
        <img className="imagen1" src={imagen} alt="imagen" />

        </div>


        <div className="apartadoenlaces">
        <p>si desea obtener mas informacion acerca de la facultad nacional de ingenieria de jujuy puede hacer click en el siguiente icono: </p>
        <Link to="https://www.fi.unju.edu.ar/">
        <img src={imagen2} alt="imagen2" />
        </Link>
        </div>

   
    </div>
    );
}

export default home;