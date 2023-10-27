<script setup>
const props = defineProps(['column'])
</script>

<template>
  <th>{{ props.column.name }}</th>
</template>

<style scoped></style>
