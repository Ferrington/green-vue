<script setup>
import TableRow from '@components/table/TableRow.vue'
import { provide } from 'vue'

const props = defineProps(['table', 'mode'])
provide('columns', props.table.COLUMNS)
provide('mode', props.mode)
</script>

<template>
  <table>
    <thead>
      <TableRow type="TH" />
    </thead>
    <tbody></tbody>
  </table>
</template>

<style scoped></style>
