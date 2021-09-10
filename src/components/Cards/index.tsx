import { ContentCards } from "./styles";
import { database } from "../../services/firebase";
import { BiEdit } from "react-icons/Bi";
import { FiCheckSquare } from "react-icons/Fi";
import { AiOutlineCloseSquare } from "react-icons/Ai";

export function Cards({ todo }) {

    function handleDeletedTask() {
        const todoRef = database.ref("Todo").child(todo.id);
        todoRef.remove();
    };

    return (
        <>
            <ContentCards>
                <div className="bgTask pending">
                    <div>
                        <h3>{todo.title}</h3>
                        <span>
                            <button><BiEdit className="editButton" /></button>
                            <button><FiCheckSquare className="completedButton" /></button>
                            <button onClick={handleDeletedTask}><AiOutlineCloseSquare className="cancelButton" /></button>
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
        </>
    );
}