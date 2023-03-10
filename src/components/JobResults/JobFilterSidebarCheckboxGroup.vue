<script lang="ts" setup>
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
