<!--
 * @Author: Klien
 * @Date: 2021-08-07 14:22:57
 * @LastEditTime: 2021-08-09 15:32:09
 * @LastEditors: Klien
-->
<template>
  <div
    :class="{
      'pog-search-result-container-show': isShow,
      'pog-search-result-container-hide': !isShow,
    }"
  >
    <Hint :result="list.data.length" />
    <GameList :result="list" v-bind="$attrs" />
    <NothingFound :result="list" />
    <RecentSearch :result="historyRecord.data" v-bind="$attrs" />
    <RecommendedGames :result="recommendGames.data" v-bind="$attrs" />
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from "vue";
import NothingFound from "./nothingFound/index.vue";
import RecentSearch from "./recentSearch/index.vue";
import Hint from "./hint/index.vue";
import RecommendedGames from "./recommendedGames/index.vue";
import GameList from "./gameList/index.vue";

export default defineComponent({
  name: "SearchResult",
  components: {
    NothingFound,
    RecentSearch,
    Hint,
    RecommendedGames,
    GameList,
  },
  props: {
    list: {
      type: Object,
      required: true,
    },
    isShow: {
      type: Boolean,
      required: true,
    },
    historyRecord: {
      type: Object,
      required: true,
    },
    recommendGames: {
      type: Object,
      required: true,
    },
  },
  setup(props, context) {
    return {};
  },
});
</script>

<style lang="scss" scoped>
@import url("../../search.scss");
.pog-search-result-container::-webkit-scrollbar {
  width: 6px;
  height: 247px;
  background: #281113;
  border-radius: 6px;
}
.pog-search-result-container::-webkit-scrollbar-button {
  display: none;
}
.pog-search-result-container::-webkit-scroll-track {
  display: none;
}
.pog-search-result-container::-webkit-scrollbar-track-piece {
  display: none;
}
.pog-search-result-container::-webkit-scrollbar-thumb {
  background-color: #82363d;
  border-radius: 6px;
  box-shadow: inset 0 0 0px rgba(240, 240, 240, 0.5);
}
.pog-search-result-container::-webkit-scrollbar-corner {
  display: none;
}
.pog-search-result-container::-webkit-resizer {
  display: none;
}

.pog-search-result-container {
  z-index: 992;
  @include pog-relative-absolute(1);
  @include pog-opacity(0);
  box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.4);
  border-radius: 0px 0px 8px 8px;
  @media only screen and (min-width: 1400px) {
    width: 940px;
    height: 683px;
    padding: 24px;
    top: 55px;
    overflow-y: scroll;
    background: #281113;
    transition: opacity 0.3s ease;
  }
  &-show {
    @extend .pog-search-result-container;
    @include pog-opacity(1);
  }
  &-hide {
    @extend .pog-search-result-container;
    @include pog-opacity(0);
  }
  @media only screen and (max-width: 1366px) {
    @include pog-heigh-width(0);
    top: 50px;
    background: #1d1d1d;
    overflow-y: scroll;
  }
}
</style>
