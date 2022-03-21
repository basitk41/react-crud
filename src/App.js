import React, { useState } from "react";
import Form from "./components/form";
import Table from "./components/table";
const App = () => {
  const formData = { name: "", age: "" };
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState(formData);
  const [id, setId] = useState(null);
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = () => {
    if (id) {
      const data = [...users];
      const index = data.findIndex((user) => user.id === id);
      data.splice(index, 1, form);
      setUsers(data);
      setId(null);
    } else {
      form.id = users.length + 1;
      setUsers([...users, form]);
    }
    setForm(formData);
    // const data = [...users];
    // data.push(form);
    // setUsers(data);
  };
  const handleDelete = (id) => {
    const data = users.filter((user) => user.id !== id);
    setUsers(data);
  };
  const handleEdit = (id) => {
    const data = users.find((user) => user.id === id);
    setForm(data);
    setId(id);
  };

  return (
    <div className="container">
      <div className="row">
        <Form
          form={form}
          id={id}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <Table
          users={users}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default App;
