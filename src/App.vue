<template>
  <Navbar/>
  <router-view></router-view>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar,
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }

  :root{
    --logo-left: 4rem
  }

  a{
      text-decoration: none;
  }

  ul{
      list-style: none;
  }
</style>