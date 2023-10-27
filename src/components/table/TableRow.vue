<script setup>
import TableHeader from '@components/table/TableHeader.vue'
import { inject } from 'vue'

const props = defineProps(['type'])
const columns = inject('columns')
</script>

<template>
  <tr>
    <template v-if="props.type === 'TH'">
      <TableHeader v-for="column in columns" :key="column.name" :column="column" />
    </template>
  </tr>
</template>

<style scoped></style>
