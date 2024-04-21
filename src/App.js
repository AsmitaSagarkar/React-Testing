import { useState, useEffect } from "react";

import { Data } from "./data";

const App = () => {
  const [data, setData] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [id, setId] = useState(0);
  const [update, isUpdate] = useState(false);

  useEffect(() => {
    setData(Data);
  }, []);
  const handleSave = (e) => {
    e.preventDefault();
    const save = [...data];
    const newObj = {
      id: Data.length + 1,
      firstName: firstName,
      lastName: lastName,
      age: age,
    };
    save.push(newObj);
    setData(save);
    handleClear();
  };
  const handleClear = () => {
    setFirstName("");
    setLastName("");
    setAge("");
    isUpdate(false);
  };

  const handleEdit = (id) => {
    const editData = data.filter((item) => item.id === id);
    if (editData !== undefined) {
      setId(id);
      isUpdate(true);
      setFirstName(editData[0].firstName);
      setLastName(editData[0].lastName);
      setAge(editData[0].age);
    }
  };

  const handleUpdate = () => {
    const ind = data
      .map((item) => {
        return item.id;
      })
      .indexOf(id);
    console.log(ind);

    const update = [...data];
    update[ind].firstName = firstName;
    update[ind].lastName = lastName;
    update[ind].age = age;

    setData(update);
    handleClear();
  };

  const handleDelete = (id) => {
    if (id > 0) {
      const deleteData = data.filter((item) => item.id !== id);
      setData(deleteData);
    }
  };

  return (
    <>
      <div>
        <label>
          First Name :
          <input
            type="text"
            placeholder="Enter first Name"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          />
        </label>
      </div>

      <div>
        <label>
          Last Name :
          <input
            type="text"
            placeholder="Enter Last Name"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />
        </label>
      </div>

      <div>
        <label>
          Age :
          <input
            type="text"
            placeholder="Enter Age"
            onChange={(e) => setAge(e.target.value)}
            value={age}
          />
        </label>
      </div>
      {!update ? (
        <button onClick={(e) => handleSave(e)}>Save</button>
      ) : (
        <button onClick={() => handleUpdate()}>Update</button>
      )}

      <button onClick={() => handleClear()}>Clear</button>

      <table>
        <thead>
          <tr>
            <td>Id</td>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Age</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {data.map((items, ind) => {
            return (
              <tr key={ind}>
                <td>{items.id}</td>
                <td>{items.firstName}</td>
                <td>{items.lastName}</td>
                <td>{items.age}</td>
                <td>
                  <button onClick={() => handleEdit(items.id)}>Edit</button>
                  <button onClick={() => handleDelete(items.id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};






export default App;
