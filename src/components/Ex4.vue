<template>
  <h1>v-for</h1>
  <hr>
  
  <h2>1. 배열을 기반으로 이미지 생성</h2>
  <div>
    <img v-for="x in manyFoods" :key="x" :src="x" />
  </div>
  <br>
  <hr>

  <h2>2. v-for 지시어</h2>
  <div id="app">
    <div>
      <figure v-for="x in manyFoods2" :key="x.name">
        <img v-bind:src="x.url">
        <figcaption>{{ x.name }}</figcaption>
      </figure>
    </div>
  </div>
  <hr>

  <h2>3. 인덱스 가져오기</h2>
  <div id="app3">
    <div>
      <figure v-for="food in manyFoods3" :key="food.id">
        <img :src="food.url" />
        <figcaption>{{ food.id }}: {{ food.name }}</figcaption>
      </figure>
    </div>
  </div>

</template>

<script setup>
import { ref } from "vue"

import burrito from "./images/img_burrito.svg"
import salad from "./images/img_salad.svg"
import cake from "./images/img_cake.svg"
import soup from "./images/img_soup.svg"
import fish from "./images/img_fish.svg"
import pizza from "./images/img_pizza.svg"
import rice from "./images/img_rice.svg"

const manyFoods = ref([burrito, salad, cake, soup, fish, pizza, rice])

const manyFoods2 = ref([
  { name: 'Burrito', url: burrito },
  { name: 'Salad', url: salad },
  { name: 'Cake', url: cake },
  { name: 'Soup', url: soup },
  { name: 'Fish', url: fish },
  { name: 'Pizza', url: pizza },
  { name: 'Rice', url: rice }
])

// ✅ 새로운 배열 (index, name, url 포함)
const manyFoods3 = ref([
  { id: 0, name: 'Burrito', url: burrito },
  { id: 1, name: 'Salad', url: salad },
  { id: 2, name: 'Cake', url: cake },
  { id: 3, name: 'Soup', url: soup },
  { id: 4, name: 'Fish', url: fish },
  { id: 5, name: 'Pizza', url: pizza },
  { id: 6, name: 'Rice', url: rice }
])
</script>

<style scoped>
div>div {
  border: solid black 1px;
  width: 80%;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
}

img {
  width: 70px;
  margin: 10px;
}

#app>div, #app3>div {
  border: solid black 1px;
  width: 80%;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

figure {
  width: 80px;
  padding: 10px;
  margin: 10px;
  background-color: lightskyblue;
  border-radius: 5px;
}

figcaption {
  text-align: center;
}
</style>
