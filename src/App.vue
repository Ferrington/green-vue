<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="page-wrapper">
    <header>
      <nav>
        <RouterLink to="/">Admin</RouterLink>
        <!-- <RouterLink to="/about">About</RouterLink> -->
      </nav>
    </header>

    <RouterView />
  </div>
</template>

<style scoped>
.page-wrapper {
  display: grid;
  grid-template-rows: auto 1fr;
  height: 100vh;
}

header {
  border-bottom: 1px solid black;
}
</style>
