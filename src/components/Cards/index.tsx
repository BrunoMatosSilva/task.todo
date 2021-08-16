import { ContentCards, ContentTitle } from "../../styles/Cards";
import { BiEdit } from "react-icons/Bi";
import { FiCheckSquare } from "react-icons/Fi";
import { AiOutlineCloseSquare } from "react-icons/Ai";

export function Cards() {
    return (
        <>
            <ContentTitle>
                <h2>Tarefas</h2><span>10 ao total</span>
            </ContentTitle>
            <ContentCards>
                <div className="bgTask pending">
                    <div>
                        <h3>Caminhada</h3>
                        <span>
                            <button><BiEdit className="editButton" /></button>
                            <button><FiCheckSquare className="completedButton" /></button>
                            <button><AiOutlineCloseSquare className="cancelButton" /></button>
                        </span>
                    </div>
                    <div>
                        <p>Andar 1 hora pela manhã.</p>
                        <time>
                            10/08/2021
                        </time>
                    </div>
                </div>

                <div className="bgTask completed">
                    <div>
                        <h3>Caminhada</h3>
                        <span>
                            <button><BiEdit className="editButton" /></button>
                            <button><FiCheckSquare className="completedButton" /></button>
                            <button><AiOutlineCloseSquare className="cancelButton" /></button>
                        </span>
                    </div>
                    <div>
                        <p>Andar 1 hora pela manhã.</p>
                        <time>
                            10/08/2021
                        </time>
                    </div>
                </div>

                <div className="bgTask cancelled">
                    <div>
                        <h3>Caminhada</h3>
                        <span>
                            <button><BiEdit className="editButton" /></button>
                            <button><FiCheckSquare className="completedButton" /></button>
                            <button><AiOutlineCloseSquare className="cancelButton" /></button>
                        </span>
                    </div>
                    <div>
                        <p>Andar 1 hora pela manhã.</p>
                        <time>
                            10/08/2021
                        </time>
                    </div>
                </div>
            </ContentCards>
        </>
    );
}