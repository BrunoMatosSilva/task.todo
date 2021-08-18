import Modal from 'react-modal';
import { IoMdClose } from "react-icons/Io";
import { ContainerModal } from './styles';

interface NewTaskModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTaskModal({ isOpen, onRequestClose }: NewTaskModalProps) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="modal-task-overlay"
            className="modal-task-content"
        >

            <button
                type="button"
                onClick={onRequestClose}
                className="modal-close"
            >
                <IoMdClose />
            </button>

            <ContainerModal>
                <h2>Nova Tarefa</h2>

                <div>
                    <label>Titulo:</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Descrição:</label>
                    <textarea />
                </div>

                <button type="submit">Cadastrar</button>
            </ContainerModal>
        </Modal>
    );
}