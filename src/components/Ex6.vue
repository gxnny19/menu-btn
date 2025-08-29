<template>
  <h1>v-methods</h1>
  <hr>

  <h2>1. 클릭하여 메소드 실행</h2>
  <div class="click-box">
    <p>아래 박스를 클릭해보세요:</p>
    <div @click="changeText">
      {{ text }}
    </div>
  </div>

  <hr>
  <h2>2. 마우스 포인터 위치 & 색상 변화</h2>
  <div class="mouse-box">
    <div 
      class="color-box"
      @mousemove="mousePos"
      :style="{
        backgroundColor: `hsl(${xPos + yPos}, ${Math.min(100, xPos / 4 + 50)}%, ${Math.min(100, yPos / 2 + 40)}%)`
      }"
    >
      <span>xPos: {{ xPos }}</span><br>
      <span>yPos: {{ yPos }}</span>
    </div>
    <p>CSS:<br>
      backgroundColor: 'hsl(<strong>{{ xPos + yPos }}</strong>,
      {{ Math.min(100, xPos / 4 + 50) }}%,
      {{ Math.min(100, yPos / 2 + 40) }}%)'
    </p>
  </div>
  <hr>
  <h2>3. 노트북</h2>
  <div class="notebook-box">
    <textarea v-model="noteText" rows="8" cols="30" placeholder="여기에 작성하세요.."></textarea>
    <div class="notebook-display">
      <span>{{ noteText }}</span>
    </div>
  </div>
  <hr>
  <h2>4. 매서드를 이용한 인수 전달</h2>
  <div class="moose-box">
    <p>{{ "Count: " + mooseCount }}</p>
    <div class="button-group">
      <button @click="addMoose(1)">++1 증가</button>
      <button @click="addMoose(5)">++5 증가</button>
      <button @click="addMoose(-1)">--1 감소</button>
      <button @click="addMoose(-5)">--5 감소</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const text = ref('화면을 클릭해보세요')

function changeText() {
    text.value = '안녕하세요!'
}

const xPos = ref(0)
const yPos = ref(0)

function mousePos(event) {
    xPos.value = event.offsetX
    yPos.value = event.offsetY
}

const noteText = ref('')

const mooseCount = ref(0)
function addMoose(number) {
    mooseCount.value += number
}
</script>

<style scoped>
/* 클릭 박스 */
.click-box {
  border: black dashed 1px;
  width: 200px;
  padding: 0 20px 20px 20px;
  margin: 0 auto 20px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.click-box > div {
  width: 140px;
  height: 60px;
  background-color: lightgreen;
  padding: 20px;
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;
}

.click-box > div:hover {
  background-color: #a0e07a;
}

/* 마우스 박스 */
.mouse-box {
  border: black dashed 1px;
  width: 400px;
  padding: 0 20px 20px 20px;
  margin: 0 auto;
  text-align: center;
}

.color-box {
  width: 360px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  transition: background-color 0.1s;
}

.color-box span {
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
  margin: 5px;
}
.notebook-box {
  border: black dashed 1px;
  width: 300px;
  padding: 20px;
  margin: 0 auto 20px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.notebook-box textarea {
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 10px;
}

.notebook-display {
  width: 100%;
  position: relative;
  aspect-ratio: 1;
  background-image: url('./images/img_notebook.jpg');
  background-size: 340%;
  background-position: -345px 0;
  overflow: hidden;
}

.notebook-display span {
  width: 80%;
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
  line-height: 1.2em;
  transform-origin: 0 0;
  rotate: 33deg;
  position: absolute;
  top: 50px;
  left: 70px;
}

.moose-box {
  border: black dashed 1px;
  width: 250px;
  padding: 10px;
  margin: 0 auto 20px auto;
  text-align: center;
}

.button-group button {
  margin: 10px;
  padding: 5px 10px;
}
</style>
