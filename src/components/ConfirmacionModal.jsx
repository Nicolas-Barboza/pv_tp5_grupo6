// ConfirmacionModal.jsx (Componente reutilizable)
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function ConfirmacionModal({ show, onHide, onConfirm, title, message, confirmButtonText = "Confirmar", cancelButtonText = "Cancelar", confirmVariant = "primary" }) {
    return (
        <Modal show={show} onHide={onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{message}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    {cancelButtonText}
                </Button>
                <Button variant={confirmVariant} onClick={onConfirm}>
                    {confirmButtonText}
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ConfirmacionModal;