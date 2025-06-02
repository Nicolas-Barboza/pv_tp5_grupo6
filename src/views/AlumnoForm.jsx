import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Titulo from '../components/Titulo';
import styles from '../styles/AlumnoForm.module.css'; 

const ALUMNO_VACIO = {
    lu: '', 
    nombre: '',
    apellido: '',
    curso: '',
    email: '',
    domicilio: '',
    telefono: '',
};

function AlumnoForm({ alumnos, onGuardar, generateLU }) {
    const { lu: luParam } = useParams(); 
    const navigate = useNavigate();
    const [alumno, setAlumno] = useState(ALUMNO_VACIO);
    const [modoEdicion, setModoEdicion] = useState(false);
    const [errorLU, setErrorLU] = useState('');
    const [errorGeneral, setErrorGeneral] = useState('');


    useEffect(() => {
        if (luParam && alumnos && alumnos.length > 0) { // Modo Edición
            const luNumericoParam = parseInt(luParam, 10);
            const alumnoAEditar = alumnos.find(a => a.lu === luNumericoParam);
            if (alumnoAEditar) {
                setAlumno({ ...alumnoAEditar, lu: alumnoAEditar.lu.toString() }); 
                setModoEdicion(true);
            } else {
                console.warn(`Alumno con LU "${luParam}" no encontrado para editar.`);
                navigate('/alumnos'); 
            }
        } else { // Modo Creación
            setAlumno(ALUMNO_VACIO);
            setModoEdicion(false);
        }
        setErrorGeneral(''); 
        setErrorLU('');      
    }, [luParam, alumnos, navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAlumno(prevAlumno => ({
            ...prevAlumno,
            [name]: value, 
        }));

        if (name === 'lu') setErrorLU(''); 
        setErrorGeneral('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrorGeneral('');
        setErrorLU('');

        // Validaciones
        if (!alumno.nombre.trim() || !alumno.apellido.trim() || !alumno.email.trim()) {
            setErrorGeneral("Los campos Nombre, Apellido y Email son obligatorios.");
            return;
        }
        if (!/\S+@\S+\.\S+/.test(alumno.email)) {
            setErrorGeneral("El formato del email no es válido.");
            return;
        }

        // Validación y conversión de LU
        const luString = alumno.lu.toString().trim();
        if (!luString) {
            setErrorLU("El campo LU es obligatorio.");
            return;
        }
        const luNumerico = parseInt(luString, 10);
        if (isNaN(luNumerico) || luNumerico <= 999 || luNumerico > 9999) {
            setErrorLU("El LU debe ser un número entero entre 1000 y 9999.");
            return;
        }

        // Validación de unicidad de LU 
        if (!modoEdicion) {
            const luExistente = alumnos.find(a => a.lu === luNumerico);
            if (luExistente) {
                setErrorLU("El LU ingresado ya existe. Ingrese un LU único.");
                return;
            }
        }
        
        const alumnoParaGuardar = {
            ...alumno,
            lu: luNumerico, // Aseguramos que el LU sea numérico
        };

        onGuardar(alumnoParaGuardar, modoEdicion);
        navigate('/alumnos');
    };

    const tituloForm = modoEdicion ? "Editar Alumno" : "Registrar Nuevo Alumno";

    return (
        <div className={styles.formContainerWrapper}>
            <Titulo texto={tituloForm} />
            <div className={styles.formContainer}>
                <form onSubmit={handleSubmit}> 
                    <div className={styles.inputGroup}>
                        <label htmlFor="lu">LU (1000-9999):</label>
                        <input
                            type="number" 
                            id="lu"
                            name="lu"
                            value={alumno.lu} 
                            onChange={handleChange}
                            required
                            placeholder="Ej: 1001"
                            disabled={modoEdicion}
                            min="1000"
                            max="9999"
                        />
                        {errorLU && <p className={styles.errorMessage}>{errorLU}</p>}

                        <label htmlFor="nombre">Nombre:</label>
                        <input type="text" id="nombre" name="nombre" value={alumno.nombre} onChange={handleChange} required placeholder="Nombre del alumno"/>

                        <label htmlFor="apellido">Apellido:</label>
                        <input type="text" id="apellido" name="apellido" value={alumno.apellido} onChange={handleChange} required placeholder="Apellido del alumno"/>

                        <label htmlFor="curso">Curso:</label>
                        <select id="curso" name="curso" value={alumno.curso} onChange={handleChange} required>
                        <option value="">Seleccione un curso</option>
                                <option value="Primero">Primero</option>
                                <option value="Segundo">Segundo</option>
                                <option value="Tercero">Tercero</option>
                                <option value="Cuarto">Cuarto</option>
                                <option value="Quinto">Quinto</option>
                                <option value="Sexto">Sexto</option>
                                </select>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" value={alumno.email} onChange={handleChange} required placeholder="correo@ejemplo.com"/>

                        <label htmlFor="domicilio">Domicilio:</label>
                        <input type="text" id="domicilio" name="domicilio" value={alumno.domicilio} onChange={handleChange} placeholder="Av. Siempre Viva 123"/>

                        <label htmlFor="telefono">Teléfono:</label>
                        <input type="tel" id="telefono" name="telefono" value={alumno.telefono} onChange={handleChange} placeholder="Ej: 3884123456"/>
                        
                        {errorGeneral && <p className={styles.errorMessage}>{errorGeneral}</p>}

                        <div className={styles.buttonContainer}>
                            <button type="submit" className={styles.submitButton}>
                                {modoEdicion ? "Actualizar Alumno" : "Guardar Alumno"}
                            </button>
                            <button
                                type="button"
                                onClick={() => navigate('/alumnos')}
                                className={styles.cancelButton}>Cancelar</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AlumnoForm;