import React, { createContext, useContext, useState } from "react";
// 1
export const TodoContext = createContext({
    // todos:[] as string[],
    // todo: "",
    // setTodo: () => {}
});

// 3
interface TodoProviderProps {
    children: React.ReactNode;
}

// 2
export const TodoProvider = ({ children }: TodoProviderProps) => {
    const [todos, setTodos] = useState<string[]>([]);
    const [todo, setTodo] = useState("");

    function addTodo() {
        setTodos([...todos, todo]);
    }

    return <TodoContext.Provider value={{ todos, todo, setTodo, addTodo }}>{children}</TodoContext.Provider>
}



export const useTodo = () => useContext(TodoContext);