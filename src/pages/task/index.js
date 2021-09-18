import Head from "next/head";
import { useState } from "react";
import { Header } from "../../components/Header";
import { User } from "../../components/User";
import { ContentNewTask } from "../../styles/Task";
import { NewTaskModal } from "../../components/NewTaskModal";
import { Tasklist } from "../../components/TaskList";

export default function Task() {

    const [isNewTaskModalOpen, setIsNewTaskModalOpen] = useState(false);


    function handleOpenNewTaskModal() {
        setIsNewTaskModalOpen(true);
    }

    function handleCloseNewTaskModal() {
        setIsNewTaskModalOpen(false);
    }

    return (
        <>
            <Head>
                <title>Tasks | Task.todo</title>
            </Head>
            <Header />
            <User />
            <ContentNewTask>
                <button type="button" className="newTask" onClick={handleOpenNewTaskModal}>Nova Tarefa</button>
            </ContentNewTask>

            <NewTaskModal
                isOpen={isNewTaskModalOpen}
                onRequestClose={handleCloseNewTaskModal}
            />

            <Tasklist />
        </>
    );
}