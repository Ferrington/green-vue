<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const tableName = ref()

watch(
  () => route.params.tableName,
  (newTableName) => {
    tableName.value = newTableName
  }
)
</script>

<template>
  <div>{{ tableName }}</div>
</template>

<style scoped></style>
