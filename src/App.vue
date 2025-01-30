<script setup>
import CardPreviews from '@/components/CardPreviews.vue'
import Input from '@/components/Input.vue'
</script>

<template>
  <main>
    <CardPreviews />
    <Input />
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
