<template>
    <h1>v-model</h1>
    <hr>
    <h2>1. 양방향 바인딩</h2>
    <div id="app1">
        <input type="text" v-model="inpText">
        <p>결과값: " {{ inpText }} "</p>
    </div>
    <hr>
    <h2>2. 장보기 리스트</h2>
    <div id="app2">
    <form @submit.prevent="addItem">
      <p>
        뭐가 필요하세요? <br>
        <input type="text" required placeholder="상품 이름.." v-model="itemName">
      </p>
      <p>
        얼마나요? <br>
        <input type="number" placeholder="상품 수량.." v-model="itemNumber">
      </p>
      <p>
        중요한가요?
        <label>
          <input type="checkbox" v-model="itemImportant">
          {{ itemImportant }}
        </label>
      </p>
      <button type="submit">아이템 추가</button>
    </form>
    <br>
    <hr>

    <div>
      <p><strong>장보기 목록:</strong></p>
      <ul>
        <li v-for="(item, index) in shoppingList" :key="index" :class="item.important ? 'important-true' : 'important-false'">
          {{ item.name }}, {{ item.number }}개
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const inpText = ref('내용을 입력하세요')

const itemName = ref('')
const itemNumber = ref(null)
const itemImportant = ref(false)
const shoppingList = ref([
  { name: '토마토', number: 5, important: false }
])

function addItem() {
  shoppingList.value.push({
    name: itemName.value,
    number: itemNumber.value,
    important: itemImportant.value
  })
  itemName.value = ''
  itemNumber.value = null
  itemImportant.value = false
}
</script>

<style scoped>
#app1 {
    border: black dashed 1px;
    width: 200px;
    padding: 20px;
    margin: 20px auto;
    text-align: center;
}
#app2 {
  border: dashed black 1px;
  display: inline-block;
  padding: 0 20px;
}

#shopping-list label {
  padding: 5px;
}

#shopping-list label:hover {
  cursor: pointer;
  background-color: lightgray;
  border-radius: 5px;
}

#shopping-list ul {
  list-style-type: none;
  padding-left: 0;
}

#shopping-list li {
  border-radius: 5px;
  padding: 5px;
  margin: 2px;
  background-color: rgb(211, 254, 211);
}

.important-true {
  background-color: rgb(211, 254, 211); /* 초록색 */
  font-weight: bold;
  border-radius: 5px;
  padding: 5px;
  margin: 2px;
}

.important-false {
  background-color: rgb(255, 202, 202); /* 빨간색 */
  font-weight: bold;
  border-radius: 5px;
  padding: 5px;
  margin: 2px;
}
</style>