import TicketsLine from "../ticketsLine/ticketsLine";
import ListItem from "../todo/todo";
import { useState } from "react";
import List from "../todo/lisst";

const Tickets = () => {

  const [todos, setTodos] = useState(JSON.parse(window.localStorage.getItem("todos")) || [])

  const handleInputValue = (evt) => {
    if (evt.code === "Enter") {
      let newTodo = {
        id: todos.at(-1)?.id ? todos.at(-1).id + 1 : 1,
        text: evt.target.value,
        isComplated: false
      }
      setTodos([...todos, newTodo]);
      evt.target.value = null;
    }
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }

  return (
    <>
      <div className="flex items-start justify-between ml-[285px] mt-[30px] mr-[30px] mb-[30px]">
        <div className="max-w-[550px] w-full border-[1px] border-solid rounded-lg bg-white">
          <div className="flex justify-between items-center p-[30px] pb-[20px]">
            <div>
              <h2 className="font-semibold text-[22px] text-[#252733] leading-6 mb-[10px]">Unresolved tickets</h2>
              <p className="font-normal text-[#9FA2B4]">Group:<span className="inline-block text-blue-400 ml-[10px]">Support</span></p>
            </div>
            <a className="font-normal text-[#3751FF] text-[15px] leading-5 hover:underline" href="https://">View details</a>
          </div>
          <TicketsLine 
            title="Waiting on Feature Request" 
            text="4238"
          />
          <TicketsLine 
            title="Awaiting Customer Response" 
            text="1005"
          />
          <TicketsLine 
            title="Awaiting Developer Fix" 
            text="914"
          />
          <TicketsLine 
            title="Pending" 
            text="281"
          />
        </div>
        <div className="max-w-[550px] w-full border-[1px] border-solid rounded-lg bg-white">
          <div className="flex justify-between items-center p-[30px] pb-[20px]">
            <div>
              <h2 className="font-semibold text-[22px] text-[#252733] leading-6 mb-[10px]">Tasks</h2>
              <p className="font-normal text-[#9FA2B4]">Today</p>
            </div>
            <a className="font-normal text-[#3751FF] text-[15px] leading-5 hover:underline" href="https://">View all</a>
          </div>
          <div className="mt-[20px] mb-[30px]">
            <input className="ml-[30px] border w-[300px] py-[5px] px-[10px]" onKeyUp={handleInputValue} type="text" placeholder='Enter your task...' />
            {
              todos.length && <List>
                {
                  todos.map(e => (
                    <ListItem todos={todos} setTodos={setTodos} key={e.id} item={e} >{e.text}</ListItem>
                  ))
                }
            </List>
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Tickets;