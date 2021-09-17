import Modal from 'react-modal';
import { IoMdClose } from "react-icons/Io";
import { FormEvent, useState } from 'react'
import { useAuth } from '../../hooks/useAuth';
import { ContainerModal } from './styles';

interface NewTaskModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function UpdateTaskModal({ isOpen, onRequestClose }: NewTaskModalProps) {

    const { user } = useAuth();
    const [newTask, setNewTask] = useState('');
    const [newDescription, setNewDescription] = useState('');

    async function handleUpdateTask(event: FormEvent) {
        event.preventDefault();

        if (newTask.trim() === '') {
            return;
        }
        if (newDescription.trim() === '') {
            return;
        }

        setNewTask('');
        setNewDescription('');
    }

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

            <ContainerModal onSubmit={handleUpdateTask}>
                <h2>Editar</h2>

                <div>
                    <label>Titulo:</label>
                    <input
                        type="text"
                        onChange={event => setNewTask(event.target.value)}
                        value={newTask}
                    />
                </div>
                <div>
                    <label>Descrição:</label>
                    <textarea
                        onChange={event => setNewDescription(event.target.value)}
                        value={newDescription}
                    />
                </div>

                <button type="submit">Salvar</button>
            </ContainerModal>
        </Modal>
    );
}