// components/Footer.jsx
function Footer() {
    const footerStyles = {
    backgroundImage: 'linear-gradient(to right, #2a3e52 0%, #287eb8 100%)',
    color: 'white',
    textAlign: 'center',
    padding: '14px 0',
    fontFamily: 'Lato, sans-serif',
    fontSize: '0.95em',
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    };

return (
    <footer style={footerStyles}>
        <p style={{ margin: 0 }}>
        © 2025 - Grupo 6 | Facultad de Ingeniería - Carrera APU | TP5
        </p>
    </footer>
    );
}
export default Footer;
