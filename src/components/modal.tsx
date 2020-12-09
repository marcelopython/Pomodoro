import React from 'react';
import Modal from 'react-modal';
import { FaCogs, FaTimes } from "react-icons/fa";
import './css/modal.css';
import { Input } from './input';
import { Button } from './button'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        height: '420px',
        width: '60%',
    }
};
Modal.setAppElement('#root')

type Props = {
    formEvent:Function
}


export function ModalConfiguration(props: Props): JSX.Element {

    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() { }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className="modal-content">
            <button onClick={openModal}><FaCogs /></button>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <div className="modal-header">
                    <h4>Configuração</h4>
                    <button onClick={closeModal} className="close-modal"><FaTimes /></button>
                </div>
                <div className="modal-body">
                    <div className="container-form">
                        <form id="form-configuration" onSubmit={(event)=>props.formEvent(event)}>
                            <Input name="total-work" idInput="total-work" title="Tempo de trabalho" />
                            <Input name="short-rest-time" idInput="short-rest-time" title="Tempo para descaso curto" />
                            <Input name="long-rest-time" idInput="long-rest-time" title="Tempo para descaso longo" />
                            <Input name="cycle-pomodoro" idInput="cycle-pomodoro" title="Ciclos de pomodoro" />
                            <div className="contanier-btn">
                                <Button text="Cancelar" onclick={closeModal} className="btn btn-danger" />
                                <button className="btn btn-blue">Salvar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </Modal>
        </div>
    );
}