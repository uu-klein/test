<!--
 * @Author: Klien
 * @Date: 2021-08-07 19:06:18
 * @LastEditTime: 2021-08-09 13:56:07
 * @LastEditors: Klien
-->
<template>
  <div
    class="pog-nothing-found"
    v-if="result.value !== '' && result.msgCode === 1"
  >
    <div class="pog-nothing-found-title">
      <img />
      <span>Nothing found：</span>
    </div>
    <div class="pog-nothing-found-content">
      <span>Sorry, nothing matched to“</span>
      <span class="pog-nothing-found-content-key-words">{{
        result.value
      }}</span>
      <span>”.Please try some other term.</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NothingFound",
  props: {
    result: {
      type: Object,
      required: true,
    },
  },
  setup() {},
});
</script>



<style lang="scss" scoped>
@import url("../../../search.scss");
.pog-nothing-found {
  @media only screen and (min-width: 1400px) {
    height: 60px;
    @include pog-heigh-width(2);
    @include pog-cursor(0);
    &-title {
      height: 21px;
      @include pog-heigh-width(2);
      @include pog-font(0);
      @include pog-font-size-line-height(0);
      @include pog-white(2);
    }
    &-content {
      height: 39px;
      @include pog-heigh-width(2);
      @include pog-font(0);
      @include pog-font-size-line-height(0);
      @include pog-white(2);
      @include pog-display(2);
      &-key-words {
        @include pog-font(0);
        @include pog-font-size-line-height(0);
        color: $pog-color;
      }
    }
  }
  @media only screen and (max-width: 1366px) {
    height: 80px;
    @include pog-heigh-width(2);
    &-title {
      height: 21px;
      @include pog-font(0);
      @include pog-font-size-line-height(1);
      @include pog-white(2);
      padding: 9px;
    }
    &-content {
      padding: 9px;
      margin-top: -0.9em;
      height: auto;
      @include pog-font(0);
      @include pog-font-size-line-height(2);
      @include pog-white(0);
      &-key-words {
        @include pog-font(0);
        @include pog-font-size-line-height(2);
        color: red;
      }
    }
  }
}
</style>

