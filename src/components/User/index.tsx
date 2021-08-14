import { UserContent } from "../../styles/User";

export function User() {
    return (
        <>
            <UserContent>
                <section>

                    <div className="contentName">
                        <h2>Olá, Bruno Matos</h2>
                        <p>Mantenha suas tarefas em ordem</p>
                    </div>
                    <img src="/avatar.png" alt="avatar usuario" />

                </section>
            </UserContent>
        </>
    );
}