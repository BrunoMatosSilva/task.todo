import { database } from "../../services/firebase";
import { useState, useEffect } from 'react'
import { Cards } from "../Cards";
import { ContentTitle } from "./styles";

export function Tasklist() {
    const [todoList, setTodoList] = useState([]);

    useEffect(() => {
        const todoRef = database.ref("Todo");
        todoRef.on('value', (snapshot) => {
            const todos = snapshot.val();
            const todoList = [];
            for (let id in todos) {
                todoList.push({ id, ...todos[id] });
            }
            setTodoList(todoList);
        })
    }, []);

    return (
        <div>
            <ContentTitle>
                <h2>Tarefas</h2>
            </ContentTitle>

            {todoList ? todoList.map((todo, index) => <Cards todo={todo} key={index} />) : ''}
        </div>
    );
}