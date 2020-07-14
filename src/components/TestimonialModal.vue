<template>
  <main>
    <div
      class="fixed inset-0 w-full lg:px-0 px-3 z-20 bg-black bg-opacity-75 overflow-y-auto flex justify-center pt-8"
    >
      <div class="lg:max-w-3xl w-full">
        <form
          @submit.prevent="post"
          class="bg-white w-full py-6 lg:px-20 rounded-lg relative h-auto"
        >
          <div class="flex w-full items-center justify-center flex-col">
            <h1
              class="uppercase text-2xl font-black tracking-wide text-blue-700 text-center leading-5 lg:mt-0 mt-2"
            >Submit your Testimony</h1>
            <p
              class="mt-2 leading-6 tracking-normal text-gray-600 text-xs font-light"
            >We will Upload your testimony as soon as</p>
            <p
              class="leading-4 tracking-normal text-gray-600 font-light text-xs"
            >our administrator approves it</p>
            <svg
              @click="close"
              class="lg:w-8 lg:h-8 h-5 w-5 absolute mt-2 lg:right-0 mr-8 cursor-pointer top-0 lg:mt-4 lg:pt-1"
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
          <div class="max-w-xl mx-auto lg:px-0 px-6">
            <input
              class="bg-gray-200 mt-8 text-xs pl-6 rounded-full focus:outline-none font-light focus:shadow-outline border-0 border-gray-300 rounded-lg py-2 px-4 w-full block mx-auto appearance-none leading-6"
              type="string"
              placeholder="Full Name"
              v-model="details.full_name"
            />
          </div>
          <div class="max-w-xl mx-auto lg:px-0 px-6">
            <input
              class="bg-gray-200 mt-4 pl-6 text-xs rounded-full focus:outline-none font-light focus:shadow-outline border-0 border-gray-300 rounded-lg py-2 px-4 w-full block mx-auto appearance-none leading-6"
              type="string"
              placeholder="State"
              v-model="details.state"
            />
          </div>
          <div class="max-w-xl mx-auto lg:px-0 px-6">
            <input
              class="bg-gray-200 mt-4 pl-6 text-xs rounded-full focus:outline-none font-light focus:shadow-outline border-0 border-gray-300 rounded-lg py-2 px-4 w-full block mx-auto appearance-none leading-6"
              type="string"
              placeholder="Country"
              v-model="details.country"
            />
          </div>
          <div class="max-w-xl mx-auto lg:px-0 px-6">
            <textarea
              rows="6"
              class="bg-gray-200 mt-4 pl62 text-xs rounded-lg focus:outline-none font-light focus:shadow-outline border-0 border-gray-300 rounded-lg py-2 px-4 w-full block mx-auto appearance-none leading-6"
              type="string"
              placeholder="Your Testimonial"
              v-model="details.testimony"
              required
            />
          </div>
          <div
            class="mt-4 py-6 cursor-pointer shadow-md border-dashed border border-red-500 bg-white text-center max-w-xl mx-auto lg:px-0 px-6"
          >
            <h1 class="text-xl font-normal tracking-normal leading-6 text-black">Upload Image</h1>
            <p class="text-xs text-red-500 leading-6 font-normal">Upload a vide file or picture</p>
          </div>
          <div class="flex w-full justify-center">
            <button
              class="text-sm rounded-full bg-blue-500 text-white font-light hover:text-white outline-none shadow-none focus:outline-none py-2 leading-7 px-12 mt-6 border border-white hover:border-transparent rounded"
            >Submit</button>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      details: {
        full_name: "",
        state: "",
        country: "",
        testimony: ""
      }
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
    async post() {
      let res = await this.$store.dispatch("postTestimony", this.details);
      if (res.status == 201) {
        await this.$store.dispatch("getTestimonies");
        this.close();
        alert("Testimonial submitted successfully");
      }
    }
  }
};
</script>

<style>
</style>