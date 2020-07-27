<template>
  <main id="salvations">
    <Hero @open="modal = true" :position="'object-center'" :color="'bg-black bg-opacity-90'" :screen="'Salvations'" :mainText="'Salvations'" :subTextClass="'leading-6 text-white text-base tracking-wide font-light'" :bgImage="'https://images.unsplash.com/photo-1422065649003-cf6684a31468?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1648&q=80'" />
    <div class="mt-6">
      <div class="bg-blue-100 bg-opacity-25 py-16">
        <div class="lg:max-w-4xl lg:mx-auto bg-white rounded-lg shadow-xl mx-3 lg:px-0 px-8">
          <form @submit.prevent="send" class="py-8">
            <h1 class="text-xl font-light leading-6 tracking-wider font-normal text-blue-500 text-center">Register to Attend</h1>
            <p class="mt-3 text-gray-600 text-xs text-center font-light">Fill in your Detail so we can welcome you properly</p>
            <div class="max-w-xl mt-5 mx-auto grid grid-cols-1 lg:grid-cols-2 lg:gap-5 gap-2">
              <input class="bg-gray-200 text-xs rounded-full font-light focus:outline-none focus:shadow-outline border-0 border-gray-300 rounded-lg py-2 px-4 w-full block mx-auto appearance-none leading-6" type="string" placeholder="First name" v-model="info.first_name" required />
              <input class="bg-gray-200 text-xs rounded-full font-light focus:outline-none focus:shadow-outline border-0 border-gray-300 rounded-lg py-2 px-4 w-full block mx-auto appearance-none leading-6" type="string" placeholder="Last name" v-model="info.last_name" required />
            </div>
            <div class="max-w-xl mx-auto">
              <input class="bg-gray-200 mt-3 text-xs rounded-full font-light focus:outline-none focus:shadow-outline border-0 border-gray-300 rounded-lg py-2 px-4 w-full block mx-auto appearance-none leading-6" type="email" placeholder="Email Address" v-model="info.email_address" required />
            </div>
            <div class="max-w-xl mx-auto">
              <vue-tel-input required autocomplete="off" v-on:country-changed="countryChanged" class="mt-3" v-model.trim="info.mobile_number"></vue-tel-input>
            </div>

            <div class="max-w-xl mt-3 mx-auto grid grid-cols-1 lg:grid-cols-2 lg:gap-5 gap-2">
              <input class="bg-gray-200 text-xs rounded-full font-light focus:outline-none focus:shadow-outline border-0 border-gray-300 rounded-lg py-2 px-4 w-full block mx-auto appearance-none leading-6" type="string" placeholder="Country" v-model="info.attendee_country" required />
              <input required class="bg-gray-200 text-xs rounded-full font-light focus:outline-none focus:shadow-outline border-0 border-gray-300 rounded-lg py-2 px-4 w-full block mx-auto appearance-none leading-6" type="string" placeholder="State" v-model="info.state" />
            </div>
            <div class="max-w-xl mx-auto">
              <textarea rows="5" class="bg-gray-200 mt-4 text-xs font-light focus:outline-none focus:shadow-outline border-0 border-gray-300 rounded-lg py-2 px-4 w-full block mx-auto appearance-none leading-6" type="email" placeholder=" Address" v-model="info.address" required></textarea>
            </div>
            <div v-if="error">
              <div class="bg-red-900 max-w-xl mt-6 rounded mx-auto text-center">
                <p class="py-3 text-white text-sm">{{ errorValue }}</p>
              </div>
            </div>
            <!-- <div v-show="show">
              <div class="bg-gray-900 max-w-xl mt-4 rounded mx-auto text-center">
                <p class="py-3 text-white text-sm">Your registeration number is {{ reg }}</p>
              </div>
              <div class="bg-gray-900 max-w-xl mt-4 rounded mx-auto text-center">
                <p class="py-3 text-white text-sm">Your Bible Group number is {{ bibleStudy }}</p>
              </div>
              <div class="mx-auto max-w-xl mt-4">
                <div @click="download" class="cursor-pointer text-xs text-red-600" :href="pdf">Pdf Download</div>
              </div>
              <div class="mx-auto max-w-xl mt-4">
                <p class="text-xs text-gray-600">*Please keep this information with you</p>
              </div>
            </div> -->

            <div class="w-full flex items-center mt-4">
              <button type="submit" :class="{ 'cursor-not-allowed pointer-events-none': show }" class="font-light mx-auto text-sm rounded-full bg-blue-500 hover:bg-blue-500 text-white hover:text-white outline-none shadow-none focus:outline-none py-2 leading-7 px-12 mt-6 border border-blue-500 hover:border-transparent rounded">
                <p>I want to be saved</p>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapGetters } from "vuex";
import { VueTelInput } from "vue-tel-input";
import Hero from "../components/Hero";
export default {
  components: {
    Hero,
    VueTelInput,
  },
  data() {
    return {
      getCurrentEvent: "",
      info: {
        first_name: "",
        last_name: "",
        email_address: "",
        mobile_number: "",
        state: "",
        attendee_country: "",
        address: "",
      },
    };
  },

  computed: {
    ...mapGetters(["getAllWorkshops", "getAllEvents"]),
    allWorkshops() {
      return this.getAllWorkshops;
    },
  },
  methods: {
    countryChanged(country) {
      this.country = `+${country.dialCode}`;
    },
    async send() {
      try {
        let res = await this.$store.dispatch("salvationCreate", this.info);
        console.log(res, "lol");
        if (res.status == 201) {
          this.$toasted.show(`Record Saved, Thank You`, {
            type: "success",
            position: "top-center",
            duration: 3000,
            theme: "bubble",
          });
          this.info.first_name = "";
          this.info.last_name = "";
          this.info.email_address = "";
          this.info.mobile_number = "";
          this.info.state = "";
          this.info.attendee_country = "";
          this.info.address = "";
        }
      } catch (e) {
        console.log(e);
      }
    },
    forceFileDownload(response) {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `GodsCareMission.pdf`); //or any other extension
      document.body.appendChild(link);
      link.click();
    },
    download() {
      axios({
        method: "get",
        url: this.pdf,
        responseType: "arraybuffer",
      })
        .then((response) => {
          this.forceFileDownload(response);
        })
        .catch((e) => console.log(e, "error occured"));
    },
  },
};
</script>
<style>
.vue-tel-input {
  border-radius: 99999px !important;
  padding: 0.3rem 0;
  position: relative !important;
  border: none !important;
  box-shadow: none !important;
  background-color: #edf2f7 !important;
}
.danger {
  border: 1px solid red !important;
}
#salvations .vti__input {
  border-radius: 99999px !important;
  position: absolute !important;
  text-align: left !important;
  padding-left: 5rem !important;
  width: 100%;
  height: 100%;
  top: 0 !important;
  font-family: "Poppins" !important;
  font-size: 0.75rem !important;
  font-weight: 300 !important;
  background-color: #edf2f7 !important;
}
.vti__dropdown:focus {
  outline: 0;
  outline-color: transparent;
  outline-style: none;
}
.focus\:shadow-outline:focus {
  box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
}
.vti__selection {
  z-index: 10;
}
.vti__dropdown-list {
  width: 350px !important;
  position: absolute !important;
  font-size: 0.75rem !important;
  font-weight: 300 !important;
  font-family: "Poppins" !important;
}
.vti__dropdown.open {
  background-color: none !important;
}
.vti__dropdown-list.below {
  top: 42px !important;
}
.vti__dropdown {
  left: 7px !important;
}
</style>
