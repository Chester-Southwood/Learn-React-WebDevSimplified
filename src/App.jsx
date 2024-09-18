import { NewTodoForm } from './NewTodoForm'
import { TodoList } from './TodoList'
import {useEffect, useState} from 'react'

function App() {
  const [todos, setTodos] = useState(()=> {
    const itemsFromLocalStorage = localStorage.getItem("ITEMS");
    return itemsFromLocalStorage == null ? [] : JSON.parse(itemsFromLocalStorage)
  })

  useEffect(()=>{
    localStorage.setItem("ITEMS", JSON.stringify(todos))
    console.log("Effect used")
  }, [todos])

  function toggleTodo(id, isChecked) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          console.log(isChecked)
          return {...todo, completed:isChecked}
        }
        return todo
      })
    })
  }
  
  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(item => item.id !== id)
    })
  }
  
  function addTodo(newItem){
    setTodos(currentTodos => {
      if (newItem === "") return [...currentTodos]
      console.log("add " + newItem)
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(),
          title: newItem,
          completed: false
        }
      ]
    })
  }
  
  return ( // <> are fragments to allow return of multiple tags instead of being wrapped in a div
    <> 
      <NewTodoForm addTodo={addTodo}/>
      <h1 className="header">Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </>
    )
}

export default App
