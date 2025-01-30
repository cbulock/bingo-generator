import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useBingoStore = defineStore('bingo', () => {
  const cardTitle = ref('Bingo Card');

  const updateTitle = (title) => {
    cardTitle.value = title;
  };
  return { cardTitle, updateTitle }
}, {
  persist: {
    storage: localStorage,
  }
})
