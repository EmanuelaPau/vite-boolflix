<template>
  <div>
    <!-- <h1> App Vue</h1> -->
    <AppMain />
  </div>
</template>

<script>
import AppMain from './components/AppMain.vue'


export default {
  name: 'App',
  components: {
    AppMain,
  }
}
</script>

<style lang ="scss">
@import './styles/general.scss';
@import "../node_modules/bootstrap/scss/bootstrap";
</style>;
