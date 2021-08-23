import useAuth from "../../hooks/useAuth";
import { UserContent } from "./styles";

export function User(props) {

    const { user, session } = useAuth();

    return (
        <>
            <UserContent>
                <section>

                    <div className="contentName">
                        <h2>Olá, {user.displayName}</h2>
                        <p>Mantenha suas tarefas em ordem</p>
                    </div>
                    <img src={user.photoURL} alt="avatar usuario" />

                </section>
            </UserContent>
        </>
    );
}