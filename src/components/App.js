import React, { useState } from 'react';

const DynamicForm = () => {
  const [fields, setFields] = useState([{ name: '', age: '' }]);

  const handleChange = (index, event) => {
    const { name, value } = event.target;
    const newFields = [...fields];
    newFields[index][name] = value;
    setFields(newFields);
  };

  const handleAddField = () => {
    setFields([...fields, { name: '', age: '' }]);
  };

  const handleRemoveField = (index) => {
    const newFields = [...fields];
    newFields.splice(index, 1);
    setFields(newFields);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(fields);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {fields.map((field, index) => (
          <div key={index}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={field.name}
              onChange={(event) => handleChange(index, event)}
            />
            <input
              type="text"
              name="age"
              placeholder="Age"
              value={field.age}
              onChange={(event) => handleChange(index, event)}
            />
            <button type="button" onClick={() => handleRemoveField(index)}>
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={handleAddField}>
          Add More...
        </button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DynamicForm;
