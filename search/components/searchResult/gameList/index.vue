<!--
 * @Author: Klien
 * @Date: 2021-08-08 18:10:32
 * @LastEditTime: 2021-08-09 15:08:18
 * @LastEditors: Klien
-->
<template>
  <div class="pog-game-list">
    <ul>
      <li v-for="index in result.data" :key="index">
        <img src="../../../icon/testgame.jpg" alt />
        <div class="name">
          <span>Ying Cai Shen</span>

          <span class="percentage">RTP: 96.65%</span>
          <span>
            <img src="../../../icon/logo.svg" alt />
          </span>
        </div>
      </li>
    </ul>
    <div class="pog-game-list-total" v-if="result.data.length > 0">
      <ProgressBar :progressWidth="result.progress" />
      <span>
        Displaying {{ result.currentTotal }} of {{ result.total }} games
      </span>
      <div class="pog-game-list-total-load-more" v-on:click="loadMore">
        Load More
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import ProgressBar from "./progressBar/index.vue";

export default defineComponent({
  name: "GameList",
  components: { ProgressBar },
  props: {
    result: {
      type: Object,
      required: true,
    },
  },
  setup(props, context) {
    const loadMore: Function = () => context.emit("loadMore");
    return {
      loadMore,
    };
  },
});
</script>

<style lang="scss" scoped>
@import url("../../../search.scss");
.pog-game-list {
  @media only screen and (min-width: 1400px) {
    @include pog-heigh-width(2);
    height: auto;
    ul {
      @include pog-margin-padding(0);
      li {
        @include pog-list-style-type(0);
        height: 127px;
        width: 100%;
        margin: 1em;
        @include pog-display(2);
        overflow: hidden;
        border-top-left-radius: 10.4606px;
        border-bottom-left-radius: 10.4606px;
        img {
          height: auto;
          width: 126px;
          background: #291d1d;
          border: 0.653787px solid #65343c;
          box-sizing: border-box;
          box-shadow: 0px 6.53787px 6.53787px rgba(0, 0, 0, 0.5);
          border-radius: 10.4606px;
          @include pog-background-repeat-size(1);
          transform: scale(1);
          transition: transform 1s ease 0s;
          &:hover {
            transform: scale(1.05);
          }
        }
        .name {
          height: 90;
          width: auto;
          @include pog-display(7);
          padding-left: 1em;
          padding-right: 1em;
          @include pog-cursor(0);

          span {
            height: 30px;
            @include pog-display(2);
            @include pog-white(2);
            @include pog-font(1);
            @include pog-font-size-line-height(0);
            img {
              width: 69px;
              height: 14px;
            }
          }
          .percentage {
            @include pog-font(1);
            @include pog-font-size-line-height(7);
            color: #d32733;
          }
        }
      }
    }

    &-total {
      height: 100px;
      @include pog-heigh-width(2);
      @include pog-display(9);
      span {
        @include pog-font(0);
        @include pog-font-size-line-height(1);
        text-align: center;
        @include pog-white(0);
      }
      &-load-more {
        width: 200px;
        height: 50px;
        border: 1px solid $pog-color;
        @include pog-display(0);
        color: $pog-color;
        @include pog-border-radius(0);
        @include pog-cursor(1);
        @include pog-relative-absolute(0);
        outline: 0;
        overflow: hidden;
        transition: background-color 0.25s;
        &::after {
          content: "";
          @include pog-relative-absolute(1);
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: radial-gradient(
            circle,
            #ccc 10%,
            transparent 10.1%
          );
          transform: scale(10);
          @include pog-opacity(0);
          transition: all 0.6s;
        }
        &:active::after {
          transform: scale(0);
          @include pog-opacity(2);
          transition: 0s;
        }
      }
    }
  }
  @media only screen and (max-width: 1366px) {
    @include pog-display(1);
  }
}
</style>


