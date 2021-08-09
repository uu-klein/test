<!--
 * @Author: Klien
 * @Date: 2021-08-07 19:12:29
 * @LastEditTime: 2021-08-09 12:59:12
 * @LastEditors: Klien
-->
<template>
  <div
    :class="{
      'pog-hint-show': result === 0,
      'pog-hint-hide': result > 0,
    }"
  >
    <span>Search requires at least 3 characters.</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Hint",
  props: {
    result: {
      type: Number,
      required: true,
    },
  },
  setup(props, context) {
    return {};
  },
});
</script>

<style lang="scss" scoped>
@import url("../../../search.scss");

.pog-hint {
  @media only screen and (min-width: 1400px) {
    margin-top: -24px;
    @include pog-heigh-width(2);
    height: 50px;
    @include pog-font(0);
    @include pog-font-size-line-height(1);
    @include pog-white(0);
    @include pog-cursor(0);
    @include pog-display(0);
  }
  @media only screen and (max-width: 1366px) {
    @include pog-display(1);
  }
  &-show {
    @extend .pog-hint;
  }
  &-hide {
    @extend .pog-hint;
    @include pog-display(1);
  }
}
</style>
