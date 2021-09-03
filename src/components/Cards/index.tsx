import { ContentCards, ContentTitle } from "./styles";
import { BiEdit } from "react-icons/Bi";
import { FiCheckSquare } from "react-icons/Fi";
import { AiOutlineCloseSquare } from "react-icons/Ai";
import { database } from "../../services/firebase";
import { useState, useEffect } from "react";

export function Cards() {

    const [listTask, setListTask] = useState([]);

    useEffect(() => {
        const taskRef = database.ref('tasks');
        taskRef.on('value', (snapshot) => {
            const task = snapshot.val();
            const listTask = [];
            for (let id in task) {
                listTask.push({ id, ...task[id] });
            }
            setListTask(listTask)
        })
    }, []);

    function handleDeletedTask({ task }: any) {
        const taskRef = database.ref('tasks').child(task.id);
        taskRef.remove();
    }

    return (
        <>
            <ContentTitle>
                <h2>Tarefas</h2><span>10 ao total</span>
            </ContentTitle>
            <ContentCards>
                {listTask ? listTask.map((task, index) => {
                    return (
                        <div key={index} className="bgTask pending">
                            <div>
                                <h3>{task.title}</h3>
                                <span>
                                    <button><BiEdit className="editButton" /></button>
                                    <button><FiCheckSquare className="completedButton" /></button>
                                    <button onClick={handleDeletedTask}><AiOutlineCloseSquare className="cancelButton" /></button>
                                </span>
                            </div>
                            <div>
                                <p>{task.description}</p>
                                <time>
                                    {task.date}
                                </time>
                            </div>
                        </div>
                    )
                }) : ''}
            </ContentCards>
        </>
    );
}