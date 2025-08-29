<template>
    <h1>v-watchers</h1>
    <p>'rangeVal' 값에 대해 워처를 사용하여 30~60 사이의 값을 선택할 수 없도록 함 </p>
    <div id="range-watcher">
    <input type="range" min="0" max="100" step="1" v-model="rangeVal">
    <p><code>{{ rangeVal }}</code></p> 
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const rangeVal = ref(70)

watch(rangeVal, (val) => {
  if (val > 30 && val < 60) {
    if (val < 40) {
      rangeVal.value = 30
    } else {
      rangeVal.value = 60
    }
  }
})
</script>

<style scoped>
#range-watcher {
  border: dashed black 1px;
  display: inline-block;
  padding: 10px;
}

#range-watcher > p {
  font-size: large;
  font-weight: bold;
  text-align: center;
}
</style>