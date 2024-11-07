<template>
  <div>
    <h1>Vue CRUD</h1>
    <input v-model="newItem" placeholder="Add item" />
    <button @click="addItem">Add Item</button>
    <ul>
      <li v-for="item in items" :key="item.id">
        <input v-model="item.name" @input="updateItem(item.id, item.name)" />
        <button @click="deleteItem(item.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const items = ref([]);
    const newItem = ref('');

    const addItem = () => {
      items.value.push({ id: Date.now(), name: newItem.value });
      newItem.value = '';
    };

    const deleteItem = (id) => {
      items.value = items.value.filter(item => item.id !== id);
    };

    const updateItem = (id, name) => {
      const item = items.value.find(item => item.id === id);
      if (item) item.name = name;
    };

    return { items, newItem, addItem, deleteItem, updateItem };
  }
};
</script>
