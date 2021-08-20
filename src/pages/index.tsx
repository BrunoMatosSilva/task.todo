import Head from "next/head";
import { useAuth } from "../hooks/useAuth";
import { Content } from "../styles/Login";

export default function Home() {
  const { signInWithGoogle } = useAuth()

  async function handleSignIn() {

    await signInWithGoogle();
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
            <button type="button" onClick={handleSignIn}>
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
