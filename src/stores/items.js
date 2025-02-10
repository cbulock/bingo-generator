import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useItemsStore = defineStore('items', () => {
  const items = ref([]);

  const addItem = (item) => {
    items.value.push(item);
  };
  const updateItem = ({ index, item }) => {
    items.value[index] = item;
  };
  const removeItem = (index) => {
    items.value.splice(index, 1);
  };
  return { addItem, items, removeItem, updateItem }
}, {
  persist: {
    storage: localStorage,
  }
})
