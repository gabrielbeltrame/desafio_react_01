import styles from './NewTodo.module.css';
import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, useState } from 'react';
import { Todo } from './Todo';

export function NewTodo() {
    const [todos, setTodos] = useState([
        {key: 1, content: 'Comprar banana', done: false},
        {key: 2, content: 'Comprar abacaxi', done: false}
    ])

    const [newTodoText, setNewTodoText] = useState('');

    function handleCreateNewTodo(event: FormEvent) {
        event.preventDefault()

        setTodos([...todos, {key: Math.random(), content: newTodoText, done: false}]);
        setNewTodoText('');
    }

    function handleNewTodoChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('');
        setNewTodoText(event.target.value);
    }

    function deleteTodo(todoToDelete: string) {
        const todosWithoutDeletedOne = todos.filter(todo => {
            return todo.content !== todoToDelete;
        })

        setTodos(todosWithoutDeletedOne);
    }

    const isNewTodoEmpty = newTodoText.length === 0;

    return (
        <div>
            <div>
               <form onSubmit={handleCreateNewTodo} className={styles.todoForm}>
                   <textarea
                        name="todo"
                        placeholder="Adicione uma nova tarefa"
                        value={newTodoText}
                        onChange={handleNewTodoChange}
                        required
                    />

                   <button type="submit" disabled={isNewTodoEmpty} title="Criar">
                       Criar <PlusCircle />
                   </button>
               </form>
            </div>
            <div className={styles.info}>
                <div>
                    <p className={styles.blue}>Tarefas criadas</p>
                    <span>{todos.length}</span>
                </div>
                <div>
                    <p className={styles.purple}>Concluidas</p>
                    <span>{todos.filter(todo => todo.done).length} de {todos.length}</span>
                </div>
            </div>
            <main className={styles.todoList}>
            {todos.map(todo => {
                return (
                        <Todo key={todo.key} content={todo.content} done={todo.done} onDeleteTodo={deleteTodo} />
                        )
            })}
            </main>
        </div>
    )
}