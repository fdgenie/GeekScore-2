<template>
  <the-dialog
    activator-icon="timer"
    color="#fff"
    header="Clock Tools"
    simple
    :footer="false"
    :close-on-submit="false"
  >
    <v-tabs v-model="tab" background-color="#d9d9d8">
      <v-tabs-slider color="secondary" />
      <v-tab
        v-for="tabItem in tabs"
        :key="tabItem.name"
        :href="`#${tabItem.href}`"
      >
        <span class="mt-2">{{ tabItem.name }}</span>
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item value="tab-timer">
        <tool-timer-fields :tab="tab" ref="toolTimerFields" />
      </v-tab-item>
      <v-tab-item value="tab-countdown">
        <tool-timer-fields :tab="tab" ref="toolTimerFields" />
      </v-tab-item>
    </v-tabs-items>
  </the-dialog>
</template>

<script>
import ToolTimerFields from "@/components/ToolTimerFields";

export default {
  name: "TimerDialog",
  components: {
    ToolTimerFields,
  },
  props: {
    tool: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      tab: null,
      tabs: [
        {
          name: "Timer",
          href: "tab-timer",
        },
        {
          name: "Countdown",
          href: "tab-countdown",
        },
      ],
    };
  },
  watch: {
    tab() {
      this.$refs.toolTimerFields
        ? this.$refs.toolTimerFields.stopTimer()
        : false;
    },
  },
};
</script>

<style scoped lang="scss">
.v-tabs-items {
  padding: 20px;
}
</style>
