<script setup></script>

<template>
  <nav class="side-nav">
    <ul>
      <li data-entity="User">
        <RouterLink :to="{ name: 'table', params: { tableName: 'user' } }">Users</RouterLink>
      </li>
      <li data-entity="Student">
        <RouterLink :to="{ name: 'table', params: { tableName: 'student' } }">Students</RouterLink>
      </li>
      <li data-entity="Project"><a href="#">Projects</a></li>
    </ul>
  </nav>
</template>

<style scoped></style>
