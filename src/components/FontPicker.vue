<script setup>
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import { useBingoStore } from '@/stores/bingo'
const bingoStore = useBingoStore()
const { updateFont } = bingoStore
const { selectedFont } = storeToRefs(bingoStore)

const fonts = [
  { name: 'Comfortaa Variable', displayName: 'Comfortaa' },
  { name: 'Cinzel Variable', displayName: 'Cinzel' },
  { name: 'Dancing Script Variable', displayName: 'Dancing Script' },
  { name: 'DM Sans Variable', displayName: 'DM Sans' },
  { name: 'Indie Flower', displayName: 'Indie Flower' },
  { name: 'Kalam', displayName: 'Kalam' },
  { name: 'Merriweather', displayName: 'Merriweather' },
  { name: 'Neucha', displayName: 'Neucha' },
  { name: 'Oswald', displayName: 'Oswald' },
  { name: 'Permanent Marker', displayName: 'Permanent Marker' },
  { name: 'Roboto', displayName: 'Roboto' },
  { name: 'Schoolbell', displayName: 'Schoolbell' },
  { name: 'Twinkle Star', displayName: 'Twinkle Star' },
]

const setFontProperty = (font) => {
  document.documentElement.style.setProperty('--selected-font', font)
}

const onChangeFont = (font) => {
  //const font = event.target.value
  updateFont(font)
  setFontProperty(font)
}

onMounted(() => {
  setFontProperty(selectedFont.value)
})
</script>

<template>
  <div>
    <SelectLabel for="font-picker">Choose a Font:</SelectLabel>
    <Select
      id="font-picker"
      :defaultValue="selectedFont"
      :model-value="selectedFont"
      @update:modelValue="onChangeFont"
    >
      <SelectTrigger class="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem
          v-for="font in fonts"
          :key="font.name"
          :value="font.name"
          :style="{ fontFamily: font.name }"
        >
          {{ font.displayName }}
        </SelectItem>
      </SelectContent>
    </Select>
  </div>
</template>

<style>
:root {
  --selected-font: '';
}

select {
  font-family: var(--selected-font);
}
</style>
