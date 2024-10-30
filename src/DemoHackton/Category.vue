<script setup lang="ts">
import categoryData from "../../category.json"
import {ref} from "vue";

const categories = ref([...categoryData])
</script>

<template>
<table class="table">
  <h1>Trang quản lí danh mục</h1>
  <tbody>
  <tr>
    <th>STT1</th>
    <th>Name</th>
    <th colspan="2">Actions</th>
  </tr>
  </tbody>

  <tbody>
  <tr v-for="(category, index) in categories" :key="index">
    <th>{{index +1}}</th>
    <th>{{category.name}}</th>
    <th>
      <button class="btnEdit">Sửa</button>
      <button class="btnDelete">Xóa</button>
    </th>
  </tr>
  </tbody>

</table>
</template>

<style scoped>
.table {
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 100%;
  margin-top: 20px;
  border-collapse: collapse;
}

.table th, .table td {
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.table th {
  background-color: #f5f5f5;
  font-weight: bold;
}

.btnEdit {
  background-color: yellow;
  color: black;
  border: none;
}

.btnDelete {
  background-color: red;
  color: black;
  border: none;
}
</style>


