<template>
  <nav class="breadcrumb">
    <ol>
      <li v-for="(link, index) in links" :key="index" class="breadcrumb__item">
        <router-link> </router-link>
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts"></script>

<style scoped></style>
