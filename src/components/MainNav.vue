<script>
import ActionButton from "./ActionButton.vue";
import ProfileImage from "./ProfileImage.vue";

export default {
  name: "MainNav",
  data() {
    return {
      showDropdownNav: false,
      navItems: [
        { label: "Teams", link: "" },
        { label: "Locations", link: "" },
        { label: "Benefits", link: "" },
        { label: "Jobs", link: "" },
        { label: "Students", link: "" },
      ],
      isLoggedIn: false,
    };
  },
  methods: {
    toggleDropdownNav() {
      this.showDropdownNav = !this.showDropdownNav;
    },
    logIn() {
      this.isLoggedIn = true;
    },
  },
  computed: {
    navListClass() {
      return {
        "slide-up": !this.showDropdownNav,
        "slide-down": this.showDropdownNav,
      };
    },
  },
  components: { ActionButton, ProfileImage },
};
</script>

<template>
  <header class="border-y border-white">
    <nav class="border-gray-200 bg-brand-purple-1">
      <div
        class="mx-auto flex flex-wrap items-center justify-between lg:justify-start"
      >
        <a href="/" class="mx-8 flex items-center py-2">
          <span class="self-center whitespace-nowrap dark:text-white"
            >Careers at</span
          >&nbsp;
          <img
            src="https://www.yondu.com/wp-content/uploads/2022/01/Yondu-without-Tagline_White.svg"
            width="80"
            class="mx-1 mt-1 h-6 sm:h-9"
            alt="company logo"
          />
        </a>
        <button
          @click="toggleDropdownNav"
          type="button"
          class="mx-8 inline-flex items-center rounded-lg p-2 text-sm text-gray-100 hover:text-white lg:hidden"
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
        <div class="right-0 hidden lg:fixed lg:block">
          <ActionButton
            v-if="!isLoggedIn"
            text="Sign in"
            color="secondary"
            class="mx-8 rounded py-1 px-2 text-sm font-semibold"
            @click="logIn"
          />
          <ProfileImage v-else class="mx-8 h-8 w-8 rounded-3xl bg-white" />
        </div>
        <div
          class="h-full w-full bg-black bg-opacity-50 text-center lg:h-14 lg:max-h-max lg:w-auto lg:bg-transparent"
          :class="navListClass"
        >
          <ul
            class="flex h-full flex-col py-2 lg:mt-0 lg:flex-row lg:items-stretch lg:space-x-8 lg:border-0 lg:py-0 lg:pl-3 lg:text-sm lg:font-medium"
          >
            <li
              v-for="navItem in navItems"
              :key="navItem.label"
              class="mb-1 flex items-center justify-center"
            >
              <a
                :href="navItem.link"
                class="block h-full w-full border-b-white px-2 pt-5 text-white hover:border-b dark:text-white"
                >{{ navItem.label }}</a
              >
            </li>
          </ul>
        </div>
      </div>
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
