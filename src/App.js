import "./App.css";
import { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [from, setFrom] = useState({
    todo: "",
    status: false,
  });

  const resetInput = () => {
    setFrom({
      todo: "",
      status: false,
    });
  };

  const handleChange = (e) => {
    setFrom({
      ...from,
      todo: e.target.value,
      status: false,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (from.index || from.index === 0) {
      const newTodo = todoList.map((e, i) => {
        if (i === from.index) {
          return from;
        } else {
          return e;
        }
      });
      setTodoList(newTodo);
    } else {
      let data = todoList;
      data.push(from);
      setTodoList(data);
    }

    resetInput();
  };
  console.log("todolist", todoList);

  const handleCheck = (index) => {
    const newTodo = todoList.map((e, i) => {
      if (i === index) {
        return {
          todo: e.todo,
          status: true,
        };
      } else {
        return e;
      }
    });
    setTodoList(newTodo);
  };

  function deleteArray(value) {
    let data = todoList.filter(function (item) {
      return item.todo !== value;
    });

    setTodoList(data);
  }

  const handleEdit = (index) => {
    const detailTodo = {
      index,
      ...todoList[index],
    };
    setFrom(detailTodo);
  };

  return (
    <div>
      <div className="jumbotroon">
        <h1>Todo List App</h1>
        <form className="from" method="post" onSubmit={handleSubmit}>
          <input type="text" name="todo" value={from.todo} onChange={handleChange} placeholder="Todo...." />
          <button type="submit" className="btn-submit">
            Submit
          </button>
        </form>
      </div>
      <div className="content">
        {todoList.map((e, i) => {
          return (
            <div key={i} className="card">
              <div className="action">
                <input type="checkbox" checked={e.status ? true : false} onChange={() => handleCheck(i)} />
              </div>
              <div className="text">{e.todo}</div>
              <span onClick={() => deleteArray(e.todo)}>Delete</span>
              <div className="button-action">
                <button className="btn-edit" onClick={() => handleEdit(i)}>
                  Edit
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
