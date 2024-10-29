<script setup lang="ts">

</script>

<template>
  <header>
    <button class="btn" @click="$router.replace('/home')">Home</button>
    <button class="btn" @click="$router.replace('/product')">Product</button>
    <button class="btn" @click="$router.replace('/detail')">Detail</button>

    <p>Trang hiện tại: {{ $route.path }}</p>
  </header>
</template>

<style scoped>
.btn {
  background-color: #3b82f6;
  color: white;
  border: 1px solid black;
  border-radius: 4px;
  padding: 10px;
  margin: 10px;
  cursor: pointer;
}
</style>
