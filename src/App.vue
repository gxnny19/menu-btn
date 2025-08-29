<template>
  <h1>장경건의 Study Room</h1>
  <h2>현재 경로: <span class="path">{{ route.path }}</span></h2>
  <div>
    <nav class="nav">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/study">Study</RouterLink>
      <RouterLink to="/webdesign">WebDesign</RouterLink>
    </nav>
    <hr />
    <RouterView />
  </div>
</template>


<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>


<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;  
  justify-content: flex-start; 
  min-height: 100vh;     
  text-align: center;
}

.nav {
  display: flex;
  gap: 20px;
  justify-content: center;
  margin: 20px;
}

a {
  padding: 10px 20px;
  border-radius: 20px;
  background: linear-gradient(135deg, #5da3f2, #d76d77, #ffaf7b);
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
}

a:hover {
  filter: brightness(1.2);
  box-shadow: 0 4px 8px rgba(0,0,0,0.3);
}

.router-link-active {
  background: white;                
  color: #333;                     
  font-weight: bold;
  border: 2px solid #333;         
  box-shadow: 0 4px 12px rgba(0,0,0,0.5);
}

.path {
  color: dodgerblue;
  font-weight: bold;
}
h1, h2 {
  text-align: center;
}
</style>
