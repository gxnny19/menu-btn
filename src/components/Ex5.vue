<template>
    <h1>v-event</h1>
    <hr>
    
    <div id="app">

        <p>Count: {{ count }}</p>
        <button @click="count++">클릭</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const count = ref(0)
</script>

<style scoped>
#app {
    border: dashed black 1px;
    width: 200px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 0 auto;
}

img {
    width: 100%;
}

button {
    margin-top: 10px;
    padding: 8px 12px;
    border-radius: 6px;
    border: none;
    background-color: #ffaf7b;
    cursor: pointer;
    font-weight: bold;
}

button:hover {
    background-color: #fda65a;
}
</style>