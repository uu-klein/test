<!--
 * @Author: Klien
 * @Date: 2021-08-08 19:09:13
 * @LastEditTime: 2021-08-09 15:39:06
 * @LastEditors: Klien
-->


<template>
  <div class="pog-progress-bar">
    <div
      class="pog-progress-bar-progress"
      :style="{ width: progressWidth + '%' }"
    ></div>
  </div>
</template>
 
<style lang="scss" scoped>
@import url("../../../../search.scss");
.pog-progress-bar {
  width: 200px;
  height: 2px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 100px;
  &-progress {
    height: 100%;
    @include pog-heigh-width(1);
    background: #eb8106;
    border-radius: 100px;
    transition: 0.4s;
  }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProgressBar",
  props: {
    progressWidth: {
      type: Number,
      required: true,
    },
  },
  setup(props, context) {
    return {};
  },
});
</script>
