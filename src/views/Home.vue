<template>
  <div class="home">
    <Header />
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Vue.js Blog"/>  
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    Header
  }
}
</script>
