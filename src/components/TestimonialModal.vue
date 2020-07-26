<template>
  <main>
    <div class="fixed inset-0 w-full lg:px-0 px-3 z-20 bg-black bg-opacity-75 overflow-y-auto flex justify-center pt-8">
      <div class="lg:max-w-3xl w-full">
        <form @submit.prevent="post" class="bg-white w-full py-6 lg:px-20 rounded-lg relative h-auto">
          <div class="flex w-full items-center justify-center flex-col">
            <h1 class="uppercase text-2xl font-black tracking-wide text-blue-700 text-center leading-5 lg:mt-0 mt-2">Submit your Testimony</h1>
            <p class="mt-2 leading-6 tracking-normal text-gray-600 text-xs font-light">We will Upload your testimony as soon as</p>
            <p class="leading-4 tracking-normal text-gray-600 font-light text-xs">our administrator approves it</p>
            <svg @click="close" class="lg:w-8 lg:h-8 h-5 w-5 absolute mt-2 lg:right-0 mr-8 cursor-pointer top-0 lg:mt-4 lg:pt-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
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
            <input class="bg-gray-200 mt-8 text-xs pl-6 rounded-full focus:outline-none font-light focus:shadow-outline border-0 border-gray-300 rounded-lg py-2 px-4 w-full block mx-auto appearance-none leading-6" type="string" placeholder="Full Name" v-model="details.full_name" />
          </div>
          <div class="max-w-xl mx-auto lg:px-0 px-6">
            <input class="bg-gray-200 mt-4 pl-6 text-xs rounded-full focus:outline-none font-light focus:shadow-outline border-0 border-gray-300 rounded-lg py-2 px-4 w-full block mx-auto appearance-none leading-6" type="string" placeholder="State" v-model="details.state" />
          </div>
          <div class="max-w-xl mx-auto lg:px-0 px-6">
            <input class="bg-gray-200 mt-4 pl-6 text-xs rounded-full focus:outline-none font-light focus:shadow-outline border-0 border-gray-300 rounded-lg py-2 px-4 w-full block mx-auto appearance-none leading-6" type="string" placeholder="Country" v-model="details.country" />
          </div>
          <div class="max-w-xl mx-auto lg:px-0 px-6">
            <textarea rows="6" class="bg-gray-200 mt-4 pl62 text-xs rounded-lg focus:outline-none font-light focus:shadow-outline border-0 border-gray-300 rounded-lg py-2 px-4 w-full block mx-auto appearance-none leading-6" type="string" placeholder="Your Testimonial" v-model="details.testimony" required />
          </div>
          <div class="mt-3 flex justify-center">
            <div @click="$refs.file.click()" class="h-32 border  w-32 rounded-lg flex justify-center items-center relative">
              <svg v-if="liveimage === null" class="fill-current text-gray-400 w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M494.14 43.16H17.86C8 43.16 0 51.16 0 61.02v389.96c0 9.86 8 17.86 17.86 17.86h476.28c9.87 0 17.86-8 17.86-17.86V61.02c0-9.86-8-17.86-17.86-17.86zm-17.86 389.96H35.72V78.88h440.56v354.24z" />
                <path d="M191.1 122.34a65.57 65.57 0 00-65.48 65.5 65.57 65.57 0 0065.49 65.48 65.56 65.56 0 0065.48-65.49 65.57 65.57 0 00-65.48-65.49zm0 95.26a29.8 29.8 0 01-29.76-29.77 29.8 29.8 0 0129.77-29.76 29.8 29.8 0 0129.76 29.76 29.8 29.8 0 01-29.76 29.77zM352.71 269.22a17.84 17.84 0 00-17.82 1.74l-229.8 164.91 20.82 29.03 221.4-158.88 139.42 63.57 14.82-32.5-148.84-67.87z" />
                <path d="M9.63 276.9l16.47-31.7 209.58 108.96-16.47 31.69z" />
              </svg>
              <img v-else :src="liveimage" class="h-32 w-32 object-contain" alt="" />
              <input type="file" ref="file" accept="image/x-png, image/gif, image/jpeg" @change="change" class="hidden" name id />
              <div class="text-xs text-gray-600 absolute bottom-0 -mb-2 bg-white px-2">Upload Image</div>
            </div>
          </div>
          <div class="flex w-full justify-center">
            <button :disabled="loading" class="text-sm rounded-full bg-blue-500 text-white font-light hover:text-white outline-none shadow-none focus:outline-none py-2 leading-7 px-12 mt-6 border border-white hover:border-transparent rounded">Submit</button>
          </div>
        </form>
      </div>
      <div style="margin-top:20rem" v-if="loading" class="absolute w-full h-full flex item-center justify-center ">
        <div>
          <img class="w-16 h-16 " src="@/assets/36.gif" alt="" />
        </div>
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
        testimony: "",
        testimony_file: "",
      },
      liveimage: null,
      loading: false,
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
    async change(x) {
      this.loading = true;
      this.imageFile = x.target.files[0];
      const ref = this.$firebase.storage().ref();
      const name = new Date() + "-" + this.imageFile.name;
      const metadata = {
        contentType: this.imageFile.type,
      };
      const task = ref.child(name).put(this.imageFile, metadata);
      task
        .then((snapshot) => snapshot.ref.getDownloadURL())
        .then((url) => {
          this.loading = false;
          this.details.testimony_file = url;
          this.liveimage = url;
        });
    },
    async post() {
      let res = await this.$store.dispatch("postTestimony", this.details);
      if (res.status == 201) {
        await this.$store.dispatch("getTestimonies");
        this.details.full_name = "";
        this.details.state = "";
        this.details.country = "";
        this.details.testimony = "";
        this.details.testimony_file = "";
        this.close();
        alert("Testimonial submitted successfully");
      }
    },
  },
};
</script>

<style></style>
