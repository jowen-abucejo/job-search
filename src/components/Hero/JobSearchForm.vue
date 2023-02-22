<script>
export default {
  name: "JobSearchForm",
};
</script>

<template>
  <div class="flex flex-col gap-2">
    <div class="flex">
      <span class="ml-10 w-1/2">Role</span>
      <span class="ml-6 w-1/2">Where?</span>
    </div>
    <form
      class="flex h-12 items-center rounded-3xl border border-gray-500 px-3"
    >
      <span><font-awesome-icon :icon="['fas', 'search']" class="mr-3" /></span>
      <input
        type="text"
        placeholder="Software Engineer"
        class="w-full focus:outline-none"
      />
      <div
        class="mr-3 flex h-full items-center border border-x-gray-500 bg-gray-200 px-3"
      >
        <span>in</span>
      </div>
      <input
        type="text"
        placeholder="BGC, Taguig"
        class="w-full focus:outline-none"
      />
    </form>
  </div>
</template>
