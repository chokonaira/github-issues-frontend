<template>
  <div class="navbar-container">
    <router-link class="navbar-container__navbar-link" to="/">
      <h2 class="navbar-container__navbar-title">Github Issues</h2>
      <img class='navbar-container__nav-logo' src="@/assets/images/github-logo-dark.png"
            alt="github logo">
    </router-link>
      <h1 class="navbar-container__navbar-title">
        {{ rootPath ? 'Issues List' : 'Issues Details'}}
      </h1>
  </div>
</template>
<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

export default {
  setup() {
    const route = useRoute();
    const rootPath = computed(() => route.path === '/');

    return { rootPath };
  },
};
</script>
