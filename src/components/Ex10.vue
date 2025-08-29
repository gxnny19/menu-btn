<template>
  <h1>v-form</h1>
  <form @submit.prevent="addItem">
    <p class="inline-label">
      <label for="itemName">뭐가 필요하세요?</label>
      <input id="itemName" type="text" required placeholder="상품 이름.." v-model="itemName">
    </p>
    <p class="inline-label">
      <label for="itemNumber">얼마나요?</label>
      <input id="itemNumber" type="number" placeholder="상품 수량.." v-model="itemNumber">
    </p>
    <button type="submit">주문하기</button>
  </form>

  <div>
    <p>주문 리스트:</p>
    <ul>
      <li v-for="(item, index) in shoppingList" :key="index">
        {{ item.name }}, {{ item.number }}개
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const itemName = ref('')
const itemNumber = ref(null)
const shoppingList = ref([
  { name: '사과', number: 10 }
])

function addItem() {
  shoppingList.value.push({
    name: itemName.value,
    number: itemNumber.value
  })
  itemName.value = ''
  itemNumber.value = null
}
</script>

<style scoped>
#app-container {
  text-align: center;      
}

form {
  border: dashed black 1px;
  width: 300px; /* 입력창이 옆으로 늘어나도 보기 좋게 조금 넓혀줌 */
  padding: 20px;
  margin: 0 auto;          
}

.inline-label {
  display: flex;
  align-items: center;  /* 텍스트와 입력창 세로 정렬 */
  gap: 10px;            /* 라벨과 입력창 간격 */
  margin: 8px 0;
}

.inline-label label {
  white-space: nowrap;  /* 줄바꿈 방지 */
  min-width: 100px;     /* 라벨 폭 고정 → 입력창 위치가 일정하게 맞춰짐 */
  text-align: right;    /* 라벨을 오른쪽 정렬 (선택사항) */
}
</style>
