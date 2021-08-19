import Head from "next/head";
import { Content } from "../styles/Login";
import { supabase } from '../utils/supabaseClient';

export default function Home() {

  async function signInWithGoogle() {
    const { user, session, error } = await supabase.auth.signIn({
      provider: 'google'
    });
  }

  return (
    <>
      <Head>
        <title>Login | Task.todo</title>
      </Head>

      <body>
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
            <button type="button" onClick={signInWithGoogle}>
              <span>
                <img src="/google-icon.svg" />
              </span>
              Entrar com Google
            </button>
          </Content>
        </div>
      </body>
    </>
  )
}
