<script lang="ts" setup>
import HeadLine from "./HeadLine.vue";
import JobSearchForm from "./JobSearchForm.vue";
import SpotLight from "./SpotLight.vue";
</script>

<template>
  <main class="py-8 px-8 lg:px-12">
    <div
      class="flex flex-col-reverse items-center justify-center md:flex-row md:gap-10"
    >
      <section class="px-8">
        <HeadLine />
        <p class="mt-10 mb-12 text-xl font-medium md:text-2xl lg:text-3xl">
          Find your next job at Yondu
        </p>
        <JobSearchForm />
      </section>
      <section class="p-8">
        <div
          class="h-72 w-72 rounded-full bg-gradient-to-br from-brand-purple-1 to-purple-800 p-8 md:h-80 md:w-80 lg:h-96 lg:w-96"
        >
          <img
            src="https://www.yondu.com/wp-content/uploads/2022/01/Yondu-without-Tagline_White.svg"
            class="h-full w-full"
          />
        </div>
      </section>
    </div>
    <SpotLight class="flex max-w-full overflow-x-auto pb-16 md:justify-center">
      <template #default="slotProps">
        <router-link
          to="/jobs/results"
          class="mx-5 mt-5 flex h-96 w-72 flex-col rounded-lg bg-gray-300"
        >
          <img
            :src="slotProps.spotlight.img"
            alt="spotlight image"
            class="rounded-t-lg"
          />
          <div class="mt-3 h-48 px-6 py-4">
            <h3 class="text-lg font-medium">{{ slotProps.spotlight.title }}</h3>
            <p class="mt-3 text-sm">{{ slotProps.spotlight.description }}</p>
          </div>
          <router-link
            to="jobs/results"
            class="px-6 pb-4 text-sm text-purple-500"
            >See jobs</router-link
          >
        </router-link>
      </template>
    </SpotLight>
  </main>
</template>
