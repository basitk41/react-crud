import React from "react";
const Form = ({ form, id, handleChange, handleSubmit }) => {
  return (
    <div className="col-sm-6">
      <h1 align="center">Form</h1>
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          className="form-control"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Age</label>
        <input
          type="number"
          className="form-control"
          name="age"
          value={form.age}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <button className="btn btn-success" onClick={handleSubmit}>
          {id ? "Update" : "Add"}
        </button>
      </div>
    </div>
  );
};

export default Form;
