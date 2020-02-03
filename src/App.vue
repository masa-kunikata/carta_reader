<template>
  <div id="app">
    <CartaReader msg="sample"/>
  </div>
</template>

<script>
import CartaReader from './components/CartaReader.vue'

export default {
  name: 'app',
  components: {
    CartaReader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
