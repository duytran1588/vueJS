<template>
  <div>
    <div id="app">{{ MoneyFormat() }}</div>
    <button @click="tongTien += 20000">Tinh tien</button>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      tongTien: 1000000,
    };
  },
  methods: {
    MoneyFormat: function () {
      return this.tongTien.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
    },
  },
};
</script>

<style>
</style>
