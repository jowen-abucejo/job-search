<script>
export default {
  name: "HeaderContainer",
};
</script>

<template>
  <div class="w-full border-b border-solid border-purple-500">
    <div class="mx-auto my-16 text-center">
      <slot name="title"></slot>
      <slot name="subTitle"></slot>
    </div>
  </div>
</template>
