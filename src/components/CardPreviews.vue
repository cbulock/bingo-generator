<script setup>
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import BingoSquares from './BingoSquares.vue'
import CardHeader from './CardHeader.vue'

import { useBingoStore } from '@/stores/bingo'
const bingoStore = useBingoStore()
const { cardTitle } = storeToRefs(bingoStore)

import { useItemsStore } from '@/stores/items'
const itemsStore = useItemsStore()
const { items } = storeToRefs(itemsStore)

const numberOfCards = computed(() => {
  const itemsLength = items.value?.length || 1
  return Math.max(1, Math.ceil(itemsLength / 24))
})

const paginatedItems = (index) => {
  const start = index * 24
  return items.value?.slice(start, start + 24)
}
</script>

<template>
  <div class="bingo-card">
    <CardHeader :title="cardTitle" />
    <template v-for="(card, index) of numberOfCards" :key="index">
      <BingoSquares class="bingo-squares border border-gray-600" :items="paginatedItems(index)" />
    </template>
  </div>
</template>

<style scoped>
.bingo-squares {
  margin-bottom: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}
</style>
