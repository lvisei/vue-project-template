<template>
  <div id="app">
    <router-view />
    <router-link to="/">
      Go to A Page
    </router-link>
    <router-link to="/b">
      Go to B Page
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
@import './theme/style.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 13px;
  text-align: center;
}
</style>
