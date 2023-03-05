<script>
import CollapsibleAccordion from "../Shared/CollapsibleAccordion.vue";

export default {
  name: "JobFilterSidebarCheckboxGroup",
  data() {
    return { selectedOptions: [] };
  },
  props: {
    headerTitle: {
      type: String,
      required: true,
    },
    options: {
      type: Set,
      required: true,
    },
    action: {
      type: Function,
      required: true,
    },
  },
  components: { CollapsibleAccordion },
  methods: {
    updateSelected() {
      this.action(this.selectedOptions);
      this.$router.push({ name: "JobResults" });
    },
  },
};
</script>

<template>
  <CollapsibleAccordion :title="headerTitle">
    <div class="mt-5 text-sm">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li class="h-8 w-1/2" v-for="option in options" :key="options">
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
