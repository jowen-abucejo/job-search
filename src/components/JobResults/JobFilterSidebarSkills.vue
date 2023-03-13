<script lang="ts" setup>
import { useUserStore } from "@/stores/user";
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";

const userStore = useUserStore();
const route = useRoute();

const skillsSearchTerm = computed({
  get: () => {
    return userStore.skillsSearchTerm;
  },
  set: (value: string) => {
    userStore.UPDATE_SKILLS_SEARCH_TERM(value);
  },
});

onMounted(() => {
  const role = (route.query.role as string) || "";
  userStore.UPDATE_SKILLS_SEARCH_TERM(role);
});
</script>

<template>
  <div class="mt-2">
    <input
      v-model.lazy.trim="skillsSearchTerm"
      type="text"
      class="h12- w-full rounded border border-solid border-purple-500 p-3 text-base shadow-gray-200"
      placeholder="Finance Degree"
    />
  </div>
</template>
