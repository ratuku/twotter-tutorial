<template>
  <div id="app">
    @{{user.username}} - {{fullName}}
    <string>followers: </string> {{followers}}
    <br>
    <br>
    <button v-on:click="followUser">
      Follow
    </button>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data(){
    return {
      followers: 0,
      user: {
        id: 1,
        username: '_JosueNsumba',
        firstName: 'Josue',
        lastName: 'Nsumba',
        email: 'josuensumba@gmail.com',
        isAdmin: true
      }
    }
  },
  computed: {
    fullName() {
      return `${this.user.firstName} ${this.user.lastName}`
    }
  },
  watch: {
    // same name as what u want to watch
    followers(newFollowCount, oldFollowCount){

      if(oldFollowCount < newFollowCount) console.log(`${this.user.username}
      has gained a follower!`);
    }
  },
  methods: {
    followUser() {
      this.followers++
    }
  },
  mounted() {
    this.followUser();
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  flex-direction: column;
}
</style>
