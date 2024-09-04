import { useTodo } from "./todo.context"

export const TodoCreate = () => {
    const { todo, setTodo, addTodo } = useTodo();
  return (
    <div>
        <textarea value={todo} onChange={(event) => setTodo(event.target.value)}></textarea>
        <button onClick={addTodo}>Save</button>
    </div>
  )
}
