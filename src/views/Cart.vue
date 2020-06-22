<template>
  <main class="mb-24 mt-12">
    <div class="flex items-center justify-between">
      <h1 class="text-3xl tracking-normal font-black">Shopping Cart</h1>
      <div class="flex items-center">
        <h2 class="text-xl">
          Subtotal (3 items):
          <span class="text-red-600 text-xl">$63</span>
        </h2>
        <button class="py-4 px-6 bg-black rounded-sm text-white ml-4">Proceed to checkout</button>
      </div>
    </div>
    <div class="grid grid-area mt-8 border-b pb-2">
      <div class="text-center"></div>
      <div class="text-center text-gray-600 text-xl font-light">Quantity</div>
      <div class="text-center text-gray-600 text-xl font-light">Price</div>
      <div class="text-center"></div>
    </div>
    <div v-for="i in 3" :key="i" class="grid grid-area pb-2 border-b">
      <div class="h-24 ml-10 mr-20 my-8">
        <div class="shadow-md w-full h-full py-3 px-4 flex items-center">
          <svg
            class="w-16 h-16 my-3"
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            enable-background="new 0 0 512 512"
            height="512"
            viewBox="0 0 512 512"
            width="512"
          >
            <g>
              <g id="XMLID_571_">
                <g>
                  <g id="XMLID_1009_">
                    <g id="XMLID_1010_">
                      <g id="XMLID_1011_">
                        <g id="XMLID_1012_">
                          <g id="XMLID_1013_">
                            <g id="XMLID_1014_">
                              <g id="XMLID_1015_">
                                <g id="XMLID_1016_">
                                  <g id="XMLID_1017_">
                                    <g id="XMLID_1018_">
                                      <g id="XMLID_1019_">
                                        <g id="XMLID_1020_">
                                          <g id="XMLID_1021_">
                                            <g id="XMLID_1022_">
                                              <circle cx="256" cy="256" fill="#238cf8" r="256" />
                                            </g>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
              <path
                d="m511.97 258.345-205.96-205.96-231.464 308.434 27.917 28.213 11.802 50.741 58.313 58.313c26.15 9.01 54.212 13.914 83.422 13.914 140.601 0 254.709-113.352 255.97-253.655z"
                fill="#0768dd"
              />
              <g>
                <g>
                  <path
                    d="m95.751 103.679v296.645c0 28.329 22.965 51.294 51.294 51.294h217.906c28.329 0 51.294-22.965 51.294-51.294v-237.704l-110.235-110.235h-158.965c-28.329 0-51.294 22.965-51.294 51.294z"
                    fill="#fff"
                  />
                  <path
                    d="m416.249 162.617v237.707c0 28.328-22.964 51.292-51.292 51.292h-108.96v-399.234h50.017z"
                    fill="#eae1dc"
                  />
                  <path d="m416.245 162.62-110.235-110.235v110.235z" fill="#cec5c0" />
                </g>
                <path
                  d="m417.391 367.51h-322.782c-18.459 0-33.424-14.964-33.424-33.424v-87.018c0-18.459 14.964-33.424 33.424-33.424h322.782c18.459 0 33.424 14.964 33.424 33.424v87.018c0 18.46-14.965 33.424-33.424 33.424z"
                  fill="#ff807d"
                />
                <path
                  d="m450.81 247.07v87.02c0 18.46-14.96 33.42-33.42 33.42h-161.39v-153.87h161.39c18.46 0 33.42 14.97 33.42 33.43z"
                  fill="#fc3e53"
                />
                <g>
                  <path
                    d="m342.208 269.444v-15h-38.21v28.091 15 29.176h15v-29.176h21.366v-15h-21.366v-13.091z"
                    fill="#eae1dc"
                  />
                  <path
                    d="m256.433 255.086h-23.37v.099h-.027l.041 7.551c.003 1.746.041 21.678.041 27.78 0 7.783.072 28.08.072 28.08l.026 7.501 7.502-.028c.479-.002 11.789-.045 16.309-.125 17.102-.299 29.514-15.173 29.514-35.367 0-21.228-12.1-35.491-30.108-35.491zm.333 55.861c-1.949.034-5.288.062-8.424.082l-.224-40.943h8.315c14.019 0 15.108 15.685 15.108 20.492 0 13.892-7.421 20.241-14.775 20.369z"
                    fill="#fff"
                  />
                  <path
                    d="m286.541 290.578c0-21.229-12.1-35.492-30.108-35.492h-.433v15h.433c14.019 0 15.108 15.685 15.108 20.492 0 13.893-7.421 20.241-14.775 20.369-.235.004-.493.008-.766.012v15.002c.37-.005.716-.01 1.027-.016 17.102-.299 29.514-15.173 29.514-35.367z"
                    fill="#eae1dc"
                  />
                  <path
                    d="m193.355 254.232h-8.563-7.5-7.5v72.69h15v-25.099c3.154-.016 6.566-.031 8.563-.031 13.288 0 24.099-10.668 24.099-23.78 0-13.111-10.81-23.78-24.099-23.78zm0 32.561c-1.983 0-5.355.014-8.493.03-.016-3.249-.03-6.77-.03-8.81 0-1.732-.009-5.376-.018-8.78h8.541c4.932 0 9.099 4.021 9.099 8.78s-4.167 8.78-9.099 8.78z"
                    fill="#fff"
                  />
                </g>
              </g>
            </g>
          </svg>
          <div class="ml-4">
            <h1 class="text-xl leading-6">Divine Agenda</h1>
            <p class="text-sm font-light leading-4">Evang. Sunday Oguche</p>
          </div>
        </div>
      </div>
      <div class="text-right font-light flex items-center justify-center text-xl text-gray-600">1</div>
      <div class="text-right font-light flex items-center justify-center text-xl text-red-600">$21</div>
      <div class="flex items-center justify-center cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
          id="Capa_1"
          x="0px"
          y="0px"
          viewBox="0 0 512 512"
          style="enable-background:new 0 0 512 512;"
          xml:space="preserve"
          width="512px"
          height="512px"
          class="h-8 w-8"
        >
          <g>
            <path
              style="fill:#000000"
              d="M256,0C115.3,0,0,115.3,0,256s115.3,256,256,256s256-115.3,256-256S396.7,0,256,0z"
              data-original="#FF3636"
              class
              data-old_color="#FF3636"
            />
            <path
              style="fill:#000000"
              d="M512,256c0,140.7-115.3,256-256,256V0C396.7,0,512,115.3,512,256z"
              data-original="#F40000"
              class
              data-old_color="#F40000"
            />
            <polygon
              style="fill:#FFFFFF"
              points="298.299,256 383.2,340.901 340.901,383.2 256,298.299 171.099,383.2 128.8,340.901   213.701,256 128.8,171.099 171.099,128.8 256,213.701 340.901,128.8 383.2,171.099 "
              data-original="#E7E7E7"
              class="active-path"
              data-old_color="#E7E7E7"
            />
            <polygon
              style="fill:#FFFFFF"
              points="298.299,256 383.2,340.901 340.901,383.2 256,298.299 256,213.701 340.901,128.8   383.2,171.099 "
              data-original="#D3D3D8"
              class
              data-old_color="#D3D3D8"
            />
          </g>
        </svg>
      </div>
    </div>
    <div class="mt-8 flex justify-end w-full">
      <h2 class="text-xl">
        Subtotal (3 items):
        <span class="text-red-600 text-xl">$63</span>
      </h2>
    </div>
    <div class="text-sm mt-10 font-light text-gray-800 leading-6 tracking-tight">
      The price and availability of items at God's care Missions are subject to change. The cart is a temporary place to store a list of your items and reflect each item's most recent price Shopping Cart.
      <router-link to="/" class="text-blue-500">Learn More</router-link>
    </div>
    <div
      class="text-sm font-light text-gray-800 leading-6 tracking-tight"
    >If you have any questions, pls use the contact us page to write to us</div>
  </main>
</template>

<script>
export default {};
</script>

<style>
.grid-area {
  grid-template-columns: 8fr 3fr 2fr 1.5fr;
}
</style>