<template>
    <h1>v-if</h1>
   <hr>
   <p v-if="typewritersInStock">재고 있음</p>
   <p v-else>재고 없음</p>
   <hr>
   <p v-if="typewriterCount > 0">재고 있음</p>
   <p v-else>재고 없음</p>
   <hr>
   <p v-if="typewriterCount2 > 3">재고 있음</p>
   <p v-else-if="typewriterCount2 > 0">재고 조금 남음</p>
   <p v-else-if="typewriterCount2 == 0">재고 없음</p>
   <p v-else>선불(예약) 있음 -> ({{ typewriterCount2 }})</p>
   <hr>
   <p v-if="text.includes('pizza')">"pizza" 글자가 포함되어 있어요</p>
   <p v-else>"pizza" 글자 포함</p>
   <hr>
   <div v-if="text2.includes('피자')">
    <p>피자</p>
    <img src="./images/img_pizza.svg" alt="피자이미지">
   </div>
   <p v-else>피자 없음</p>
</template>

<script setup>
import { ref } from 'vue'

const typewritersInStock = ref(true) 
const typewriterCount = ref(0)
const typewriterCount2 = ref(-2)

const text = ref("I like Taco, pizza, Thai beef salad, poh soup and tagine.")
const text2 = ref("I like Taco, 피자, Thai beef salad, poh soup and tagine.")

</script>

<style scoped>
img {
    width: 150px;
    height: 150px;
}
</style>