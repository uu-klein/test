<!--
 * @Author: Klien
 * @Date: 2021-08-07 23:14:40
 * @LastEditTime: 2021-08-09 15:29:16
 * @LastEditors: Klien
-->
<template>
  <div class="pog-recommended-games">
    <div class="pog-recommended-games-title">
      <div class="pog-recommended-games-title-name">
        <i></i>
        <span class="pc"> Recommended Games: </span>
        <span class="h5"> Popular Search: </span>
      </div>

      <div class="pog-recommended-games-title-turnpage">
        <div class="pog-recommended-games-title-turnpage-button">
          <i
            @click="previousPage"
            tabindex="1"
            class="pog-recommended-games-title-turnpage-button-left-img"
          ></i>
          <i
            @click="nextPage"
            tabindex="2"
            class="pog-recommended-games-title-turnpage-button-right-img"
          ></i>
        </div>
      </div>
    </div>
    <div class="pog-recommended-games-content">
      <ul>
        <li v-for="index in result" :key="index">
          <div class="gameImg">
            <img src="../../../icon/testgame.jpg" alt />
          </div>
          <div class="gameName">
            <div class="name">
              <span>Ying Cai Shen</span>
              <span style="margin-left: -1.8em; margin-top: 0.2em">CQ9</span>
              <span class="percentage">RTP: 96.65%</span>
            </div>
            <div class="isCollect">
              <i></i>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "RecommendedGames",
  props: {
    result: {
      type: Array,
      required: true,
    },
  },
  setup(props, context) {
    const previousPage: Function = () => context.emit("previousPage");
    const nextPage: Function = () => context.emit("nextPage");
    return {
      previousPage,
      nextPage,
    };
  },
});
</script>

<style lang="scss" scoped>
.pog-recommended-games {
  &-title {
    @include pog-heigh-width(2);
    height: 40px;
    @include pog-display(2);
    &-name {
      @include pog-display(2);
      width: 50%;
      i {
        height: 16px;
        width: 16px;
        @include pog-background-repeat-size(0);
        margin-right: 0.3em;
        background-image: url("../../../icon/diamond.svg");
        @media only screen and (max-width: 1366px) {
          @include pog-display(1);
        }
      }
      @media only screen and (min-width: 1400px) {
        .pc {
          @include pog-heigh-width(2);
          width: auto;
          @include pog-display(0);
          @include pog-white(2);
        }
        .h5 {
          @include pog-display(1);
        }
      }
      @media only screen and (max-width: 1366px) {
        .pc {
          @include pog-display(1);
        }
        .h5 {
          @include pog-heigh-width(2);
          width: auto;
          @include pog-display(0);
          @include pog-white(2);
          padding-left: 9px;
        }
      }
    }
    &-turnpage {
      height: 36px;
      width: 50%;
      @include pog-display(8);
      @media only screen and (max-width: 1366px) {
        @include pog-display(1);
      }
      &-button {
        width: 100px;
        @include pog-heigh-width(1);
        @include pog-display(0);
        &-left-img {
          height: 30px;
          width: 50px;
          border: 1px solid rgba(255, 255, 255, 0.4);
          @include pog-border-radius(2);
          @include pog-border-radius(4);
          background-position-x: center;
          @include pog-background-repeat-size(0);
          background-image: url("../../../icon/left.svg");
          &:hover {
            border: 1px solid #eb8106;
            background-image: url("../../../icon/left_focus.svg");
          }
          &:focus {
            border: 1px solid #eb8106;
            background-image: url("../../../icon/left_focus.svg");
          }
        }
        &-right-img {
          height: 30px;
          width: 50px;
          border: 1px solid rgba(255, 255, 255, 0.4);
          @include pog-border-radius(1);
          @include pog-border-radius(3);
          background-position-x: center;
          @include pog-background-repeat-size(0);
          background-image: url("../../../icon/right.svg");
          &:hover {
            border: 1px solid #eb8106;
            background-image: url("../../../icon/right_focus.svg");
          }
          &:focus {
            border: 1px solid #eb8106;
            background-image: url("../../../icon/right_focus.svg");
          }
        }
      }
    }
  }

  &-content {
    ul {
      @include pog-display(6);
      @include pog-margin-padding(0);
      li {
        @include pog-list-style-type(0);
        @include pog-display(5);
        background: #291d1d;
        border: 1px solid #65343c;
        box-sizing: border-box;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.7);
        margin: 0.6em;
        @media only screen and (max-width: 1366px) {
          height: 246px;
          width: 163px;
          @include pog-border-radius(0);
        }
        @media only screen and (min-width: 1400px) {
          width: 206px;
          height: 296px;
          @include pog-border-radius(5);
        }

        .gameImg {
          @media only screen and (max-width: 1366px) {
            height: 163px;
            width: 161px;
            @include pog-border-radius(1);
            @include pog-border-radius(2);
          }
          @media only screen and (min-width: 1400px) {
            height: 206px;
            width: 204px;
            @include pog-border-radius(6);
            @include pog-border-radius(7);
          }
          overflow: hidden;

          img {
            height: auto;
            width: auto;
            max-height: 100%;
            max-width: 100%;
            @include pog-background-repeat-size(1);
            @media only screen and (max-width: 1366px) {
              @include pog-border-radius(1);
              @include pog-border-radius(2);
            }
            @media only screen and (min-width: 1400px) {
              @include pog-border-radius(6);
              @include pog-border-radius(7);
            }

            transform: scale(1);
            transition: transform 1s ease 0s;
            &:hover {
              transform: scale(1.05);
            }
          }
        }
        .gameName {
          @include pog-display(4);
          height: 90px;
          @include pog-heigh-width(2);
          .name {
            width: 150px;
            height: 68px;
            border-bottom-left-radius: 16px;
            margin-left: -0.8em;
            @include pog-display(7);
            @media only screen and (max-width: 1366px) {
              margin-top: 0.6em;
            }
            @media only screen and (min-width: 1400px) {
              margin-top: 0.9em;
            }

            span {
              @include pog-heigh-width(2);
              height: 20px;
              @include pog-font(0);
              @include pog-font-size-line-height(1);
              @include pog-white(2);
              @include pog-display(0);
            }
            .percentage {
              color: red;
            }
          }
          .isCollect {
            @include pog-heigh-width(1);
            width: 54px;
            border-bottom-right-radius: 16px;
            @media only screen and (max-width: 1366px) {
              @include pog-display(1);
            }
            i {
              height: 30px;
              width: 30px;
              @include pog-relative-absolute(1);
              @include pog-background-repeat-size(0);
              margin-top: 3em;
              margin-left: 1.2em;
              background-image: url("../../../icon/not_collected.svg");
              &:hover {
                background-image: url("../../../icon/collected.svg");
              }
            }
          }
        }
      }
    }
  }
}
</style>


