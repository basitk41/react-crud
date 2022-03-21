import React from "react";
const Table = ({ users, handleDelete, handleEdit }) => {
  const notFound = (
    <tr>
      <td></td>
      <td></td>
      <td>No data found</td>
      <td></td>
    </tr>
  );
  return (
    <div className="col-sm-6">
      <h1 align="center">Table</h1>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>
                <button
                  className="btn btn-info"
                  onClick={() => handleEdit(user.id)}
                >
                  Edit
                </button>{" "}
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {users.length === 0 && notFound}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
