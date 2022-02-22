<template>
  <div id="app">
    <TaskItem v-for="(task, index) in tasks" :key="index" :taskData="task" />
    <hr />
    <TagSelector />
  </div>
</template>

<script>
import TaskItem from "./components/TaskItem.vue";
import TagSelector from "./components/TagSelector.vue";

export default {
  name: "App",
  data() {
    return {
      tasks: [
        { content: "Go to market", done: false },
        { content: "Code", done: false },
        { content: "Cook", done: false },
        { content: "Sanitary", done: false },
      ],
    };
  },
  components: {
    TaskItem,
    TagSelector,
  },
};
</script>

<style>
</style>
