import { ContentCards } from "./styles";
import { database } from "../../services/firebase";
import { useState } from "react";
import { BiEdit } from "react-icons/Bi";
import { FiCheckSquare } from "react-icons/Fi";
import { AiOutlineCloseSquare } from "react-icons/Ai";
import { UpdateTaskModal } from "../UpdateTaskModal";
import { useAuth } from "../../hooks/useAuth";

export function Cards({
    todo,
    isFinished = false,
    isPending = false
}: any) {

    const { user } = useAuth();
    const [isUpdateTaskModal, setIsUpdateTaskModal] = useState(false);

    function handleOpenUpdateTaskModal() {
        setIsUpdateTaskModal(true);
    };

    function handleCloseUpdateTaskModal() {
        setIsUpdateTaskModal(false);
    };

    async function handleDeletedTask() {
        await database.ref(`Todo/${todo.id}`).remove();
    };

    async function handleCompletedTask() {
        await database.ref(`Todo/${todo.id}`).update({
            isFinished: true,
        })
    };

    if (user.id !== todo.authorId) {
        return ""
    }

    if (user.id === todo.authorId) {
        return (
            <>
                <ContentCards>
                    <div className={`bgTask ${todo.isFinished ? 'completed' : ''} ${todo.isPending ? 'pending' : ''}`}>
                        <div>
                            <h3>{todo.title}</h3>
                            <span>
                                {!todo.isFinished && (
                                    <>
                                        <button onClick={handleOpenUpdateTaskModal}><BiEdit className="editButton" /></button>
                                    </>
                                )}
                                <button onClick={() => handleDeletedTask()}><AiOutlineCloseSquare className="cancelButton" /></button>
                                <button onClick={() => handleCompletedTask()}><FiCheckSquare className="completedButton" /></button>
                            </span>
                        </div>
                        <div>
                            <p>{todo.description}</p>
                            <time>
                                {todo.date}
                            </time>
                        </div>
                    </div>
                </ContentCards>

                <UpdateTaskModal
                    isOpen={isUpdateTaskModal}
                    onRequestClose={handleCloseUpdateTaskModal}
                />
            </>
        );
    }
}