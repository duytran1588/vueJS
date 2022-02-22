import { createApp } from "vue";
// import App from './App.vue'
// import NewApp from './NewApp.vue' //NewApp is used to render content of the children component
import FilterApp from "./FilterApp.vue";

// createApp(App).mount('#app')
// createApp(NewApp).mount('#app')
createApp(FilterApp).mount("#app");
