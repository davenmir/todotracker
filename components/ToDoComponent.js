import React, { useState, useEffect } from 'react';

const TodoComponent = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [username, setUsername] = useState('');

  // Load items from local storage when component mounts
  useEffect(() => {
    const data = localStorage.getItem('items');

    if (data) {
      setItems(JSON.parse(data));
    }
  }, []);

  // Save items to local storage whenever 'items' changes
  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  const handleAddItem = () => {
    const today = new Date();
    const date = `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`;
    const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
    const dateTime = `${date} ${time}`;

    setItems([
      ...items,
      {
        id: items.length,
        name: newItem,
        person: username,
        dateTime: dateTime,
      },
    ]);
    setNewItem('');
    setUsername('');
  };

  return (
    <div>
      <input
        type='text'
        value={username}
        maxLength={100}
        onChange={({ target }) => setUsername(target.value)}
        placeholder='Your name'
      />
      <input
        type='text'
        value={newItem}
        onChange={({ target }) => setNewItem(target.value)}
        placeholder='New item'
      />
      <button onClick={handleAddItem}>Add</button>
      <h2>Todo List</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - Added by {item.person} on {item.dateTime}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoComponent;
