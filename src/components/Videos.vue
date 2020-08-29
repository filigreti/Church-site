<template>
  <div
    class="flex justify-center h-64 items-center"
    v-if="$store.state.loading"
  >
    <img src="@/assets/36.gif" alt />
  </div>
  <main v-else-if="getVideos.results.length">
    <div class="flex items-center lg:px-0 px-3">
      <div class="flex items-center">
        <p class="text-sm font-medium">Filter</p>
        <div>
          <svg
            class="h-5 ml-3 w-5 text-gray-700"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            id="Capa_1"
            x="0px"
            y="0px"
            viewBox="0 0 290.5 290.5"
            style="enable-background: new 0 0 290.5 290.5;"
            xml:space="preserve"
          >
            <g>
              <path
                d="M74,66.001h209c4.143,0,7.5-3.358,7.5-7.5s-3.357-7.5-7.5-7.5H74c-4.142,0-7.5,3.358-7.5,7.5S69.858,66.001,74,66.001z"
              />
              <path
                d="M283,138H74c-4.142,0-7.5,3.358-7.5,7.5c0,4.142,3.358,7.5,7.5,7.5h209c4.143,0,7.5-3.358,7.5-7.5   C290.5,141.358,287.143,138,283,138z"
              />
              <path
                d="M283,224.999H74c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5h209c4.143,0,7.5-3.358,7.5-7.5S287.143,224.999,283,224.999   z"
              />
              <path
                d="M26,32.501c-14.336,0-26,11.664-26,26s11.664,26,26,26c14.336,0,26-11.664,26-26S40.336,32.501,26,32.501z M26,69.501   c-6.075,0-11-4.925-11-11c0-6.075,4.925-11,11-11c6.075,0,11,4.925,11,11C37,64.576,32.075,69.501,26,69.501z"
              />
              <path
                d="M26,119.5c-14.336,0-26,11.664-26,26c0,14.336,11.664,26,26,26c14.336,0,26-11.664,26-26C52,131.164,40.336,119.5,26,119.5   z M26,156.5c-6.075,0-11-4.925-11-11c0-6.075,4.925-11,11-11c6.075,0,11,4.925,11,11C37,151.575,32.075,156.5,26,156.5z"
              />
              <path
                d="M26,205.999c-14.336,0-26,11.664-26,26s11.664,26,26,26c14.336,0,26-11.664,26-26S40.336,205.999,26,205.999z M26,242.999   c-6.075,0-11-4.925-11-11s4.925-11,11-11c6.075,0,11,4.925,11,11S32.075,242.999,26,242.999z"
              />
            </g>
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
          </svg>
        </div>
      </div>
      <div class="lg:w-3/5 w-4/5 ml-6 lg:ml-24">
        <input
          class="bg-gray-100 focus:outline-none border focus:shadow-outline rounded-full text-xs font-light py-2 pl-5 pr-4 block w-full appearance-none leading-6"
          type="email"
          placeholder="Search"
        />
      </div>
    </div>
    <div class="grid lg:grid-cols-3 grid-cols-2 lg:px-0 px-3 gap-8 mt-10">
      <div
        class="rounded shadow-lg border overflow-hidden"
        v-for="(video, i) in getVideos.results"
        :key="i"
      >
        <div class="flex items-center justify-center relative h-40">
          <svg
            class="w-16 h-16 absolute text-gray-800 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 419.84 419.84"
          >
            <path
              d="M209.92 0C93.7 0 0 93.7 0 209.92s93.7 209.92 209.92 209.92 209.92-93.7 209.92-209.92S326.14 0 209.92 0zm93.18 219.65l-139.77 81.92c-1.54 1.02-4.1 1.53-5.63 1.53s-4.1-.5-5.64-1.53c-3.58-2.56-5.63-5.63-5.63-9.73V128.51h-.51c0-4.1 2.56-8.19 5.63-9.73 3.07-1.53 8.2-2.56 11.78 0L303.1 200.2c3.59 2.56 5.64 5.63 5.64 9.73s-2.56 8.2-5.64 9.73z"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-32 fill-current text-gray-300"
            viewBox="0 0 512 512"
          >
            <path
              d="M229.32 189.02c-9.4 0-17.03 7.62-17.03 17.03v99.9a17.03 17.03 0 1034.06 0v-99.9c0-9.4-7.62-17.03-17.03-17.03zM176.53 136.23c-9.4 0-17.03 7.62-17.03 17.03v205.49a17.03 17.03 0 1034.06 0v-205.5c0-9.4-7.62-17.02-17.03-17.02zM123.17 86.85c-9.4 0-17.02 7.62-17.02 17.03v304.24a17.03 17.03 0 1034.05 0V103.88c0-9.41-7.62-17.03-17.02-17.03zM70.39 136.23c-9.41 0-17.03 7.62-17.03 17.03v205.49a17.03 17.03 0 1034.05 0v-205.5c0-9.4-7.62-17.02-17.02-17.02zM17.03 185.61c-9.4 0-17.03 7.63-17.03 17.03v106.72a17.03 17.03 0 1034.06 0V202.64c0-9.4-7.63-17.03-17.03-17.03zM388.82 86.85c-9.4 0-17.02 7.62-17.02 17.03v304.24a17.03 17.03 0 1034.05 0V103.88c0-9.41-7.62-17.03-17.03-17.03zM335.47 136.23c-9.4 0-17.03 7.62-17.03 17.03v205.49a17.03 17.03 0 1034.06 0v-205.5c0-9.4-7.63-17.02-17.03-17.02zM282.68 162.9c-9.4 0-17.03 7.63-17.03 17.04v152.12a17.03 17.03 0 1034.06 0V179.94c0-9.4-7.63-17.03-17.03-17.03zM441.61 136.23c-9.4 0-17.03 7.62-17.03 17.03v205.49a17.03 17.03 0 1034.06 0v-205.5c0-9.4-7.62-17.02-17.03-17.02zM494.97 185.61c-9.4 0-17.03 7.63-17.03 17.03v106.72a17.03 17.03 0 1034.06 0V202.64c0-9.4-7.62-17.03-17.03-17.03z"
            />
          </svg>
        </div>
        <div class="border-t bg-gray-200 p-4 h-full">
          <p class="text-xs text-gray-700 font-medium tracking-wide">
            {{ video.title }}
          </p>
          <div>
            <p class="text-xs text-gray-700 font-light tracking-wide">
              {{ video.publisher }}
            </p>
          </div>
          <a
            :href="video.video_file"
            target="_blank"
            style="font-size: 0.59rem;"
            class="text-red-500 relative inline-flex z-30 font-normal text-right w-full mr-5 tracking-tight"
          >
            <svg
              style="bottom: 0px;"
              class="w-4 h-4 text-gray-800 absolute right-0"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 512 512"
              xml:space="preserve"
            >
              <g>
                <g>
                  <path
                    d="M382.56,233.376C379.968,227.648,374.272,224,368,224h-64V16c0-8.832-7.168-16-16-16h-64c-8.832,0-16,7.168-16,16v208h-64    c-6.272,0-11.968,3.68-14.56,9.376c-2.624,5.728-1.6,12.416,2.528,17.152l112,128c3.04,3.488,7.424,5.472,12.032,5.472    c4.608,0,8.992-2.016,12.032-5.472l112-128C384.192,245.824,385.152,239.104,382.56,233.376z"
                  />
                </g>
              </g>
              <g>
                <g>
                  <path
                    d="M432,352v96H80v-96H16v128c0,17.696,14.336,32,32,32h416c17.696,0,32-14.304,32-32V352H432z"
                  />
                </g>
              </g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
            </svg>
          </a>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-center mt-10 mb-20">
      <button
        v-if="getAssets.next !== null"
        @click="loadMore"
        class="text-sm rounded-full bg-transparent hover:bg-blue-500 text-blue-500 font-light hover:text-white outline-none shadow-none focus:outline-none py-2 leading-7 px-12 mt-6 border border-blue-500 hover:border-transparent rounded"
      >
        Load More
      </button>
    </div>
  </main>
  <div class="flex justify-center items-center py-32" v-else>
    <div class="text-gray-700">No Video Files for now, work in progress</div>
  </div>
</template>


<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getAssets"]),
    getVideos() {
      return this.getAssets;
    },
  },
  methods: {
    async loadMore(x) {
      this.$store.commit("setcurrentPage");
      await this.$store.dispatch("onlineStores", "videos");
    },
    async makeCalls(x) {
      let res = await this.$store.dispatch("onlineStores", x);
      console.log(res);
    },
  },
  async created() {
    this.$store.commit("resetAssets");
    await this.$store.dispatch("onlineStores", "videos");

    // let routeName = x.name.toLowerCase();
    // await this.getAssets(routeName);
  },
};
</script>


<style>
</style>