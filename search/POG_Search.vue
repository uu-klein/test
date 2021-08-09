<template>
  <div>
    <div
      :class="{ 'pog-maskLayer-show': isShow, 'pog-maskLayer-hide': !isShow }"
      @click="closeSearch"
    ></div>
    <div class="pog-search-container">
      <input
        class="pog-search"
        placeholder="Search"
        @focus="focusFn"
        @input="changedInputFn"
        ref="searchRef"
        :value="inpuValue"
      />
      <span class="pog-focus-border"></span>
      <img
        class="pog-search-img"
        :src="
          isShow
            ? require('./icon/search_inactivated.svg')
            : require('./icon/search_activation.svg')
        "
      />
    </div>
    <SearchResult
      :list="list"
      :isShow="isShow"
      :historyRecord="historyRecord"
      :recommendGames="recommendGames"
      @loadMore="loadMore"
      @changedInputValue="changedInputValue"
      @previousPage="previousPage"
      @nextPage="nextPage"
      @clear="clear"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, onMounted } from "vue";

import SearchResult from "./components/searchResult/index.vue";

import { validator } from "./formValidation/util/validator";

type IDataProps<Type> = {
  name: Type;
};

type ISearchResult = {
  data: Array<IDataProps<string>>;
  total: number | string;
  currentTotal: number | string;
  progress: number;
  msgCode?: number | string;
  value?: string;
};

export default defineComponent({
  name: "POGSearch",
  props: {},
  components: {
    SearchResult,
  },
  setup() {
    let inpuValue: any = ref<string>("");

    let isShow: any = ref<boolean>(false);

    const focusFn: Function = () => (isShow.value = true);

    const closeSearch: Function = () => (isShow.value = false);

    const list: any = reactive<ISearchResult>({
      data: [],
      total: 0,
      currentTotal: 0,
      progress: 0,
    });

    const resetValues: Function = () => {
      list.data = [];
      list.total = 0;
      list.currentTotal = 0;
      list.progress = 0;
      list.value = "";
      list.msgCode = 0;
    };

    let testData: ISearchResult = {
      data: [
        {
          name: "总部",
        },
        {
          name: "地球",
        },
        {
          name: "火星",
        },
      ],
      total: 666,
      currentTotal: 20,
      progress: 10,
      msgCode: 0,
    };

    let nothingFoundData: ISearchResult = {
      data: [],
      total: 0,
      currentTotal: 0,
      progress: 0,
      value: "",
      msgCode: 1,
    };

    const changedInputFn: Function = (e: { target: HTMLInputElement }) => {
      const { value } = e.target;
      const _validator = new validator();
      _validator.add(value, "searchVerification");
      const result = _validator.check();
      if (result) {
        getGame(value);
      } else {
        // 提示错误  请输入正确的名称
        resetValues();
      }
    };

    /**
     * @Author: Klien
     * @Date: 2021-08-09 14:54:29
     * @LastEditTime: Do not edit
     * @description: 获取查询游戏数据
     * @param {*}   val 游戏名称
     * @return {*}
     */
    const getGame: Function = (val: string, type?: string) => {
      if (type === "loadMore") {
        let newArray = [
          {
            name: "总部",
          },
          {
            name: "地球",
          },
          {
            name: "火星",
          },
        ];
        testData.data = [...testData.data, ...newArray];
        testData.progress = testData.progress + 10;
        Object.assign(list, testData);
      } else {
      }
      console.log("========getGame====val", val);
      // 匹配正确 请求接口
      Object.assign(list, testData); // 有数据
      // if (nothingFoundData.msgCode === 1) {
      //   nothingFoundData.value = value;
      // }
      // Object.assign(list, nothingFoundData); // 无数据
    };

    /**
     * @Author: Klien
     * @Date: 2021-08-09 14:52:27
     * @LastEditTime: Do not edit
     * @description: 获取历史查询数据
     * @param {*}
     * @return {*}
     */
    let name: Array<IDataProps<string>> = [
      { name: "Ying Cai Shen" },
      { name: "Ying Cai Shen" },
      { name: "Ying Cai Shen" },
      { name: "Ying Cai Shen" },
      { name: "Ying Cai Shen" },
      { name: "Ying Cai Shen" },
      { name: "Ying Cai Shen" },
    ];

    const historyRecord: any = reactive<ISearchResult>({
      data: [],
      total: 0,
      currentTotal: 0,
      progress: 0,
    });

    const getHistoryRecord: Function = () => {
      //  请求数据   然后合并数据
      Object.assign(historyRecord.data, name);
    };
    const clear: Function = () => getHistoryRecord();

    /**
     * @Author: Klien
     * @Date: 2021-08-09 15:10:33
     * @LastEditTime: Do not edit
     * @description:
     * @param {*}
     * @return {*}
     */
    const recommendGames: any = reactive<ISearchResult>({
      data: [],
      total: 0,
      currentTotal: 0,
      progress: 0,
    });

    const getRecommendGames: Function = () => {
      Object.assign(recommendGames, testData);
    };

    const previousPage: Function = () => {
      console.log("previousPage");
    };

    const nextPage: Function = () => {
      console.log("nextPage");
    };

    /**
     * @Author: Klien
     * @Date: 2021-08-09 14:47:00
     * @LastEditTime: Do not edit
     * @description: 更换Input的值
     * @param {*} val string 类型
     * @return {*}
     */
    const changedInputValue: Function = (val: string) => {
      inpuValue.value = val;
      getGame(val);
    };
    /**
     * @Author: Klien
     * @Date: 2021-08-09 15:09:32
     * @LastEditTime: Do not edit
     * @description: 加载更多
     * @param {*}
     * @return {*}
     */
    const loadMore: Function = () => {
      getGame(inpuValue, "loadMore");
    };

    onMounted(() => {
      getHistoryRecord();
      getRecommendGames();
    });

    return {
      isShow,
      focusFn,
      closeSearch,
      changedInputFn,
      list,
      resetValues,
      loadMore,
      historyRecord,
      getHistoryRecord,
      changedInputValue,
      inpuValue,
      getGame,
      getRecommendGames,
      recommendGames,
      previousPage,
      nextPage,
      clear,
    };
  },
});
</script>

