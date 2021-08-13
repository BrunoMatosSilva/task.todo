import Head from "next/head";
import { Header } from "../../components/Header";

export default function Task() {
    return (
        <>
            <Head>
                <title>Tasks | Task.todo</title>
            </Head>
            <Header />
            <body>
                <h1>App aqui</h1>
            </body>
        </>
    );
}