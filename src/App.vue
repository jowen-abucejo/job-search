<script>
import MainNav from "./components/Navigation/MainNav.vue";
import TheHero from "./components/Hero/TheHero.vue";

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
