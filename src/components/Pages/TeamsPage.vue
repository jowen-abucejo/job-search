<script>
import HeaderContainer from "../Shared/HeaderContainer.vue";

export default {
  name: "TeamsPage",
  components: { HeaderContainer },
};
</script>

<template>
  <HeaderContainer>
    <template #title>
      <h1 class="w-full text-4xl font-normal">Teams</h1>
    </template>
    <template #subTitle>
      <h2 class="text-normal my-4 w-full font-light">
        Be a <span class="font-semibold text-purple-500">Yondu</span>de today
      </h2>
    </template>
  </HeaderContainer>
</template>
