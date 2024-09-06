import { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";
import { AddTodo } from "./MyComponents/AddTodo";
import { About } from "./MyComponents/About";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    setTodos(todos.filter((e) => e !== todo));
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, deadline, status) => {
    let sno = todos.length === 0 ? 0 : todos[todos.length - 1].sno + 1;
    const myTodo = { sno, title, deadline, status };
    setTodos([...todos, myTodo]);
  }

  const [todos, setTodos] = useState(initTodo);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleShowForm = () => {
    setShowForm(true);
  }

  const handleCancel = () => {
    setShowForm(false);
  }

  return (
    <>
      <Router>
        {/* Bootstrap Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">Todo App</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">About</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Main content */}
        <Routes>
          <Route path="/" element={
            <>
              {!showForm ? (
                <button onClick={handleShowForm} className="btn btn-primary mt-3">
                  Add a new todo
                </button>
              ) : (
                <AddTodo addTodo={addTodo} onCancel={handleCancel} />
              )}
              <Todos todos={todos} onDelete={onDelete} />
            </>
          } />
          <Route path="/about" element={<About />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
