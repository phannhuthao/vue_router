<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const searchKeyword = ref('');
const router = useRouter();
const route = useRoute();

// Retrieve query parameter on component mount
onMounted(() => {
  if (route.query.q) {
    searchKeyword.value = route.query.q as string;
  }
});

// Function to update URL with query parameter
const performSearch = () => {
  if (searchKeyword.value) {
    router.push({ path: '/search', query: { q: searchKeyword.value } });
  }
};
</script>

<template>
  <div>
    <input
        type="text"
        v-model="searchKeyword"
        placeholder="Enter..."
    />
    <button @click="performSearch">Tìm kiếm</button>
    <br />
    <p>Value: {{ searchKeyword }}</p>
  </div>
</template>

<style scoped>

</style>
