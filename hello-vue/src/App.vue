<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <!-- <MenuItem /> -->
    <!-- input prop v-model is used to help binding data in 2 ways -->
    <input type="text" v-model="name" />
    <input type="checkbox" v-model="accept" /> I agree with the agreement
    <div>
      {{ name }}
    </div>
    <div>
      <h1 v-show="isShow">Frontend Developer</h1>
      <button @click="isShow = !isShow">Show/Hide</button>
    </div>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import MenuItem from "./components/MenuItem.vue";

export default {
  name: "App",
  data() {
    return {
      name: "Tran Dang Duy",
      accept: true,
      isShow: true,
    };
  },
  components: {
    // HelloWorld,
    // MenuItem: MenuItem, //or Menu,
  },
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
