import React from 'react';
import Modal from 'react-modal';
import {FaCogs, FaTimes} from "react-icons/fa";
import './css/modal.css';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        height: '350px',
        width:'60%'
    }
};

Modal.setAppElement('#root')

export function ModalConfiguration(): JSX.Element {

    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            <button onClick={openModal}><FaCogs/></button>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className="modal-header">
                    <button onClick={closeModal} className="close-modal"><FaTimes/></button>
                </div>
                <div className="modal-body">

                </div>
            </Modal>
        </div>
    );
}