<script setup lang="ts">
import { ref } from 'vue';
import productsData from '../../product.json';

const products = ref([...productsData]);
const newLogoName = ref('');
const newLogoImage = ref('');
const newLogoDescribe = ref('');
const showAddLogoForm = ref(false);

const handleDelete = (id: number) => {
  products.value = products.value.filter(product => product.id !== id);
}

const handleAddNewLogo = () => {
  if (newLogoName.value && newLogoImage.value && newLogoDescribe.value) {
    const newId = products.value.length ? products.value[products.value.length - 1].id + 1 : 1;
    products.value.push({
      id: newId,
      name: newLogoName.value,
      image: newLogoImage.value,
      descripte: newLogoDescribe.value,
    });

    // Reset input fields
    newLogoName.value = '';
    newLogoImage.value = '';
    newLogoDescribe.value = '';
    showAddLogoForm.value = false; // Hide the form after adding the logo
  } else {
    alert('Please fill all fields');
  }
}

// Toggle the visibility of the add logo form
const toggleAddLogoForm = () => {
  showAddLogoForm.value = !showAddLogoForm.value;
}
</script>

<template>
  <div>
    <h1>Trang quản lí thương hiệu</h1>
  </div>

  <div>
    <button class="btn3" @click="toggleAddLogoForm">Add to Logo</button>

    <form class="d-flex mx-auto">
      <input type="search" placeholder="Enter...." />
      <button class="btn-sreach">Search</button>
    </form>
  </div>

  <table class="table">
    <thead>
    <tr>
      <th>STT</th>
      <th>Name</th>
      <th>Logo</th>
      <th>Describe</th>
      <th colspan="2">Actions</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(product, index) in products" :key="product.id">
      <td>{{ index + 1 }}</td>
      <td>{{ product.name }}</td>
      <td>
        <img :src="product.image" alt="product image" class="product-image" />
      </td>
      <td>{{ product.descripte }}</td>
      <td>
        <button class="btn1" @click="() => handleDelete(product.id)">Xóa</button>
        <button class="btn2">Sửa</button>
      </td>
    </tr>
    </tbody>
  </table>

  <!-- Modal for adding new logo -->
  <div v-if="showAddLogoForm" class="modal-overlay" @click="showAddLogoForm = false">
    <div class="modal-content" @click.stop>
      <h2>Add New Logo</h2>
      <form class="add-logo-form">
        <label for="logo-name">Name</label>
        <input type="text" id="logo-name" v-model="newLogoName" placeholder="Enter a name" />

        <label for="logo-image">Logo</label>
        <input type="text" id="logo-image" v-model="newLogoImage" placeholder="Enter image URL" />

        <label for="logo-describe">Describe</label>
        <input type="text" id="logo-describe" v-model="newLogoDescribe" />

        <button type="button" @click="handleAddNewLogo" class="btn-add">Add Logo</button>
        <button type="button" @click="showAddLogoForm = false" class="btn-cancel">Cancel</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.table {
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 100%;
  margin-top: 20px;
  border-collapse: collapse;
}

.table th,
.table td {
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.table th {
  background-color: #f5f5f5;
  font-weight: bold;
}

.product-image {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 4px;
}

.btn1,
.btn2 {
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 5px;
}

.btn1 {
  background-color: red;
  color: white;
  border: none;
}

.btn2 {
  background-color: yellow;
  color: black;
  border: none;
}

.btn3 {
  background-color: #3b82f6;
  color: white;
  border: none;
  height: 40px;
  width: 200px;
  border-radius: 4px;
  margin-left: 1320px;
  cursor: pointer;
}

.btn-sreach {
  background-color: #3b82f6;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 10px;
}

tbody tr:hover {
  background-color: #f9f9f9;
}

/* Styles for modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 300px;
}

/* Styles for the add logo form */
.add-logo-form {
  display: flex;
  flex-direction: column;
}

.add-logo-form label {
  margin: 10px 0 5px;
  font-weight: bold;
}

.add-logo-form input {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.btn-add {
  background-color: #3b82f6;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  margin-top: 10px;
  cursor: pointer;
}

.btn-cancel {
  background-color: red;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  margin-top: 10px;
  cursor: pointer;
}
</style>
