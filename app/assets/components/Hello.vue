<template>
  <p>hello</p>
  <router-link to="/">Home</router-link>
  <router-link :to="{name: 'Login'}">Login</router-link>
  <router-link to="/register">Registration</router-link>
  <button @click="home">Home</button>
  <router-view/>
</template>

<script>
   // import router from "../router";

   export default {
     methods:{
       home(){
         // router.push('/home')
       }
     }

   }
</script>