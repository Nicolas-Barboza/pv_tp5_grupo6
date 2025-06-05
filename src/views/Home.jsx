import Titulo from '../components/Titulo';
import fotoFacultad from '../assets/images/Fi-foto-fuera.jpg';
import logoFacultad from '../assets/images/logo-fi-unju-institucional-285x159.png';

function Home() {
    return (
        <div className="container mt-4 mb-5">
            <div className="text-center mb-5">
                <Titulo texto="Bienvenido al Sistema de Gestión de Alumnos" />
                <p className="h4 fw-light mt-2">
                    Facultad de Ingeniería - UNJu
                </p>
            </div>

            <section className="row align-items-center my-5">
                <div className="col-lg-7">
                    <p className="lead textohome">
                        A través de esta aplicación podrá acceder al listado de todos los alumnos que
                        asisten actualmente a la Facultad de Ingeniería de la Universidad Nacional de Jujuy.
                        Podrá consultar la información de cada alumno y realizar operaciones
                        de actualización sobre dicho listado, incluyendo las funciones de: agregar, editar y eliminar alumnos.
                    </p>
                </div>
                <div className="col-lg-5 text-center">
                    <img
                        className="img-fluid rounded shadow-sm imagen1"
                        src={fotoFacultad}
                        alt="Fachada de la Facultad de Ingeniería de la UNJu"
                    />
                </div>
            </section>

            <hr />

            <section className="text-center my-5 apartadoenlaces">
                <p>
                    Si desea obtener más información acerca de la Facultad de Ingeniería de Jujuy, puede hacer clic en el siguiente logo:
                </p>
                <a href="https://www.fi.unju.edu.ar/" target="_blank" rel="noopener noreferrer">
                    <img
                        src={logoFacultad}
                        alt="Logo oficial de la Facultad de Ingeniería - UNJu"
                        style={{ width: '150px', height: 'auto' }}
                    />
                </a>
            </section>
        </div>
    );
}

export default Home;