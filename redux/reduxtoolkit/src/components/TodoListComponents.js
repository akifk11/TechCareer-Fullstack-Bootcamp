// todolarımı burada listeleyeceğim
import React from "react";
import { useDispatch, useSelector } from "react-redux"
import { removeTodo, todoCompleted } from "../store/feature/todo/TodoSlice"

function TodoListComponents() {

    const todoList = useSelector(state => state.todoReducer.todos)
    const theme = useSelector(state => state.themeReducer.value)
    const dispatch = useDispatch()

    const onDelete = (id) => {
        dispatch(removeTodo(id))
    }

    return <div style={{ color: theme }}>
        <h1>TodoListComponents</h1>
        <ul>
            {
                todoList.map((todo, index) => (
                    <li key={index}>
                        <span>{todo.title}</span>--
                        <span>{String(todo.completed)}</span>--
                        <button onClick={() => onDelete(index)}>delete</button>
                        <button onClick={() => dispatch(todoCompleted(index))}>{String(todo.completed) === "false" ? "In progress" : "Completed"}</button>
                    </li>
                )
                )}
        </ul>
    </div>;
}

export default TodoListComponents;
