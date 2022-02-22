<template>
  <div class="task">
    <span>{{ taskData.content }}</span>
  </div>
</template>

<script>
export default {
  // props: ["taskData"], //c1: passing props

  //c2:
  // props: {
  //   taskData: {
  //     type: Object,
  //     default: function () {
  //       return {};
  //     },
  //   },
  // },
  
  //c3:
  props: {
    taskData: Object,
  },
  data() {
    return {
      content: "ABC",
    };
  },
};
</script>

<style scoped>
</style>