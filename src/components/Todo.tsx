import { Trash } from 'phosphor-react';
import styles from './Todo.module.css';

interface NewTodoProps {
    content: string;
    done: boolean;
    onDeleteTodo: (comment: string) => void;
}

export function Todo({content, done, onDeleteTodo}: NewTodoProps) {

    function handleCompleteTodo() {
        done = !done;
    }

    function handleDeleteTodo() {
        onDeleteTodo(content);
    }

    return (
        <div className={styles.todoList}>
            <input type='checkbox' onClick={handleCompleteTodo}></input>
            <p>{content}</p>
            <button type='button' onClick={handleDeleteTodo}>
                <Trash size={24} />
            </button>
        </div>
    )
}