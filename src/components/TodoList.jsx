import firebase from "firebase/app";
import "firebase/firestore";
import React, { useState, useEffect } from "react";


const TodoList = ({ user }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection("todos")
      .where("userId", "==", user.uid)
      .onSnapshot(snapshot => {
        const newTodos = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setTodos(newTodos);
      });
    return () => unsubscribe();
  }, [user]);

  const addTodo = todo => {
    firebase
      .firestore()
      .collection("todos")
      .add({
        userId: user.uid,
        task: todo,
        completed: false
      });
  };

  return (
    <div>
      <h1>My Todo List</h1>
      <form
        onSubmit={event => {
          event.preventDefault();
          addTodo(event.target.todo.value);
          event.target.reset();
        }}
      >
        <input type="text" name="todo" />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.task}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todolist;