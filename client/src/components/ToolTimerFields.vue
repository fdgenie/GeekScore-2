<template>
  <div>
    <span class="d-flex justify-center">
      <v-text-field
        v-model="time"
        label="Time"
        outlined
        :disabled="tab === 'tab-timer' ? true : false"
      />
    </span>
    <span class="d-flex row_between">
      <v-btn class="submit-btn test" ripple @click="playPauseTimer"
        ><v-icon :color="pause ? 'green' : 'yellow'"> {{ pause ? "mdi-play" : "mdi-pause" }} </v-icon
        >{{ pause ? "Play" : "Pause" }}</v-btn
      >
      <v-btn class="submit-btn" ripple @click="stopTimer">
        <v-icon color="red">mdi-stop</v-icon>Stop</v-btn
      >
    </span>
  </div>
</template>

<script>
export default {
  name: "ToolTimerFields",
  props: {
    tab: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      time: 0,
      pause: true,
      playInterval: false,
    };
  },
  destroyed() {
    this.stopTimer();
  },
  methods: {
    playPauseTimer() {
      this.pause = !this.pause;

      if (this.pause) {
        clearInterval(this.playInterval);
      } else {
        this.playInterval = setInterval(() => {
          if (this.tab === "tab-timer") {
            this.time++;
          } else {
            this.time > 0 ? this.time-- : this.stopTimer();
          }
        }, 1000);
      }
    },
    stopTimer() {
      this.time = 0;
      this.pause = true;
      clearInterval(this.playInterval);
      window.navigator.vibrate(1000);
    },
  },
};
</script>

<style scoped lang="scss">
.v-text-field {
  max-width: 150px;
}

.v-btn {
  max-width: 150px !important;
}
</style>
