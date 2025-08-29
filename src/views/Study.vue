<script setup>
import { ref } from 'vue'
import Ex1 from '../components/Ex1.vue'
import Ex2 from '../components/Ex2.vue'
import Ex3 from '../components/Ex3.vue'
import Ex4 from '../components/Ex4.vue'
import Ex5 from '../components/Ex5.vue'
import Ex6 from '../components/Ex6.vue'
import Ex7 from '../components/Ex7.vue'
import Ex8 from '../components/Ex8.vue'
import Ex9 from '../components/Ex9.vue'
import Ex10 from '../components/Ex10.vue'

const pages = { Ex1, Ex2, Ex3, Ex4, Ex5, Ex6, Ex7, Ex8, Ex9, Ex10 }
const activeComp = ref("Ex1")
</script>

<template>
    <div class="study-container">
        <h1>장경건의 VUE 과제방 ↓</h1>

        <div class="btn-list">
            <button @click="activeComp = 'Ex1'" :class="{ active: activeComp === 'Ex1' }">v-bind</button>
            <button @click="activeComp = 'Ex2'" :class="{ active: activeComp === 'Ex2' }">v-if</button>
            <button @click="activeComp = 'Ex3'" :class="{ active: activeComp === 'Ex3' }">v-show</button>
            <button @click="activeComp = 'Ex4'" :class="{ active: activeComp === 'Ex4' }">v-for</button>
            <button @click="activeComp = 'Ex5'" :class="{ active: activeComp === 'Ex5' }">v-event</button>
            <button @click="activeComp = 'Ex6'" :class="{ active: activeComp === 'Ex6' }">v-methods</button>
            <button @click="activeComp = 'Ex7'" :class="{ active: activeComp === 'Ex7' }">v-model</button>
            <button @click="activeComp = 'Ex8'" :class="{ active: activeComp === 'Ex8' }">v-computed</button>
            <button @click="activeComp = 'Ex9'" :class="{ active: activeComp === 'Ex9' }">v-watchers</button>
            <button @click="activeComp = 'Ex10'" :class="{ active: activeComp === 'Ex10' }">v-form</button>
        </div>


        <div id="comp_view">
            <KeepAlive>
                <component :is="pages[activeComp]" />
            </KeepAlive>
        </div>
    </div>
</template>

<style scoped>
.study-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* 가로 가운데 */
    justify-content: center;
    /* 세로 가운데 */

    text-align: center;
}

.btn-list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    margin: 20px 0;
}

button {
    flex: 1 1 18%;
    min-width: 120px;
    margin: 5px;
    padding: 12px 24px;
    border-radius: 10px;
    border: none;
    background: #ffaf7b;
    cursor: pointer;
    filter: drop-shadow(0 0 2px rgb(58, 56, 56));
    font-weight: bold;
    font-size: 18px;
    transition: background 0.3s;
}

button:hover {
    background: #fda65a;
}

#comp_view {
    margin-top: 20px;
    margin-bottom: 100px;
    border: 1px solid orange;
    border-radius: 10px;
    padding: 20px;
    width: 80%;
    /* 적당한 폭 */
    max-width: 800px;
    /* 너무 넓어지지 않게 제한 */
}

button.active {
    background: #ff6f3c;
    /* 클릭된 버튼 색상 */
    color: white;
    transform: scale(1.05);
    /* 살짝 커지게 효과 */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
</style>