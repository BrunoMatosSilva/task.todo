import Head from "next/head";
import { Header } from "../../components/Header";
import { User } from "../../components/User";
import { ContentTask } from "../../styles/Task";

import { AiOutlineSearch, AiOutlineFilter } from "react-icons/Ai";

export default function Task() {
    return (
        <>
            <Head>
                <title>Tasks | Task.todo</title>
            </Head>
            <Header />
            <User />
            <ContentTask>
                <section>
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
                            <option value="cancelled">Canceladas</option>
                        </select>
                    </div>
                </section>
            </ContentTask>
        </>
    );
}