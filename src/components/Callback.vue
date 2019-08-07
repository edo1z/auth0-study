<template>
  <div>
    loading...
  </div>
</template>

<script>
  export default {
    async created() {
      try {
        const appState = await this.$auth.callback();
        const path = appState ? '/#' + appState : '/';
        location.href = path;
      } catch (e) {
        location.href = '/';
      }
    }
  };
</script>
