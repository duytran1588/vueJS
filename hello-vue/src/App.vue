<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <!-- <MenuItem /> -->
    <!-- input prop v-model is used to help binding data in 2 ways -->
    <input type="text" v-model="name" />

    <!-- v-model="channelNames[0]" or v-model="channelNames[1]" or v-model="channelNames" is right -->
    <input type="text" v-model="channelNames" /> <br />
    <input type="text" v-model="channel.name" /> <br />
    <input type="checkbox" v-model="accept" /> I agree with the agreement <br />
    <input type="text" :disabled="inputDisabled" />
    <div>
      {{ name }}
    </div>
    <div>
      <!-- We can bind id, class or any prop by this syntax: v-bind:id/class... -->
      <!-- Shorthand :id="id" -->
      <h1 :id="id" v-show="isShow">Frontend Developer</h1>
      <h1 :class="{ selected: isActive }">Tran Dang Duy</h1>
      <button @click="isShow = !isShow">Show/Hide</button> <br />
      <button @click="inputDisabled = !inputDisabled">Open/Off</button> <br />
      <button @click="isActive = !isActive">Choose/Unchoose</button> <br />

      <!-- Event handling -->
      <button v-on:click="channel.name = 'change by click'">
        Change Input By Click
      </button>
      <br />
      <button v-on:mouseover="channel.name = 'change by hover'">
        Change Input By Hover
      </button>

      <!-- prevent default event -->
      <form action="">
        <input type="text" v-model="content" />
        <button type="submit" @click.prevent="content = 'test done'">
          Prevent Default
        </button>
      </form>

      <!-- v-else -->
      <button @click="isDisplay = !isDisplay">
        <span v-if="isDisplay">Display</span>
        <span v-else>Hide</span>
      </button>
      <!-- 
        ref
           <input ref="channelName" type="text" v-model="content" />
           this.$refs.channleName => current html element input
      -->

      <!-- 
        conditional rendering: use v-show
          <h1 :id="id" v-show="isShow">Frontend Developer</h1>
          <button @click="isShow = !isShow">Show/Hide</button>
       -->

      <!-- to do list -->
      <div v-for="(task, index) in taskList" :key="index">
        {{ task }}
      </div>
      <br />

      <!-- to do list with checkbox and add more task-->
      <input type="text" v-model="newTask" />
      <button
        @click="
          if (newTask !== '') todoList.push({ content: newTask, done: false });
        "
      >
        Add task</button
      ><br />

      <!-- Add task by method -->
      <input type="text" v-model="taskName" />
      <button @click="addTask">Add task by method</button>

      <div v-for="(todo, index) in todoList" :key="index">
        <input type="checkbox" v-model="todo.done" />
        <span :class="{ completed: todo.done }"> {{ todo.content }}</span>
      </div>
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
      id: "dev",
      inputDisabled: true,
      isActive: true,
      channelNames: ["Duy Tran Vlog", "Frontend Channel"],
      channel: {
        name: "Easy Frontend",
      },
      content: "test prevent default",
      isDisplay: true,
      taskList: ["market", "cook", "code", "sanitary"],
      todoList: [
        { content: "market", done: false },
        { content: "cook", done: false },
        { content: "code", done: false },
        { content: "sanitary", done: false },
      ],
      newTask: "",
      taskName: "",
    };
  },
  components: {
    // HelloWorld,
    // MenuItem: MenuItem, //or Menu,
  },
  mounted(){
    // When this component is mounted into DOM tree, the mounted() function will run. Ex: call api, ...
  },
  methods: {
    addTask: function () {
      if (this.taskName !== "")
        this.todoList.push({ content: this.taskName, done: false });
    },
  },
  watch: {
    // if newtask in function data changes, the function newtask will run
    newTask: function (newValue, oldValue) {
      console.log("oldValue", oldValue);
      console.log("newValue", newValue);
    },
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
.selected {
  color: red;
}
.completed {
  text-decoration: line-through;
}
</style>
