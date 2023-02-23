<script>
import HeadLine from "./HeadLine.vue";
import JobSearchForm from "./JobSearchForm.vue";

export default {
  name: "TheHero",
  components: { HeadLine, JobSearchForm },
};
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
  </main>
</template>
