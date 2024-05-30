import { memo } from "react";

function Todos({todos}){

    return(
        <>
        <h4>My Todos</h4>

        {todos.map((todo, index)=>{
            return <p>{todo}</p>
        })}
        </>
    )
}

export default memo(Todos);