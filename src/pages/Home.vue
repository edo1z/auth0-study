<template>
  <div id="app">
    <h1>AUTH0 STUDY</h1>
    <button @click="logout" v-if="$auth.loggedIn">LOGOUT</button>
    <button @click="login" v-else>LOGIN</button>
    <br><br>
    <a href="#" @click="$router.push('/profile')">PROFILE</a>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data: () => ({}),
    methods: {
      async login() {
        this.$auth.login();
      },
      logout() {
        this.$auth.logout();
      }
    }
  }
</script>
