<template>
    <h1>v-show</h1>
    <hr>
    <!-- 요소존재, 보이고/감추고 -->
   <div v-show="showDiv">이 엘리먼트는 감출 수 있어요</div>
   <p>

   </p>
   <div v-show="showDiv">div태그를 보이게/감추게 하다</div>
   <div v-if="showDiv">div태그를 요소생성/생성X 하다</div>
</template>

<script setup>
import { ref } from 'vue'

const showDiv = ref(true)
</script>

<style scoped>
div {
    padding: 20px;
    margin: 10px;
    display: inline-block;
    font-weight: bold;
    border: solid black 1px;
}

</style>