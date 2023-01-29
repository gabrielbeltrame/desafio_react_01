import { Header } from './components/Header';
import { NewTodo } from './components/NewTodo';

import styles from './App.module.css';

import './global.css';

const todos = [
    {
        id: 1,
        done: false,
        text: 'Comprar caneta'
    }
]

export function App() {
  return (
    <div>
        <Header />
        <div className={styles.wrapper}>
            <NewTodo />
        </div>
    </div>
  )
}

