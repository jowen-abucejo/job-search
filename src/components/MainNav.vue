<script>
export default {
  name: "MainNav",
  data() {
    return { showDropdownNav: null };
  },
  methods: {
    toggleDropdownNav() {
      this.showDropdownNav = !this.showDropdownNav;
    },
  },
};
</script>

<template>
  <header class="border-y border-white">
    <nav class="border-gray-200 bg-brand-purple-1">
      <div
        class="mx-auto flex flex-wrap items-center justify-between lg:justify-start"
      >
        <a href="/" class="mx-8 my-3 flex items-center">
          <span class="self-center whitespace-nowrap dark:text-white"
            >Careers at</span
          >&nbsp;
          <img
            src="https://www.yondu.com/wp-content/uploads/2022/01/Yondu-without-Tagline_White.svg"
            width="80"
            class="mx-1 mt-1 h-6 sm:h-9"
            alt="Flowbite Logo"
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
        <div
          class="w-full bg-transparent bg-black bg-opacity-50 text-center lg:h-auto lg:w-auto lg:bg-transparent"
          :class="[
            showDropdownNav === null
              ? 'h-0'
              : showDropdownNav
              ? 'slide-down h-auto'
              : 'slide-up h-0',
          ]"
        >
          <ul
            class="flex flex-col py-3 lg:mt-0 lg:flex-row lg:space-x-8 lg:border-0 lg:py-3 lg:text-sm lg:font-medium"
          >
            <li>
              <a
                href="#"
                class="block border-b-white py-2 pl-3 pr-4 text-white hover:border-b dark:text-white"
                >Home</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block border-b-white py-2 pl-3 pr-4 text-white hover:border-b dark:text-white"
                >Leads & Managers</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block border-b-white py-2 pl-3 pr-4 text-white hover:border-b dark:text-white"
                >Consultants & Analysts</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block border-b-white py-2 pl-3 pr-4 text-white hover:border-b dark:text-white"
                >Developers</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block border-b-white py-2 pl-3 pr-4 text-white hover:border-b dark:text-white"
                >Support & QA's</a
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
  animation: slideDown 0.5s;
}

.slide-up {
  animation: slideUp 0.5s;
}

@-webkit-keyframes slideDown {
  from {
    height: 0;
  }
  to {
    height: 225px;
  }
}
@keyframes slideDown {
  from {
    height: 0;
  }
  to {
    height: 225px;
  }
}

@-webkit-keyframes slideUp {
  from {
    height: 225px;
  }
  to {
    height: 0;
  }
}
@keyframes slideUp {
  from {
    height: 225px;
  }
  to {
    height: 0;
  }
}
</style>
