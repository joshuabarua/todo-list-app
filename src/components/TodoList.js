import React from "react";
//Import components
import Todo from './Todo';

const TodoList = ({ todos, setTodos, filteredTodos}) => {
    
    return (
        <>
        <div className ="todo-container">
            <ul className="todo-list">
                {}
                {filteredTodos.map((todo) => (
                   <Todo 
                    todos={todos} 
                    key={todo.id} 
                    text={todo.text} 
                    todo={todo}
                    setTodos={setTodos} 
                    />  
                ))}
            </ul>
        </div>
        </>
    );
};

export default TodoList;