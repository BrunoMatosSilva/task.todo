import Modal from 'react-modal';
import { IoMdClose } from "react-icons/Io";
import { FormEvent, useState } from 'react'
import { database } from '../../services/firebase';
import { useAuth } from '../../hooks/useAuth';
import { ContainerModal } from './styles';

import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

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
            Toastify({
                text: "Coloque um Titulo!",
                gravity: "top",
                position: "center",
                backgroundColor: "linear-gradient(to right, #4285F4, #0A4419)",
                className: "alert",
                duration: 2000,
            }).showToast();
            return;
        }
        if (newDescription.trim() === '') {
            Toastify({
                text: "Prencha o campo Descrição!",
                gravity: "top",
                position: "center",
                backgroundColor: "linear-gradient(to right, #4285F4, #0A4419)",
                className: "alert",
                duration: 2000,
            }).showToast();
            return;
        }

        const todoRef = database.ref('Todo');

        await todoRef.push({
            title: newTask,
            authorId: user?.id,
            description: newDescription,
            date: new Date().toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
            }),
            isPending: true,
            isFinished: false
        });
        onRequestClose();
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
                        placeholder="Escreva um Titulo"
                        onChange={event => setNewTask(event.target.value)}
                        value={newTask}
                    />
                </div>
                <div>
                    <label>Descrição:</label>
                    <textarea
                        placeholder="Descreva a tarefa"
                        onChange={event => setNewDescription(event.target.value)}
                        value={newDescription}
                    />
                </div>

                <button type="submit" >Cadastrar</button>
            </ContainerModal>
        </Modal>
    );
}