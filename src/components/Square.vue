<script setup>
import { ref, onMounted, onUpdated, nextTick } from 'vue'

const textRef = ref(null)
const boxRef = ref(null)

const fitText = () => {
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
</script>

<template>
  <div ref="boxRef" class="square">
    <span ref="textRef" class="content">
      <slot />
    </span>
  </div>
</template>

<style scoped>
.square {
  border: 1px solid black;
  width: 5rem;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  padding: 0.5rem; /* Adjust padding as needed */
  box-sizing: border-box; /* Ensure padding does not add extra size */
}

.content {
  display: block;
  white-space: normal; /* Allow text wrapping */
  word-break: normal;
  line-height: 1.2; /* Adjust for better readability */
  text-align: center;
}
</style>
