<template>
  <main>
    <div
      class="fixed inset-0 w-full z-20 bg-black bg-opacity-75 overflow-y-auto flex justify-center items-center"
    >
      <div class="lg:max-w-3xl w-full lg:px-0 px-3">
        <div class="bg-white w-full py-6 lg:px-20 rounded-lg relative h-auto">
          <div class="flex w-full items-center justify-center flex-col">
            <h1
              class="uppercase text-2xl font-black tracking-wide text-blue-700 text-center leading-5 lg:mt-0 mt-4"
            >Choose a Donation Type</h1>

            <svg
              @click="close"
              class="w-8 h-8 absolute lg:right-0 mr-8 cursor-pointer top-0 lg:mt-4 pt-1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 512 512"
              style="enable-background:new 0 0 512 512;"
              xml:space="preserve"
            >
              <g>
                <g>
                  <path
                    d="M256,0C114.844,0,0,114.844,0,256s114.844,256,256,256s256-114.844,256-256S397.156,0,256,0z M359.54,329.374    c4.167,4.165,4.167,10.919,0,15.085L344.46,359.54c-4.167,4.165-10.919,4.165-15.086,0L256,286.167l-73.374,73.374    c-4.167,4.165-10.919,4.165-15.086,0l-15.081-15.082c-4.167-4.165-4.167-10.919,0-15.085l73.374-73.375l-73.374-73.374    c-4.167-4.165-4.167-10.919,0-15.085l15.081-15.082c4.167-4.165,10.919-4.165,15.086,0L256,225.832l73.374-73.374    c4.167-4.165,10.919-4.165,15.086,0l15.081,15.082c4.167,4.165,4.167,10.919,0,15.085l-73.374,73.374L359.54,329.374z"
                  />
                </g>
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
          <div
            class="flex justify-center lg:flex-row flex-col items-center w-full lg:mt-10 lg:mx-0 px-3"
          >
            <div
              @click="local"
              class="shadow-xl bg-white lg:w-56 w-full px-3 lg:mb-0 mb-3 text-center rounded py-4 flex flex-col justify-center items-center"
            >
              <h1 class="text-sm font-black text-gray-900">Local Donations</h1>
              <div class="my-5">
                <svg
                  class="w-10 h-10"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -28 512.00002 512"
                  width="512px"
                  height="512px"
                >
                  <g>
                    <path
                      d="m471.382812 44.578125c-26.503906-28.746094-62.871093-44.578125-102.410156-44.578125-29.554687 0-56.621094 9.34375-80.449218 27.769531-12.023438 9.300781-22.917969 20.679688-32.523438 33.960938-9.601562-13.277344-20.5-24.660157-32.527344-33.960938-23.824218-18.425781-50.890625-27.769531-80.445312-27.769531-39.539063 0-75.910156 15.832031-102.414063 44.578125-26.1875 28.410156-40.613281 67.222656-40.613281 109.292969 0 43.300781 16.136719 82.9375 50.78125 124.742187 30.992188 37.394531 75.535156 75.355469 127.117188 119.3125 17.613281 15.011719 37.578124 32.027344 58.308593 50.152344 5.476563 4.796875 12.503907 7.4375 19.792969 7.4375 7.285156 0 14.316406-2.640625 19.785156-7.429687 20.730469-18.128907 40.707032-35.152344 58.328125-50.171876 51.574219-43.949218 96.117188-81.90625 127.109375-119.304687 34.644532-41.800781 50.777344-81.4375 50.777344-124.742187 0-42.066407-14.425781-80.878907-40.617188-109.289063zm0 0"
                      data-original="#000000"
                      class="active-path"
                      data-old_color="#000000"
                      fill="#FB5252"
                    />
                  </g>
                </svg>
              </div>
              <h1 class="text-xl font-black text-blue-600">Donate Now</h1>
              <p class="text-sm text-black font-light tracking-wide">Pay In Naira</p>
            </div>

            <div
              @click="international"
              class="shadow-xl bg-white lg:w-56 w-full px-3 text-center py-4 rounded lg:ml-12 flex flex-col justify-center items-center"
            >
              <h1 class="text-sm font-black text-gray-900">International Donations</h1>
              <div class="my-5">
                <svg
                  class="w-10 h-10"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -28 512.00002 512"
                  width="512px"
                  height="512px"
                >
                  <g>
                    <path
                      d="m471.382812 44.578125c-26.503906-28.746094-62.871093-44.578125-102.410156-44.578125-29.554687 0-56.621094 9.34375-80.449218 27.769531-12.023438 9.300781-22.917969 20.679688-32.523438 33.960938-9.601562-13.277344-20.5-24.660157-32.527344-33.960938-23.824218-18.425781-50.890625-27.769531-80.445312-27.769531-39.539063 0-75.910156 15.832031-102.414063 44.578125-26.1875 28.410156-40.613281 67.222656-40.613281 109.292969 0 43.300781 16.136719 82.9375 50.78125 124.742187 30.992188 37.394531 75.535156 75.355469 127.117188 119.3125 17.613281 15.011719 37.578124 32.027344 58.308593 50.152344 5.476563 4.796875 12.503907 7.4375 19.792969 7.4375 7.285156 0 14.316406-2.640625 19.785156-7.429687 20.730469-18.128907 40.707032-35.152344 58.328125-50.171876 51.574219-43.949218 96.117188-81.90625 127.109375-119.304687 34.644532-41.800781 50.777344-81.4375 50.777344-124.742187 0-42.066407-14.425781-80.878907-40.617188-109.289063zm0 0"
                      data-original="#000000"
                      class="active-path"
                      data-old_color="#000000"
                      fill="#FB5252"
                    />
                  </g>
                </svg>
              </div>
              <h1 class="text-xl font-black text-blue-600">Donate Now</h1>
              <p class="text-sm text-black font-light tracking-wide">Pay In Dollars</p>
            </div>
          </div>
          <!-- <div class="flex justify-center items-center w-full mt-12 mb-8">
            <div
              class="shadow-xl bg-white w-56 px-3 text-center rounded py-4 flex flex-col justify-center items-center"
            >
              <h1 class="text-sm font-black text-gray-900">Local Donations</h1>
              <div class="my-5">
                <svg
                  class="w-10 h-10"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -28 512.00002 512"
                  width="512px"
                  height="512px"
                >
                  <g>
                    <path
                      d="m471.382812 44.578125c-26.503906-28.746094-62.871093-44.578125-102.410156-44.578125-29.554687 0-56.621094 9.34375-80.449218 27.769531-12.023438 9.300781-22.917969 20.679688-32.523438 33.960938-9.601562-13.277344-20.5-24.660157-32.527344-33.960938-23.824218-18.425781-50.890625-27.769531-80.445312-27.769531-39.539063 0-75.910156 15.832031-102.414063 44.578125-26.1875 28.410156-40.613281 67.222656-40.613281 109.292969 0 43.300781 16.136719 82.9375 50.78125 124.742187 30.992188 37.394531 75.535156 75.355469 127.117188 119.3125 17.613281 15.011719 37.578124 32.027344 58.308593 50.152344 5.476563 4.796875 12.503907 7.4375 19.792969 7.4375 7.285156 0 14.316406-2.640625 19.785156-7.429687 20.730469-18.128907 40.707032-35.152344 58.328125-50.171876 51.574219-43.949218 96.117188-81.90625 127.109375-119.304687 34.644532-41.800781 50.777344-81.4375 50.777344-124.742187 0-42.066407-14.425781-80.878907-40.617188-109.289063zm0 0"
                      data-original="#000000"
                      class="active-path"
                      data-old_color="#000000"
                      fill="#FB5252"
                    />
                  </g>
                </svg>
              </div>
              <h1 class="text-xl font-black text-blue-600">Donate Now</h1>
              <p class="text-sm text-black font-light tracking-wide">Pay In Naira</p>
            </div>

            <div
              class="shadow-xl bg-white w-56 px-3 text-center py-4 rounyded ml-12 flex flex-col justify-center items-center"
            >
              <h1 class="text-sm font-black text-gray-900">International Donations</h1>
              <div class="my-5">
                <svg
                  class="w-10 h-10"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -28 512.00002 512"
                  width="512px"
                  height="512px"
                >
                  <g>
                    <path
                      d="m471.382812 44.578125c-26.503906-28.746094-62.871093-44.578125-102.410156-44.578125-29.554687 0-56.621094 9.34375-80.449218 27.769531-12.023438 9.300781-22.917969 20.679688-32.523438 33.960938-9.601562-13.277344-20.5-24.660157-32.527344-33.960938-23.824218-18.425781-50.890625-27.769531-80.445312-27.769531-39.539063 0-75.910156 15.832031-102.414063 44.578125-26.1875 28.410156-40.613281 67.222656-40.613281 109.292969 0 43.300781 16.136719 82.9375 50.78125 124.742187 30.992188 37.394531 75.535156 75.355469 127.117188 119.3125 17.613281 15.011719 37.578124 32.027344 58.308593 50.152344 5.476563 4.796875 12.503907 7.4375 19.792969 7.4375 7.285156 0 14.316406-2.640625 19.785156-7.429687 20.730469-18.128907 40.707032-35.152344 58.328125-50.171876 51.574219-43.949218 96.117188-81.90625 127.109375-119.304687 34.644532-41.800781 50.777344-81.4375 50.777344-124.742187 0-42.066407-14.425781-80.878907-40.617188-109.289063zm0 0"
                      data-original="#000000"
                      class="active-path"
                      data-old_color="#000000"
                      fill="#FB5252"
                    />
                  </g>
                </svg>
              </div>
              <h1 class="text-xl font-black text-blue-600">Donate Now</h1>
              <p class="text-sm text-black font-light tracking-wide">Pay In Dollars</p>
            </div>
          </div>-->
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  methods: {
    close() {
      this.$emit("close");
    },
    local() {
      window.open("https://paystack.com/pay/godscaremissionsinc", "_blank");
      this.close();
    },
    international() {
      window.open(
        "https://paystack.com/pay/dollargodscaremissionsinc",
        "_blank"
      );
      this.close();
    }
  }
};
</script>

<style>
</style>