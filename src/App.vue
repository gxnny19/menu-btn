<script setup>
import { ref } from 'vue'
import Ex1 from './components/Ex1.vue';
import Ex2 from './components/Ex2.vue';
import Ex3 from './components/Ex3.vue';
import Ex4 from './components/Ex4.vue';

const pages = { Ex1, Ex2, Ex3, Ex4 }
const activeComp = ref("Ex1")
</script>

<template>
  <h1>장경건의 VUE 과제방 ↓</h1>
  
  <button @click="activeComp = 'Ex1'">bind</button>
  <button @click="activeComp = 'Ex2'">if</button>
  <button @click="activeComp = 'Ex3'">show</button>
  <button @click="activeComp = 'Ex4'">for</button>

  <div id="comp_view">
      <KeepAlive>
        <component :is="pages[activeComp]"></component>
      </KeepAlive>
  </div>
</template>

<style scoped>
button{
  margin: 5px;
  filter: drop-shadow(0 0 1.5px rgb(58, 56, 56));
}
#comp_view {
  margin-top: 20px;
  border: 1px solid orange;
  border-radius: 10px;
}
</style>
