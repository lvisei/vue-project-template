<template>
  <div id="app">
    <router-view/>
    <router-link to="/b">Go to BB</router-link>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
@import "./css/style.css";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 13px;
}
</style>
