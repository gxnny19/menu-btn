<template>
  <h1>v-computed</h1>
  <form id="moose-count" :class="{ checked: chbxVal }">
    <p>
      피곤하신가요?
      <label>
         <input type="checkbox" v-model="chbxVal"> 
         {{ chbxVal }}
      </label>
    </p>
  </form>
</template>

<script setup>
import { ref } from 'vue'

const chbxVal = ref(false)
</script>

<style scoped>
form {
  border: dashed black 1px;
  display: inline-block;
  padding: 10px;
}

form.checked {
  background-color: #a4def4; /* 하늘색 */
}

label {
  padding: 5px;
}

label:hover {
  cursor: pointer;
  background-color: lightgray;
  border-radius: 5px;
}
</style>
