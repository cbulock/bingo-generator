<script setup>
import Square from '@/components/Square.vue'

defineProps({
  items: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <div class="bingo-squares">
    <template v-for="n in 25" :key="n">
      <Square v-if="n < 13" :square="n">{{ items[n - 1] }}</Square>
      <Square v-else-if="n === 13" :square="n">⭐</Square>
      <Square v-else :square="n">{{ items[n - 2] }}</Square>
    </template>
  </div>
</template>

<style scoped>
.bingo-squares {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  align-items: center;
  justify-items: center;
  width: fit-content;
}
</style>
