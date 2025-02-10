<script setup>
import { nextTick, ref, onMounted, onUpdated, watch } from 'vue'
import { storeToRefs } from 'pinia'

import { useBingoStore } from '@/stores/bingo'
const bingoStore = useBingoStore()
const { selectedFont } = storeToRefs(bingoStore)

defineProps({
  square: {
    type: Number,
    required: true,
  },
})

const textRef = ref(null)
const boxRef = ref(null)

const fitText = async () => {
  await nextTick()
  if (!textRef.value || !boxRef.value) return

  const style = window.getComputedStyle(boxRef.value)
  const paddingX = parseFloat(style.paddingLeft) + parseFloat(style.paddingRight)
  const paddingY = parseFloat(style.paddingTop) + parseFloat(style.paddingBottom)

  const maxWidth = boxRef.value.clientWidth - paddingX
  const maxHeight = boxRef.value.clientHeight - paddingY

  let fontSize = 50 // Start large
  textRef.value.style.fontSize = `${fontSize}px`
  textRef.value.style.whiteSpace = 'normal' // Allow wrapping

  // Shrink text until it fits inside the box while wrapping
  while (
    (textRef.value.scrollWidth > maxWidth || textRef.value.scrollHeight > maxHeight) &&
    fontSize > 10
  ) {
    fontSize -= 1
    textRef.value.style.fontSize = `${fontSize}px`
  }

  // Increase text size slightly if there's extra space
  while (
    textRef.value.scrollWidth < maxWidth &&
    textRef.value.scrollHeight < maxHeight &&
    fontSize < 50
  ) {
    fontSize += 1
    textRef.value.style.fontSize = `${fontSize}px`
  }
}

onMounted(async () => {
  await nextTick() // Ensure DOM is rendered before measuring
  fitText()
})

onUpdated(() => {
  fitText() // Adjust when text updates
})

watch(() => selectedFont.value, fitText)
</script>

<template>
  <div ref="boxRef" class="square border border-gray-600" :class="`square-${square}`">
    <span ref="textRef" class="content">
      <slot />
    </span>
  </div>
</template>

<style scoped>
.square {
  font-family: var(--selected-font);
  width: 5rem;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  padding: 0.5rem;
  box-sizing: border-box;
}

.content {
  display: block;
  white-space: normal;
  word-break: normal;
  line-height: 1.2;
  text-align: center;
}

.square-1 {
  border-top-left-radius: 11px;
}
.square-5 {
  border-top-right-radius: 11px;
}
.square-21 {
  border-bottom-left-radius: 11px;
}
.square-25 {
  border-bottom-right-radius: 11px;
}
</style>
