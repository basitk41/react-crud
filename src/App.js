import React, { useState } from "react";
import Form from "./components/form";
import Table from "./components/table";
const App = () => {
  const formData = { name: "", age: "" };
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState(formData);
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = () => {
      form.id = users.length + 1;
      setUsers([...users, form]);
    setForm(formData);
    // const data = [...users];
    // data.push(form);
    // setUsers(data);
  };
  return (
    <div className="container">
      <div className="row">
        <Form
          form={form}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <Table
          users={users}
        />
      </div>
    </div>
  );
};

export default App;
