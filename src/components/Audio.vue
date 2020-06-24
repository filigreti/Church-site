<template>
  <main>
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
            style="enable-background:new 0 0 290.5 290.5;"
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
    <div class="grid lg:grid-cols-5 grid-cols-2 lg:px-0 px-3 gap-8 mt-10">
      <div
        v-for=" i in 15"
        :key="i"
        class="bg-white shadow-lg h-32 flex items-center rounded-md justify-center flex-col cursor-pointer"
      >
        <p class="text-xs text-gray-700 font-medium tracking-wide">Divine Agenda</p>
        <p
          style="font-size:.59rem"
          class="text-gray-500 font-normal tracking-tighter"
        >Evg. Sunday Oguche</p>
        <div>
          <svg
            class="w-8 h-8 my-3"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            id="Capa_1"
            x="0px"
            y="0px"
            viewBox="0 0 477.867 477.867"
            style="enable-background:new 0 0 477.867 477.867;"
            xml:space="preserve"
          >
            <g>
              <g>
                <path
                  d="M472.184,4.347c-3.631-3.209-8.441-4.75-13.261-4.25l-307.2,34.133c-8.647,0.957-15.19,8.265-15.189,16.964V355.34    c-15.468-9.256-33.174-14.102-51.2-14.012C38.281,341.329,0,371.946,0,409.595s38.281,68.267,85.333,68.267    s85.333-30.601,85.333-68.267V151.889l273.067-30.413v199.68c-15.473-9.238-33.179-14.066-51.2-13.961    c-47.053,0-85.333,30.618-85.333,68.267c0,37.649,38.281,68.267,85.333,68.267s85.333-30.601,85.333-68.267v-358.4    C477.866,12.208,475.8,7.584,472.184,4.347z"
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
        <p style="font-size:.59rem" class="text-blue-600 font-normal tracking-tight">Download</p>
      </div>
    </div>
    <div class="flex items-center justify-center mt-10 mb-20">
      <button
        class="text-sm rounded-full bg-transparent hover:bg-blue-500 text-blue-500 font-light hover:text-white outline-none shadow-none focus:outline-none py-2 leading-7 px-12 mt-6 border border-blue-500 hover:border-transparent rounded"
      >Load More</button>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style>
</style>