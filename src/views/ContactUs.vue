<template>
  <main>
    <Hero
      class
      :position="['object-center']"
      :color="'bg-blue-800 opacity-90'"
      :buttonText="false"
      :screen="'Contact'"
      :mainText="'Contact Us'"
      :subText="`Feel free to contact us via our Email Address` +
     `or you can reach our Call/Prayers or reach us via our social media platform links`"
      :bgImage="'https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?ixlib=rb-1.2.1&auto=format&fit=crop&w=706&q=80'"
    />
    <div class="bg-blue-100 bg-opacity-25 py-16">
      <div class="lg:max-w-4xl mx-3 lg:px-0 px-5 lg:mx-auto bg-white rounded-lg shadow-xl">
        <form @submit.prevent="send" class="py-8">
          <h1
            class="text-xl font-light leading-6 tracking-wider text-blue-500 text-center"
          >Write us a Message</h1>
          <p
            class="mt-2 text-gray-600 text-xs text-center font-light"
          >Kindly write us a message and we will get back to you.</p>
          <div class="max-w-xl mx-auto">
            <input
              class="bg-gray-200 mt-6 text-xs rounded-full focus:outline-none focus:shadow-outline border-0 border-gray-300 rounded-lg py-2 px-4 w-full block mx-auto appearance-none leading-6"
              type="string"
              placeholder="Full name"
              v-model="payload.full_name"
              required
            />
          </div>
          <div class="max-w-xl mx-auto">
            <input
              class="bg-gray-200 mt-2 text-xs rounded-full focus:outline-none focus:shadow-outline border-0 border-gray-300 rounded-lg py-2 px-4 w-full block mx-auto appearance-none leading-6"
              type="email"
              placeholder="Email Address"
              v-model="payload.email_address"
              required
            />
          </div>
          <div class="max-w-xl mx-auto">
            <input
              class="bg-gray-200 mt-2 text-xs rounded-full focus:outline-none focus:shadow-outline border-0 border-gray-300 rounded-lg py-2 px-4 w-full block mx-auto appearance-none leading-6"
              type="number"
              placeholder="Phone Number"
              v-model="payload.mobile_number"
              required
            />
          </div>
          <div class="max-w-xl mx-auto">
            <textarea
              rows="5"
              class="bg-gray-200 mt-2 text-xs rounded-lg focus:outline-none focus:shadow-outline border-0 border-gray-300 py-2 px-4 w-full block mx-auto appearance-none leading-6"
              type="email"
              placeholder="Hello !!"
              v-model="payload.message"
              required
            ></textarea>
          </div>

          <div class="w-full flex items-center mt-4">
            <button
              class="font-light mx-auto text-sm rounded-full bg-blue-500 hover:bg-blue-500 text-white font-semilight hover:text-white outline-none shadow-none focus:outline-none py-2 leading-7 px-12 mt-6 border border-blue-500 hover:border-transparent rounded"
            >Send</button>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
import Hero from "@/components/Hero";
export default {
  data() {
    return {
      payload: {
        full_name: "",
        mobile_number: "",
        email_address: "",
        message: "",
      },
    };
  },
  components: {
    Hero,
  },
  methods: {
    async send() {
      let res = await this.$store.dispatch("contactUs", this.payload);
      if (res.status == 201) {
        this.$toasted.show(`Record Saved, Thank You`, {
          type: "success",
          position: "top-center",
          duration: 3000,
          theme: "bubble",
        });
        this.payload.full_name = "";
        this.payload.mobile_number = "";
        this.payload.message = "";
        this.payload.email_address = "";
      }
    ''},
  },
};
</script>

<style>
</style>