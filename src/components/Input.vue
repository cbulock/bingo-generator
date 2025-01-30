<script setup>
import { ref } from 'vue'

import { useBingoStore } from '@/stores/bingo'
const { cardTitle, updateTitle } = useBingoStore()

import { useItemsStore } from '@/stores/items'
const { items, addItem, updateItem, removeItem } = useItemsStore()

const newItem = ref('')

const add = (item) => {
  if (item) {
    addItem(item)
    newItem.value = ''
  }
}
</script>

<template>
  <div class="input">
    <input type="text" :value="cardTitle" />
    <button @click="updateTitle($event.target.previousElementSibling.value)">Update</button>

    <div v-for="(item, index) in items" :key="item">
      <input type="text" :value="item" />
      <button @click="updateItem({ index, item: $event.target.previousElementSibling.value })">
        Update
      </button>
      <button @click="removeItem(index)">Remove</button>
    </div>

    <input type="text" v-model="newItem" />
    <button @click="add(newItem)">Add</button>
  </div>
</template>

<style scoped>
.input {
}
</style>
