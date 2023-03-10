<script lang="ts" setup>
import { CLEAR_USER_JOB_FILTER_SELECTIONS, useUserStore } from "@/stores/user";
import { ref } from "vue";
import { useRouter } from "vue-router";
import CollapsibleAccordion from "../Shared/CollapsibleAccordion.vue";

const selectedOptions = ref([]);

const props = defineProps({
  headerTitle: {
    type: String,
    required: true,
  },
  options: {
    type: [Set<string>, Array<string>],
    required: true,
  },
  action: {
    type: Function,
    required: true,
  },
});

const router = useRouter();
const updateSelected = () => {
  props.action(selectedOptions.value);
  router.push({ name: "JobResults" });
};

const userStore = useUserStore();
userStore.$onAction(({ after, name }) => {
  after(() => {
    if (name === CLEAR_USER_JOB_FILTER_SELECTIONS) {
      selectedOptions.value = [];
    }
  });
});
</script>

<template>
  <CollapsibleAccordion :title="headerTitle">
    <div class="mt-5 text-sm">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li class="h-8 w-1/2" v-for="option in options" :key="option">
            <input
              type="checkbox"
              :id="option"
              class="mr-3"
              v-model="selectedOptions"
              :value="option"
              @change="updateSelected"
            />
            <label :for="option">{{ option }}</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </CollapsibleAccordion>
</template>
