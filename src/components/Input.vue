<script setup>
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import FontPicker from '@/components/FontPicker.vue'
import SquareValue from '@/components/SquareValue.vue'

import { useBingoStore } from '@/stores/bingo'
const { cardTitle, numOfCards, setNumOfCards, updateTitle } = useBingoStore()

import { useItemsStore } from '@/stores/items'
const { items, addItem } = useItemsStore()

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
    <Label for="numOfCards">Number of Cards</Label>
    <Input type="number" id="numOfCards" :model-value="numOfCards" />
    <Button @click="setNumOfCards($event.target.previousElementSibling.value)">Update</Button>

    <FontPicker />

    <Input type="text" :model-value="cardTitle" />
    <Button @click="updateTitle($event.target.previousElementSibling.value)">Update</Button>

    <SquareValue v-for="(item, index) in items" :key="item" :index="index" :item="item" />

    <Input type="text" v-model="newItem" />
    <Button @click="add(newItem)">Add</Button>
  </div>
</template>

<style scoped>
.input {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
