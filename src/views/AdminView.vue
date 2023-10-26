<script setup>
import TheNav from '../features/admin/components/TheNav.vue'
</script>

<template>
  <div id="admin">
    <aside><TheNav /></aside>
    <main><RouterView /></main>
  </div>
</template>

<style scoped>
#admin {
  display: grid;
  grid-template-columns: 1fr 5fr;
  height: 100%;
}

aside {
  border-right: 1px solid black;
}
</style>
