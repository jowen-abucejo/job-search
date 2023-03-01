<script>
import ActionButton from "../Shared/ActionButton.vue";
import CollapsibleAccordion from "../Shared/CollapsibleAccordion.vue";

export default {
  name: "JobFilterSidebar",
  components: { ActionButton, CollapsibleAccordion },
};
</script>

<template>
  <div
    class="flex w-96 flex-col border-r border-solid border-gray-300 bg-white p-4"
  >
    <section class="pb-5">
      <div class="flex flex-row justify-between">
        <h3 class="my-4 text-base font-semibold">What do you want to do?</h3>
        <div class="flex items-center text-sm">
          <ActionButton
            text="Clear Filter"
            color="secondary"
            class="mx-2 rounded border-none p-2"
          />
        </div>
      </div>
      <CollapsibleAccordion title="Organization">
        <div class="mt-5 text-sm">
          <fieldset>
            <ul class="flex flex-row flex-wrap">
              <li class="h-8 w-1/2">
                <input type="checkbox" id="VueTube" class="mr-3" />
                <label for="VueTube">VueTube</label>
              </li>
              <li class="h-8 w-1/2">
                <input type="checkbox" id="Between Vue and Me" class="mr-3" />
                <label for="Between Vue and Me">Between Vue & Me</label>
              </li>
              <li class="h-8 w-1/2">
                <input type="checkbox" id="Et Vue Brute" class="mr-3" />
                <label for="Et Vue Brute">Et Vue Brute</label>
              </li>
              <li class="h-8 w-1/2">
                <input type="checkbox" id="Vue and a Half Men" class="mr-3" />
                <label for="Vue and a Half Men">Vue and a Half Men</label>
              </li>
            </ul>
          </fieldset>
        </div>
      </CollapsibleAccordion>
    </section>
  </div>
</template>
