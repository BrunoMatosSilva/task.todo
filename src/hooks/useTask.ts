import { useState } from 'react';
import { useEffect } from 'react';
import { database } from '../services/firebase';

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

export function useTask() {
    const [todos, setTodos] = useState<TaskType[]>([]);

    useEffect(() => {
        const todoRef = database.ref("Todo");

        todoRef.on('value', todo => {
            const databaseTask = todo.val();
            const firebaseTasks = databaseTask.task ?? {};

            const parsedTasks = firebaseTasks.map(([key, value]) => {
                return {
                    id: key,
                    authorId: value.authorId,
                    title: value.title,
                    description: value.description,
                    date: value.date,
                    isPending: value.isPending,
                    isFinished: value.isFinished,
                    isCanceled: value.isCanceled,
                }
            })

            setTodos(parsedTasks);
        })

    }, [])

    return { todos }
}