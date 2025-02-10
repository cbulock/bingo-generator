<script setup>
// TODO: this component and CardPreviews.vue are very similar, consider refactoring
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import BingoSquares from './BingoSquares.vue'
import CardHeader from './CardHeader.vue'

import { useBingoStore } from '@/stores/bingo'
const bingoStore = useBingoStore()
const { cards, cardTitle } = storeToRefs(bingoStore)
</script>

<template>
  <div v-for="(card, index) in cards" class="bingo-card" :key="index">
    <CardHeader :title="cardTitle" />
    <BingoSquares class="bingo-squares border border-gray-600" :items="card" />
  </div>
</template>

<style scoped>
.bingo-squares {
  margin-bottom: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}
</style>
