import Modal from 'react-modal';
import { IoMdClose } from "react-icons/Io";
import { FormEvent, useState } from 'react'
import { database } from '../../services/firebase';
import { useAuth } from '../../hooks/useAuth';
import { ContainerModal } from './styles';

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

        const todoRef = database.ref('Todo');

        const firebaseTask = await todoRef.push({
            title: newTask,
            authorId: user?.id,
            description: newDescription,
            date: new Date().toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
            }),
            isPending: true,
            isFinished: false,
            isCanceled: false
        });

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

            <ContainerModal onSubmit={handleCreateTask}>
                <h2>Nova Tarefa</h2>

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

                <button type="submit">Cadastrar</button>
            </ContainerModal>
        </Modal>
    );
}