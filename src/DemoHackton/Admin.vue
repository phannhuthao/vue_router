<script setup lang="ts">

</script>

<template>
  <div class="container">
    <aside class="sidebar">
      <h2>Quản Lý</h2>
      <ul>
        <li><Router-link :to="{ name: 'admin-logo' }"><button>Thương hiệu</button></Router-link></li>
        <li><Router-link :to="{ name: 'admin-category' }"><button>Danh Mục</button></Router-link></li>
        <li><Router-link :to="{ name: 'admin-product' }"><button>Sản Phẩm</button></Router-link></li>
      </ul>
    </aside>

    <div class="main-content">

      <router-view></router-view>
    </div>

  </div>
</template>

<style scoped>
.container {
  display: flex;
  height: 100vh;
  font-family: Arial, sans-serif;
}

.sidebar {
  width: 220px;
  padding: 20px;
  background-color: #2c3e50;
  color: #ecf0f1;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
}

.sidebar h2 {
  font-size: 1.4em;
  margin-bottom: 20px;
  color: #ecf0f1;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.sidebar ul {
  list-style: none;
  padding: 0;
  width: 100%;
}

.sidebar ul li {
  width: 100%;
  margin: 10px 0;
}

.sidebar ul li button {
  width: 100%;
  padding: 10px 15px;
  font-size: 1em;
  color: #ecf0f1;
  background-color: #34495e;
  border: none;
  border-radius: 5px;
  text-align: left;
  cursor: pointer;
  transition: all 0.3s ease;
}

.sidebar ul li button:hover {
  background-color: #1abc9c;
  color: white;
}

.main-content {
  flex: 1;
  padding: 40px;
  background-color: #ecf0f1;
}
</style>
