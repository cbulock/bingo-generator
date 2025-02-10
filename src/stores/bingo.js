import { computed, ref } from 'vue'
import { defineStore, storeToRefs } from 'pinia'
import { useItemsStore } from '@/stores/items'

export const useBingoStore = defineStore('bingo', () => {
  const cardTitle = ref('Bingo Card');
  const numOfCards = ref(5);
  const selectedFont = ref('DM Sans Variable');

  const setNumOfCards = (num) => {
    numOfCards.value = num;
  }

  const updateFont = (font) => {
    selectedFont.value = font;
  }

  const updateTitle = (title) => {
    cardTitle.value = title;
  };

  const cards = computed(() => {
    const itemsStore = useItemsStore()
    const { items } = storeToRefs(itemsStore)

    const generateRandomizedItems = () => {
      let shuffledItems = [...items.value];
      while (shuffledItems.length < 24) {
        shuffledItems.push('');
      }
      shuffledItems = shuffledItems.sort(() => 0.5 - Math.random());
      return shuffledItems.slice(0, 24);
    };

    return Array.from({ length: numOfCards.value }, generateRandomizedItems);
  });

  return { cards, cardTitle, numOfCards, selectedFont, setNumOfCards, updateFont, updateTitle }
}, {
  persist: {
    storage: localStorage,
  }
})
