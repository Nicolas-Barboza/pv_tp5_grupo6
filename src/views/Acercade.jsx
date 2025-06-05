import Titulo from '../components/Titulo';

function AcercaDe() {
    const integrantes = [
        { nombre: "Gonzalo Nicolás Barboza", githubUser: "Nicolas-Barboza" },
        { nombre: "Facundo Santiago Cortez", githubUser: "Facundo254" },
        { nombre: "Joaquin Matías Coca", githubUser: "Coca-m" },
    ];

    return (
        <div className="container mt-4"> 
            <Titulo texto="Acerca de Nosotros" />
            <div className="mt-3 text-center">
                <p className="mt-3"> 
                    Esta aplicación de Gestión de Alumnos fue desarrollada como parte del Trabajo Práctico N°5
                    de la materia Programación Visual, dictada en la Facultad de Ingeniería de la
                    Universidad Nacional de Jujuy (UNJu).
                </p>
                <p className="mt-3"> 
                    El objetivo principal es aplicar los conocimientos de React, manejo de eventos,
                    componentes funcionales y React Router DOM para crear una aplicación web interactiva.
                </p>

                <h3 className="mt-4 mb-3">Integrantes del Grupo:</h3> 
                <ul className="list-unstyled"> 
                    {integrantes.map((integrante, index) => (
                        <li key={index} className="mb-2"> 
                            {integrante.nombre} - GitHub:
                            <a
                                href={`https://github.com/${integrante.githubUser}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ms-2 fw-bold"
                            >
                                {integrante.githubUser}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default AcercaDe;