<template>
  <main>
    <Hero
      :color="'bg-indigo-800'"
      :bgImage="'https://images.unsplash.com/photo-1571751888410-0c83afb6f3f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'"
    />
    <div class="max-w-4xl mx-auto bg-white shadow-xl p-10 rounded-lg flex">
      <div>
        <img
          style="filter:brightness(90%)"
          src="https://godscaremissionsinc.org/wp-content/uploads/2020/02/BONGOR-002.jpg"
          class="h-56 w-56 object-cover object-top rounded"
          alt
        />
      </div>
      <div class="ml-10 h-full flex-1">
        <h1 class="uppercase text-2xl font-black tracking-wider">Youth Blaze 2020</h1>
        <h1 class="uppercase text-2xl font-black tracking-wider leading-6">Theme: Blazed to Blaze</h1>
        <div class="flex mt-4 w-full">
          <div class="flex items-center">
            <svg
              class="h-10 w-10"
              xmlns="http://www.w3.org/2000/svg"
              id="Capa_1"
              enable-background="new 0 0 443.294 443.294"
              height="512px"
              viewBox="0 0 443.294 443.294"
              width="512px"
            >
              <g>
                <path
                  d="m221.647 0c-122.214 0-221.647 99.433-221.647 221.647s99.433 221.647 221.647 221.647 221.647-99.433 221.647-221.647-99.433-221.647-221.647-221.647zm0 415.588c-106.941 0-193.941-87-193.941-193.941s87-193.941 193.941-193.941 193.941 87 193.941 193.941-87 193.941-193.941 193.941z"
                  data-original="#000000"
                  class="active-path"
                  data-old_color="#000000"
                  fill="#1273EB"
                />
                <path
                  d="m235.5 83.118h-27.706v144.265l87.176 87.176 19.589-19.589-79.059-79.059z"
                  data-original="#000000"
                  class="active-path"
                  data-old_color="#000000"
                  fill="#1273EB"
                />
              </g>
            </svg>
            <div class="ml-2">
              <p class="text-sm font-black">Arrival time,</p>
              <p class="font-black text-sm">Thursday, 3.00 PM</p>
            </div>
          </div>
          <div class="flex items-center ml-16">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-10"
              id="Capa_1"
              enable-background="new 0 0 512 512"
              height="512px"
              viewBox="0 0 512 512"
              width="512px"
            >
              <g>
                <g>
                  <path
                    d="m354.32 152.519c-8.289-5.526-81.705-54.47-90-60-5.039-3.358-11.602-3.358-16.641 0-8.291 5.528-81.713 54.476-90 60-6.894 4.596-8.756 13.909-4.16 20.801 4.596 6.894 13.911 8.756 20.801 4.161l6.68-4.453v82.972c0 8.284 6.716 15 15 15h120c8.284 0 15-6.716 15-15v-82.972l6.68 4.453c6.882 4.586 16.198 2.744 20.801-4.161 4.595-6.892 2.733-16.205-4.161-20.801zm-53.32 88.481h-90v-87.972l45-30 45 30z"
                    data-original="#000000"
                    class="active-path"
                    data-old_color="#000000"
                    fill="#1273EB"
                  />
                  <path
                    d="m256 0c-90.981 0-165 74.019-165 165 0 95.322 91.256 218.623 154.323 282.536 2.819 2.856 6.664 4.464 10.677 4.464s7.858-1.608 10.677-4.464c63.983-64.841 154.323-187.696 154.323-282.536 0-90.981-74.019-165-165-165zm-.004 415.075c-33.626-36.834-134.996-155.721-134.996-250.075 0-74.439 60.561-135 135-135s135 60.561 135 135c0 94.248-101.388 213.223-135.004 250.075z"
                    data-original="#000000"
                    class="active-path"
                    data-old_color="#000000"
                    fill="#1273EB"
                  />
                  <path
                    d="m166 482c-8.284 0-15 6.716-15 15s6.716 15 15 15h180c8.284 0 15-6.716 15-15s-6.716-15-15-15z"
                    data-original="#000000"
                    class="active-path"
                    data-old_color="#000000"
                    fill="#1273EB"
                  />
                </g>
              </g>
            </svg>
            <div class="ml-2">
              <p class="text-sm font-black">Gods Care Mission Tenth</p>
              <p class="font-black text-sm">Okpo, Kogi State</p>
            </div>
          </div>
        </div>
        <div>
          <p
            class="text-sm text-gray-700 mt-4 leading-5"
          >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio nam distinctio optio impedit laudantium voluptas enim eligendi, perferendis molestias, reprehenderit iusto vel animi tenetur aperiam aut quaerat! Beatae, deleniti aperiam.</p>
        </div>
      </div>
    </div>
    <div class="bg-blue-100 bg-opacity-25 py-16">
      <div class="max-w-4xl mx-auto bg-white rounded-lg shadow-xl">
        <div class="py-8">
          <h1 class="text-xl font-bold leading-6 tracking-wider text-blue-500 text-center">Register</h1>
          <p
            class="mt-2 text-gray-600 text-xs text-center"
          >Fill in your Detail so we can welcome you properly</p>
          <div class="max-w-xl mx-auto">
            <input
              class="bg-gray-200 mt-6 text-xs rounded-full focus:outline-none focus:shadow-outline border-0 border-gray-300 rounded-lg py-2 px-4 w-full block mx-auto appearance-none leading-6"
              type="string"
              placeholder="Full name"
            />
          </div>
          <div class="max-w-xl mx-auto">
            <input
              class="bg-gray-200 mt-2 text-xs rounded-full focus:outline-none focus:shadow-outline border-0 border-gray-300 rounded-lg py-2 px-4 w-full block mx-auto appearance-none leading-6"
              type="string"
              placeholder="Mobile Number"
            />
          </div>
          <div class="max-w-xl mx-auto">
            <input
              class="bg-gray-200 mt-2 text-xs rounded-full focus:outline-none focus:shadow-outline border-0 border-gray-300 rounded-lg py-2 px-4 w-full block mx-auto appearance-none leading-6"
              type="email"
              placeholder="Email Address"
            />
          </div>

          <div class="w-full flex items-center mt-4">
            <button
              class="font-bold mx-auto text-sm rounded-full bg-blue-500 hover:bg-blue-500 text-white font-semibold hover:text-white outline-none shadow-none focus:outline-none py-2 leading-7 px-12 mt-6 border border-blue-500 hover:border-transparent rounded"
            >Register</button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Hero from "@/components/Hero";
export default {
  components: {
    Hero
  }
};
</script>

<style>
</style>