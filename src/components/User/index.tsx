import { useAuth } from "../../hooks/useAuth";
import { UserContent } from "./styles";

export function User(props) {

    const { user } = useAuth();

    return (
        <>
            <UserContent>
                <section>

                    <div className="contentName">
                        <h2>Olá, {user?.name}</h2>
                        <p>Mantenha suas tarefas em ordem</p>
                    </div>
                    <img src={user?.avatar} alt="avatar usuario" />


                </section>
            </UserContent>
        </>
    );
}