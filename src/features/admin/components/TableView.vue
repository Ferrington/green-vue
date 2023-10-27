<script setup>
import { tableConfigs } from '@admin/config/'
import { login } from '@admin/requests/'
import TheTable from '@components/table/TheTable.vue'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const tableName = ref()
let table = null

watch(
  () => route.params.tableName,
  async (newTableName) => {
    await login()
    tableName.value = newTableName
    table = tableConfigs[newTableName]
    if (table == null) return
    table.data = await table.REQUESTS.read()
  }
)
</script>

<template>
  <h1>{{ tableName }}</h1>
  <TheTable v-if="table" :table="table" mode="read" />
</template>

<style scoped></style>
