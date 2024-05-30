import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Todos from "./Todos";

function Home() {

    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState(["todo1", "todo2", "todo3"]);

    const increment = () => {

        setCount((c) => c + 1);
    }


    return (
        <>

            <h2>Home</h2>
            <Link to="/blogs">Click Here</Link>

            <Todos todos={todos} />
            <hr />

            <div>
                Count: {count}
                <button type="button" onClick={increment}>+</button>
            </div>
            <Outlet />
        </>
    );
};

export default Home;