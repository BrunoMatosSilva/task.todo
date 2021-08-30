import Modal from 'react-modal';
import { IoMdClose } from "react-icons/Io";
import { FormEvent, useState } from 'react'
import { ContainerModal } from './styles';
import { database } from '../../services/firebase';
import useAuth from '../../hooks/useAuth';

interface NewTaskModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTaskModal({ isOpen, onRequestClose }: NewTaskModalProps) {
    const { user } = useAuth();
    const [newTask, setNewTask] = useState('');
    const [newDescription, setNewDescription] = useState('');

    async function handleCreateTask(event: FormEvent) {
        event.preventDefault();

        if (newTask.trim() === '') {
            return;
        }
        if (newDescription.trim() === '') {
            return;
        }

        const taskRef = database.ref('tasks');

        const firebaseTask = await taskRef.push({
            title: newTask,
            authorId: user?.id,
            descrição: newDescription
        })
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

            <ContainerModal onSubmit={handleCreateTask}>
                <h2>Nova Tarefa</h2>

                <div>
                    <label>Titulo:</label>
                    <input
                        type="text"
                        onChange={event => setNewTask(event.target.value)}
                    />
                </div>
                <div>
                    <label>Descrição:</label>
                    <textarea
                        onChange={event => setNewDescription(event.target.value)}
                    />
                </div>

                <button type="submit">Cadastrar</button>
            </ContainerModal>
        </Modal>
    );
}