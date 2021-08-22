import Head from "next/head";
import { supabase } from "../services/supabaseClient";
import { Content } from "../styles/Login";

export default function Home() {

  return (
    <>
      <Head>
        <title>Login | Task.todo</title>
      </Head>

      <div>
        <Content>
          <div className="bgBlue">
          </div>
          <section className="bgLogotipo">
            <img src="/logotask.svg" alt="Logotipo task.todo" />
            <div className="contentLogo">
              <h1>Task</h1><span>.</span><h1>todo</h1>
            </div>
            <p>Organize suas tarefas de forma rapida e organizada</p>
          </section>
          <button type="button">
            <span>
              <img src="/google-icon.svg" />
            </span>
            Entrar com Google
          </button>
        </Content>
      </div>
    </>
  )
}
