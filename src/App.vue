<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  mounted () {
    if (localStorage.getItem('theme')) {
      window.document.documentElement.setAttribute("data-theme", localStorage.getItem('theme'));
    }
  }
}
</script>

<style lang='scss' scope>
html {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
body {
  width: 100%;
  height: 100%;
  margin: 0;
}
#app {
  width: 100%;
  height: 100%;
}
</style>
