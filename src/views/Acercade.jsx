import '../styles/Acerca-de.css';

function Acercade() {

    return (
    <div className="acercaContainer">
        <h2>Acerca de</h2>
        <p className="acercaDescripcion">
        Esta aplicación fue creada por los alumnos:
        </p>
        <ul>
        <li>
            <a href="https://github.com/Nicolas-Barboza" target="_blank" rel="noopener noreferrer">
            Nicolas Barboza (GitHub)
            </a>
        </li>
        <li>
            <a href="https://github.com/Facundo254" target="_blank" rel="noopener noreferrer">
            Facundo Cortez (GitHub)
            </a>
        </li>
        <li>
        <a href="https://github.com/Coca-m" target="_blank" rel="noopener noreferrer">
            Joaquin Coca (GitHub)
            </a>
        </li>
        </ul>
    </div>
    );
}

export default Acercade;