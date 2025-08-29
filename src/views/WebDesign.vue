<template>
  <div class="container">
    <h1>웹기능사 문제 보기</h1>

    <!-- 버튼 -->
    <div class="btn-list">
      <button @click="active = 'a1'" :class="{ active: active === 'a1' }">A1 보기</button>
      <button @click="active = 'b2'" :class="{ active: active === 'b2' }">B2 보기</button>
    </div>

    <hr />

    <!-- 내용 표시 -->
    <div class="content">
      <div v-if="active === 'a1'">
        <h2>coming soon...</h2>
        <!-- <p>여기에 A1 관련 내용을 넣으세요.</p> -->
      </div>

      <div v-else-if="active === 'b2'">
        <h2>coming soon...2</h2>
        <!-- <p>여기에 B2 관련 내용을 넣으세요.</p> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const active = ref('a1') // 기본은 A1 보여주기
</script>

<style scoped>
.container {
  text-align: center;
  padding: 20px;
}

.btn-list {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
}

button {
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  background: #000000;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
}

button:hover {
  background: #407ac3;
}

button.active {
  background: #ff6f3c;
}

.content {
  margin-top: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
}
</style>
