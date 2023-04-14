import React, { useContext, useState } from 'react';
import { DataContext } from './DataProvider';
import styles from "./AssignmentCon.module.css";

export const List = () => {
  const data = useContext(DataContext);
  const [selected, setSelected] = useState(null);

  const handleSelect = id => {
    setSelected(data.find(item => item.id === id));
  };

  return (
    <div className={styles.list}>
      <ul>
        {data.map(item => (
          <li key={item.id} onClick={() => handleSelect(item.id)}>
            {item.title}
          </li>
       ))}
      </ul>
      <Details selected={selected} />
    </div>
  );
};

export const Details = () => {
  const selected = useContext(DataContext);
  console.log(selected.id);

  if (!selected) {
    return <div>Please select an item.</div>;
  }

  return (
    <div className= {styles.details}>
      <h2>{selected.title}</h2>
      <p>{selected.body}</p>
    </div>
  );
};
