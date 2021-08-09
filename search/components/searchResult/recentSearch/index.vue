<!--
 * @Author: Klien
 * @Date: 2021-08-07 19:09:52
 * @LastEditTime: 2021-08-09 15:33:54
 * @LastEditors: Klien
-->
<template>
  <div class="pog-recent-search">
    <div class="pog-recent-search-title">
      <div class="pog-recent-search-title-name">
        <span class="pog-recent-search-title-name-pc">Recent Search: </span>
        <span class="pog-recent-search-title-name-h5"
          >Your Search History:
        </span>
      </div>
      <div class="pog-recent-search-title-clear">
        <span @click="clear">Clear</span>
      </div>
    </div>
    <div class="pog-recent-search-content">
      <ul>
        <li v-for="(item, index) in result" :key="index">
          <i></i>
          <span @click="searchValue(item.name)"> {{ item.name }} </span>
        </li>
      </ul>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "RecentSearch",
  props: {
    result: {
      type: Array,
      required: true,
    },
  },
  setup(props, context) {
    const searchValue: Function = (name: string) =>
      context.emit("changedInputValue", name);
    const clear: Function = () => context.emit("clear");
    return {
      searchValue,
      clear,
    };
  },
});
</script>

<style lang="scss" scoped>
@import url("../../../search.scss");
.pog-recent-search {
  &-title {
    @include pog-display(3);
    @media only screen and (max-width: 1366px) {
      padding: 9px;
    }
    &-name {
      @include pog-font(0);
      @include pog-font-size-line-height(1);
      @include pog-white(2);
      @include pog-cursor(0);
      @media only screen and (min-width: 1400px) {
        &-pc {
          @include pog-display(5);
        }
        &-h5 {
          @include pog-display(1);
        }
      }
      @media only screen and (max-width: 1366px) {
        &-pc {
          @include pog-display(1);
        }
        &-h5 {
          @include pog-display(5);
        }
      }
    }
    &-clear {
      @include pog-font(0);
      @include pog-cursor(1);

      @media only screen and (min-width: 1400px) {
        @include pog-font-size-line-height(1);
        @include pog-white(2);
      }
      @media only screen and (max-width: 1366px) {
        @include pog-font-size-line-height(3);
        @include pog-white(3);
      }
    }
  }
  &-content {
    @media only screen and (min-width: 1400px) {
      ul {
        padding-left: 1em;
        margin-top: 0.6em;
        li {
          @include pog-list-style-type(0);
          @include pog-display(4);
          margin-bottom: 0.5em;
          margin-left: -0.6em;
          &:hover {
            i {
              @include pog-opacity(1);
            }
            span {
              @include pog-white(2);
              @include pog-opacity(1);
            }
          }
          i {
            height: 18px;
            width: 18px;
            background-repeat: no-repeat;
            background-size: contain;
            margin-right: 0.5em;
            background-image: url("../../../icon/time.svg");
            @include pog-opacity(2);
          }
          span {
            @include pog-opacity(2);
            @include pog-font(0);
            @include pog-font-size-line-height(1);
            height: 20px;
            @include pog-cursor(1);
            @include pog-white(0);
          }
        }
      }
    }
    @media only screen and (max-width: 1366px) {
      ul {
        @include pog-display(6);
        padding: 9px;
        margin: 0;
        margin-top: -0.8em;
        li {
          @include pog-list-style-type(0);
          border: 1px solid rgba(255, 255, 255, 0.4);
          box-sizing: border-box;
          border-radius: 4px;
          text-align: center;
          margin: 8px;
          width: auto;
          padding: 6px 8px 6px 8px;
          span {
            @include pog-font(0);
            @include pog-font-size-line-height(4);
            text-align: center;
            @include pog-white(3);
          }
        }
      }
    }
  }
}
</style>


