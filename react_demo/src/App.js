import React, { useState } from 'react';

function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  
  const handleAdd = () => {
    setItems([...items, { id: Date.now(), name: newItem }]);
    setNewItem('');
  };

  const handleDelete = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const handleUpdate = (id, updatedName) => {
    setItems(items.map(item => (item.id === id ? { ...item, name: updatedName } : item)));
  };

  return (
    <div>
      <h1>React CRUD</h1>
      <input value={newItem} onChange={(e) => setNewItem(e.target.value)} />
      <button onClick={handleAdd}>Add Item</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <input
              value={item.name}
              onChange={(e) => handleUpdate(item.id, e.target.value)}
            />
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
