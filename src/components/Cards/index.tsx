import { ContentCards, ContentTitle } from "./styles";
import { BiEdit } from "react-icons/Bi";
import { FiCheckSquare } from "react-icons/Fi";
import { AiOutlineCloseSquare } from "react-icons/Ai";

type CardProps = {
    title: string;
    description: string;
    date: string;
}

export function Cards({
    title,
    description,
    date
}: CardProps) {
    return (
        <>
            <ContentTitle>
                <h2>Tarefas</h2><span>10 ao total</span>
            </ContentTitle>
            <ContentCards>
                <div className="bgTask pending">
                    <div>
                        <h3>{title}</h3>
                        <span>
                            <button><BiEdit className="editButton" /></button>
                            <button><FiCheckSquare className="completedButton" /></button>
                            <button><AiOutlineCloseSquare className="cancelButton" /></button>
                        </span>
                    </div>
                    <div>
                        <p>{description}</p>
                        <time>
                            {date}
                        </time>
                    </div>
                </div>
            </ContentCards>
        </>
    );
}