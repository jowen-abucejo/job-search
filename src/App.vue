<script>
import MainNav from "./components/MainNav.vue";
import TheHero from "./components/TheHero.vue";

export default {
  name: "App",
  components: {
    MainNav,
    TheHero,
  },
};
</script>

<template>
  <MainNav />
  <TheHero />
</template>