<style scoped lang="scss">
@import url("./search.scss");
.pog-maskLayer {
  z-index: 990;
  @include pog-relative-absolute(1);
  @include pog-heigh-width(0);
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  @include pog-opacity(0);
  transition: opacity 0.3s ease;
  &-show {
    @extend .pog-maskLayer;
    @include pog-opacity(1);
  }
  &-hide {
    @extend .pog-maskLayer;
    @include pog-opacity(0);
  }
}
.pog-search-container {
  @include pog-relative-absolute(0);
  z-index: 991;
  box-sizing: border-box;
  @include pog-heigh-width(2);
  @media only screen and (min-width: 1400px) {
    box-shadow: 0px 4px 6px rgb(0 0 0 / 20%);
    border-radius: 6px;
    width: 400px;
    height: 40px;
  }
  @media only screen and (max-width: 1366px) {
    border: none;
    height: 50px;
  }
  .pog-search {
    @include pog-relative-absolute(1);
    @include pog-heigh-width(0);
    @include pog-white(0);
    padding-left: 1em;
    padding-right: 3em;
    background: #481e22;
    caret-color: $pog-color;
    border: transparent;
    color: $pog-color;
    @media only screen and (min-width: 1400px) {
      box-shadow: 0px 4px 6px rgb(0 0 0 / 20%);
      border-radius: 6px;
    }
    &::placeholder {
      @media only screen and (min-width: 1400px) {
        @include pog-white(0);
      }
      @media only screen and (max-width: 1366px) {
        @include pog-white(1);
      }
    }
    &:focus {
      outline: none;
      & + .pog-focus-border {
        @include pog-heigh-width(2);
        transition: 0.4s;
        left: 0;
      }
    }
    & + .pog-focus-border {
      @include pog-relative-absolute(1);
      bottom: 0;
      left: 50%;
      width: 0;
      height: 2px;
      background-color: $pog-color;
      transition: 0.4s;
    }
  }
  .pog-search-img {
    height: 25px;
    width: 25px;
    @include pog-relative-absolute(1);
    @media only screen and (min-width: 1400px) {
      top: 0.5em;
      right: 0.5em;
    }
    @media only screen and (max-width: 1366px) {
      top: 0.8em;
      right: 0.7em;
    }
  }
}
</style>