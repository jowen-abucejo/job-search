<script>
export default {
  name: "HeadLine",
};
</script>

<template>
  <div>
    <div class="relative -z-10 max-h-24 overflow-hidden lg:max-h-32">
      <div class="scroller flex flex-col">
        <span class="text-blue-600">Build</span>
        <span class="text-green-600">Create</span>
        <span class="text-yellow-600">Design</span>
        <span class="text-red-600">Code</span>
        <span class="text-blue-600">Build</span>
      </div>
    </div>
    <h2 class="text-6xl font-extrabold lg:text-7xl">for everyone</h2>
  </div>
</template>

<style scoped>
.scroller > span {
  @apply py-4 text-7xl font-bold lg:text-8xl;
}

.scroller {
  animation-name: scroll-up;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-duration: 10s;
}

@keyframes scroll-up {
  0% {
    transform: translateY(0);
  }
  10% {
    transform: translateY(0);
  }
  13% {
    transform: translateY(-20%);
  }
  35% {
    transform: translateY(-20%);
  }
  38% {
    transform: translateY(-40%);
  }
  60% {
    transform: translateY(-40%);
  }
  63% {
    transform: translateY(-60%);
  }
  85% {
    transform: translateY(-60%);
  }
  88% {
    transform: translateY(-80%);
  }
  100% {
    transform: translateY(-80%);
  }
}
</style>
