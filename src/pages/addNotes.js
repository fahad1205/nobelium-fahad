import React, { useState } from "react";

export default function AddNotes() {
  const [data, setData] = useState("");
  const [list, setList] = useState([]);

  function handleAdd() {
    setList([...list, data]);
    setData("");
  }

  return (
    <>
      <h2>Add Notes Page</h2>
      <div>
        <hr></hr>
        <input
          placeholder="add notes"
          value={data}
          onChange={(e) => {
            setData(e.target.value);
          }}
        />
        <button onClick={handleAdd}>ADD ITEM</button>
      </div>
      <div>
      <h2>NOTES</h2>
        <ul>
          {list !==[] && list.map((ls, index) => (
            <li key={index}>{ls}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
