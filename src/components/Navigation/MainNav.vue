<script lang="ts" setup>
import ActionButton from "../Shared/ActionButton.vue";
import ProfileImage from "./ProfileImage.vue";
import SubNav from "./SubNav.vue";

import { useUserStore } from "@/stores/user";
import { ref, computed } from "vue";
import { useRoute } from "vue-router";

const showDropdownNav = ref(false);
const navItems = ref([
  { label: "Teams", link: "/teams" },
  { label: "Locations", link: "/" },
  { label: "Benefits", link: "/" },
  { label: "Jobs", link: "/jobs/results" },
  { label: "Students", link: "/" },
]);

const userStore = useUserStore();
const login = userStore.login;

const toggleDropdownNav = () =>
  (showDropdownNav.value = !showDropdownNav.value);

const isLoggedIn = computed(() => userStore.isLoggedIn);

const navListClass = computed(() => {
  return {
    "slide-up": !showDropdownNav.value,
    "slide-down": showDropdownNav.value,
  };
});

const route = useRoute();
const onJobResultsPage = computed(() => route.name === "JobResults");
const headerClass = computed(() => ({
  "h-16": !onJobResultsPage.value,
  "h-32": onJobResultsPage.value,
}));
</script>

<template>
  <header :class="['border-y', 'border-white', headerClass]">
    <nav class="fixed z-10 h-16 w-full border-gray-200">
      <div
        class="flex flex-wrap items-center justify-start bg-gradient-to-br from-brand-purple-1 to-purple-800 lg:justify-start"
      >
        <button
          @click="toggleDropdownNav"
          type="button"
          class="ml-8 inline-flex items-center rounded-lg p-5 pl-0 text-sm text-gray-100 hover:text-white lg:hidden"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <router-link to="/" class="flex items-center lg:mx-8">
          <span class="self-center whitespace-nowrap dark:text-white"
            >Careers at</span
          >&nbsp;
          <img
            src="https://www.yondu.com/wp-content/uploads/2022/01/Yondu-without-Tagline_White.svg"
            width="80"
            class="mx-1 mt-1 h-6 sm:h-9"
            alt="company logo"
          />
        </router-link>
        <div class="fixed right-0 top-0 mx-8 block pt-4">
          <ActionButton
            v-if="!isLoggedIn"
            text="Sign in"
            color="secondary"
            class="rounded py-1 px-2 text-sm font-semibold"
            @click="login"
          />
          <ProfileImage v-else class="h-8 w-8 rounded-3xl bg-white" />
        </div>
        <div
          class="h-full w-full overflow-hidden bg-black bg-opacity-90 text-center lg:h-16 lg:w-auto lg:bg-transparent"
          :class="navListClass"
        >
          <ul
            class="flex h-full flex-col py-3 lg:mt-0 lg:flex-row lg:items-stretch lg:space-x-8 lg:border-0 lg:py-0 lg:pl-3 lg:text-sm lg:font-medium"
          >
            <li v-for="navItem in navItems" :key="navItem.label">
              <router-link
                :to="navItem.link"
                role="link"
                class="block h-full w-full border-b-white py-3 text-white hover:border-b dark:text-white lg:py-6"
              >
                {{ navItem.label }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <SubNav />
    </nav>
  </header>
</template>

<style scoped>
.slide-down {
  max-height: 500px;
  transition: max-height 0.8s ease-in-out;
}

.slide-up {
  @apply max-h-0 lg:max-h-full;
  transition: max-height 0.5s ease-in-out;
}
</style>
