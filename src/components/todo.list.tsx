// import { useContext } from "react"
// import { TodoContext } from "./todo.context"

import { useTodo } from "./todo.context";

export const TodoList = () => {
    // const { todos } = useContext(TodoContext);

    const { todos } = useTodo();

    return (
        <div>
            <div>Todo:</div>
            <div>
                {todos.map((todo) => {
                    return <div key={todo}>{todo}</div>
                })}
            </div>
        </div>
    )
}
