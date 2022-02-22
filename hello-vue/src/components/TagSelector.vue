<template>
  <div class="list">
    <div
      v-for="(language, index) in languages"
      :key="index"
      @click="language.selected = !language.selected"
      :class="{ selected: language.selected }"
    >
      <span>{{ language.name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      languages: [
        { name: "php", selected: false },
        { name: "javascript", selected: false },
        { name: "html", selected: false },
        { name: "css", selected: false },
        { name: "nodejs", selected: false },
      ],
    };
  },
};
</script>

<style scoped>
.list div {
  display: inline-block;
  border: 1px solid #ebebeb;
  padding: 4px 15px;
  margin-right: 5px;
  border-radius: 4px;
  cursor: pointer;
}
.list .selected {
  background-color: green;
  color: white;
}
</style>