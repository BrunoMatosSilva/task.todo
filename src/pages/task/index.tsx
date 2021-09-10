import Head from "next/head";
import { useState } from "react";
import { Header } from "../../components/Header";
import { User } from "../../components/User";
import { ContentNewTask, ContentTask, ContentTitle } from "../../styles/Task";

import { AiOutlineSearch, AiOutlineFilter } from "react-icons/Ai";
import { BiTask } from "react-icons/Bi";
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
            <ContentTask>
                <section className="menuSearch">
                    <div>
                        <input type="text" />
                        <div id="lupa" ><AiOutlineSearch /></div>
                    </div>

                    <div>
                        <span><AiOutlineFilter /></span>
                        <select>
                            <option value="all">All</option>
                            <option value="completed">Finalizadas</option>
                            <option value="uncompleted">Pendentes</option>
                        </select>
                    </div>
                </section>
            </ContentTask>

            <ContentNewTask>
                <button type="button" className="newTask" onClick={handleOpenNewTaskModal}><span><BiTask /></span>Nova Tarefa</button>
            </ContentNewTask>

            <NewTaskModal
                isOpen={isNewTaskModalOpen}
                onRequestClose={handleCloseNewTaskModal}
            />

            <ContentTitle>
                <h2>Tarefas</h2><span>10 ao total</span>
            </ContentTitle>
            <Tasklist />
        </>
    );
}