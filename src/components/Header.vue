<template>
    
    <div id="nav">        
        <router-link to="/" >Home</router-link> |
        <router-link to="/login">Log In / User Nou</router-link> |
        <router-link to="/things">Things</router-link>        
      <router-view/>
    </div>
      
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1'        
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>

#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
