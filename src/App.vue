<script setup>
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Cards from '@/components/Cards.vue'
import CardPreviews from '@/components/CardPreviews.vue'
import Input from '@/components/Input.vue'
</script>

<template>
  <main>
    <Tabs default-value="preview">
      <TabsList>
        <TabsTrigger value="preview"> Preview </TabsTrigger>
        <TabsTrigger value="cards"> Cards </TabsTrigger>
      </TabsList>
      <TabsContent value="preview">
        <CardPreviews />
      </TabsContent>
      <TabsContent value="cards"><Cards /></TabsContent>
    </Tabs>

    <Input />
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 1rem;
}
</style>
