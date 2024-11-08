<script>
  let items = [];
  let newItem = '';

  function addItem() {
    items = [...items, { id: Date.now(), name: newItem }];
    newItem = '';
  }

  function deleteItem(id) {
    items = items.filter(item => item.id !== id);
  }

  function updateItem(id, name) {
    items = items.map(item => (item.id === id ? { ...item, name } : item));
  }
</script>

<div>
  <h1>Svelte</h1>
  <input bind:value={newItem} placeholder="Add item" />
  <button on:click={addItem}>Add Item</button>
  <ul>
    {#each items as item (item.id)}
      <li>
        <input bind:value={item.name} on:input={() => updateItem(item.id, item.name)} />
        <button on:click={() => deleteItem(item.id)}>Delete</button>
      </li>
    {/each}
  </ul>
</div>
