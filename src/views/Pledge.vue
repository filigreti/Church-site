<template>
  <main>
    <Hero
      class
      :position="['object-center']"
      :color="'bg-gray-800 opacity-90'"
      :buttonText="false"
      :mainText="'Pledge'"
      :subText="
        `God's care mission (GCM) is a rural mission based work, commited to reaching the lost,depopulating hell to populate heaven. It is also commited to encouraging the saints,labouring for restoration in the body of christ and bringing help to the less privileged. It is purely an evangelistic outfit`
      "
      :bgImage="
        'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80'
      "
    />
    <p
      class="mx-auto text-center -mt-12 text-sm text-white font-light max-w-4xl "
    >
      Every year we hold a joint mission dinner in abuja, with the very sole
      purpose of bringing individuals with these missions <br />
      and passions towards evangelical and missions needs
    </p>
    <form
      @submit.prevent="send"
      class=" max-w-4xl mt-16 rounded-md shadow-sm mx-auto bg-white px-4 pt-6 pb-8"
    >
      <h1
        class="text-lg font-normal uppercase text-blue-500 tracking-wider text-center"
      >
        Pledge Form
      </h1>
      <p class="mx-auto text-center text-sm mt-1 font-light max-w-4xl ">
        Fill in the form to help make a pledge towards the mission board
      </p>
      <div
        class="flex lg:space-x-10 space-x-4 lg:px-20 justify-center items-center"
      >
        <div class="relative flex items-center w-full mt-6">
          <select
            class="text-gray-500 bg-gray-200 text-xs rounded-full font-light focus:outline-none focus:shadow-outline border-0 border-gray-300 rounded-lg py-2 px-4 w-full block mx-auto appearance-none leading-6"
            type="string"
            v-model="payload.title"
            required
          >
            <option value disabled>First Timer</option>
            <option value="Pastor">Pastor</option>
            <option value="Evangelist">Evangelist</option>
            <option value="Apostle">Apostle</option>
            <option value="Missionary">Missionary</option>
            <option value="Mister">Mister</option>
            <option value="Mrs">Mrs</option>
          </select>
          <svg
            class="absolute w-4 h-4 right-0 mr-5 text-gray-500 pointer-events-none"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <div class="w-full">
          <input
            class="bg-gray-200 mt-6 text-xs rounded-full focus:outline-none focus:shadow-outline border-0 border-gray-300 rounded-lg py-2 px-4 w-full block mx-auto appearance-none leading-6"
            type="string"
            placeholder="Full name"
            v-model="payload.full_name"
            required
          />
        </div>
      </div>
      <div
        class="flex lg:space-x-10 space-x-4 lg:px-20 justify-center items-center"
      >
        <div class="relative flex font-light text-xs items-center w-full mt-6">
          I pledge the sum to the world's mission boards
        </div>
        <div class="w-full">
          <input
            class="bg-gray-200 mt-6 text-xs rounded-full focus:outline-none focus:shadow-outline border-0 border-gray-300 rounded-lg py-2 px-4 w-full block mx-auto appearance-none leading-6"
            type="number"
            placeholder="Enter amount"
            v-model="payload.amount"
            required
          />
        </div>
      </div>
      <div
        class="relative flex justify-center  text-xs items-center w-full mt-8"
      >
        PRAYER LINES: 0803 389 6852, 0807 613 5582
      </div>
      <div class="w-full flex items-center mt-4">
        <button
          type="submit"
          class="font-light mx-auto text-sm rounded-full bg-blue-500 hover:bg-blue-500 text-white hover:text-white outline-none shadow-none focus:outline-none py-2 leading-7 px-12 mt-6 border border-blue-500 hover:border-transparent rounded"
        >
          <p>Submit Pledge</p>
        </button>
      </div>
    </form>

    <!-- <div class="bg-blue-100 bg-opacity-25 py-16">
      <div
        class="lg:max-w-4xl mx-3 lg:px-0 px-5 lg:mx-auto bg-white rounded-lg shadow-xl"
      >
        <form @submit.prevent="send" class="py-8">
          <h1
            class="text-xl font-light leading-6 tracking-wider text-blue-500 text-center"
          >
            Write us a Message
          </h1>
          <p class="mt-2 text-gray-600 text-xs text-center font-light">
            Kindly write us a message and we will get back to you.
          </p>
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
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div> -->
  </main>
</template>

<script>
import Hero from "@/components/Hero";
export default {
  data() {
    return {
      payload: {
        full_name: "",
        title: "",
        amount: "",
      },
    };
  },
  components: {
    Hero,
  },
  methods: {
    async send() {
      let res = await this.$store.dispatch("pledge", this.payload);
      if (res.status == 201) {
        this.$toasted.show(`Pledge Registered, Thank You`, {
          type: "success",
          position: "top-center",
          duration: 3000,
          theme: "bubble",
        });
        this.payload.full_name = "";
        this.payload.title = "";
        this.payload.amount = "";
      }
      ("");
    },
  },
};
</script>

<style></style>
