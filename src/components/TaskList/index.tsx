import { database } from "../../services/firebase";
import { useState, useEffect } from 'react'
import { Cards } from "../Cards";

type TaskType = {
    id: string,
    authorId: string,
    title: string,
    description: string,
    date: string,
    isCanceled: boolean,
    isFinished: boolean,
    isPending: boolean,
}

export function Tasklist() {
    const [todoList, setTodoList] = useState<TaskType[]>([]);

    useEffect(() => {
        const todoRef = database.ref("Todo");
        todoRef.on('value', (snapshot) => {
            const todos = snapshot.val();
            const todoList = [];
            for (let id in todos) {
                todoList.push({ id, ...todos[id] });
            }
            setTodoList(todoList)
            console.log(todoList);
        })
    }, []);

    return (
        <div>
            {todoList ? todoList.map((todo, index) => <Cards todo={todo} key={index} />) : ""}
        </div>
    );
}