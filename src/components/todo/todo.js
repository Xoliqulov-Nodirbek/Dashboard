const ListItem = ({ children, item, todos, setTodos }) => {

  const { id, isComplated } = item;

  const handleDeleteTodo = (todoId) => {
    const filteredTodos = todos.filter(todo => todo.id !== todoId)
    setTodos([...filteredTodos]);
  }
  window.localStorage.setItem("todos", JSON.stringify(todos));

  const handleEditTodo = (todoId) => {
    const editText = prompt("Texnti kiriting?")
    console.log(editText);
    const findedTodo = todos.find(e => e.id === todoId)
    findedTodo.text = editText;
    setTodos([...todos])
  }
  window.localStorage.setItem("todos", JSON.stringify(todos));


  return (
    <li className="flex items-center justify-between mb-[3px] mt-[10px]" >
      <div className="ml-[30px]">
        <input defaultChecked={isComplated} className="mx-3 cursor-pointer" type="checkbox" />
        <span className="inline-block mx-3 text-[15px]" >{children}</span>
      </div>
      <div className="mr-[30px]">
        <button onClick={() => handleEditTodo(id)} className="border px-[12px] py-[5px] rounded bg-yellow-500 text-gray-700" >Edit</button>
        <button onClick={() => handleDeleteTodo(id)} className="border px-[12px] py-[5px] rounded bg-red-700 text-gray-700 ml-3" >Delete</button>
      </div>
    </li>
  )
}

export default ListItem;