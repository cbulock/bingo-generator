<script setup>
import { ref } from 'vue'
import { Minus, Save } from 'lucide-vue-next'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import { useItemsStore } from '@/stores/items'
const { updateItem, removeItem } = useItemsStore()

const props = defineProps(['index', 'item'])

const item = ref(props.item)
</script>

<template>
  <div class="square-value">
    <Input type="text" v-model="item" />
    <Button @click="updateItem({ index, item })"><Save /></Button>
    <Button @click="removeItem(index)" variant="destructive"><Minus /></Button>
  </div>
</template>

<style scoped>
.square-value {
  display: flex;
  align-items: center;
  gap: 8px;
}
</style>
