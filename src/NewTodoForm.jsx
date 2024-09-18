import {useState} from 'react'

export function NewTodoForm({addTodo}) {
    const [newItem, setNewItem] = useState("")

    function handleSubmit(e) {
      e.preventDefault();
      if (newItem === "") return;
      
      addTodo(newItem)
      setNewItem("")
    }

    return (
        <form className="new-item-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input type="text" id="item" value={newItem} placeholder='Please Enter a TODO' onChange={e=>setNewItem(e.target.value)}></input>
        </div>
        <button className="btn">Add</button>
      </form>
    )
}