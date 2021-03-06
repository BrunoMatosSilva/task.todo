import { ContentCards } from "./styles";
import { database } from "../../services/firebase";
import { useAuth } from "../../hooks/useAuth";

export function Cards({ todo }) {

    const { user } = useAuth();

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
                    <div className={`bgTask ${todo.isFinished ? 'completed' : ""} ${todo.isPending ? 'pending' : ""}`}>
                        <div>
                            <h3>{todo.title}</h3>
                            <span>
                                {!todo.isFinished && (
                                    <>
                                        <button onClick={() => handleCompletedTask()}><img src="checked.png" className="completedIcon" /></button>
                                    </>
                                )}
                                <button onClick={() => handleDeletedTask()}><img src="close.png" className="deletedIcon" /></button>

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
}