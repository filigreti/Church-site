<template>
  <main>
    <Hero
      :position="'object-center'"
      :color="'bg-blue-900'"
      :buttonText="'About Us'"
      :screen="'Home'"
      :mainText="'Gods Care Missions'"
      :subText="`God's care mission (GCM) is a rural mission based work, commited to reaching the lost,depopulating hell to populate heaven. It is also commited to encouraging the saints,labouring for restoration in the body of christ and bringing help to the less privileged. It is purely an evangelistic outfit`"
      :bgImage="'https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'"
    />
    <div class="mt-16 text-center">
      <h1
        class="lg:text-xl text-sm font-light leading-5 tracking-wider text-blue-500 text-center"
      >We Care, Because God Cares</h1>
      <p
        class="lg:max-w-lg mt-4 leading-6 font-light tracking-tight text-gray-600 text-sm mx-auto px-10 lg:px-0"
      >
        “As a father loves and pities his children, so the Lord loves and pities those who fear Him [with reverence, worship, and awe].”
        ‭‭Psalm‬ ‭103:13‬ ‭AMPC
      </p>
    </div>
    <div>
      <div
        class="mt-16 flex w-full justify-center flex-col lg:max-w-4xl lg:mx-auto lg:flex-row text-center lg:justify-between"
      >
        <div class="shadow-xl rounded-lg py-4 px-8 bg-white lg:mx-0 mx-4 lg:max-w-xs lg:mb-0 mb-6">
          <div class="border-b pb-2 border-blue-400">
            <h2
              class="text-lg font-normal uppercase text-blue-500 tracking-wider text-center"
            >Our Genesis</h2>
          </div>
          <p
            class="mt-4 leading-6 tracking-normal font-light text-gray-600 text-xs"
          >At God's instruction and clear direction, 25 years ago i came into Okpo with my late wife. Evang. Esther Omojo Oguche and son, Joshua! To the glory of God, today i have five biological children and other adopted children living with me, and a great number of spiritual children world over unto God's glory, and also a lovely wife, co-partner,heler,encourager,adviser and supporter. Pastor (Mrs) Rose Ojone Oguche</p>
        </div>
        <div
          class="shadow-xl rounded-lg py-4 flex-grow lg:h-auto px-8 bg-white lg:mx-0 mx-4 lg:max-w-xs h-full"
        >
          <div class="border-b pb-2 border-blue-400">
            <h2
              class="text-lg font-normal uppercase text-blue-500 tracking-wider text-center"
            >Our Commission</h2>
          </div>
          <p
            class="leading-6 tracking-wider font-light mt-4 leading-6 text-gray-600 text-xs"
          >Our commission is to bring God’s loving care and intervention to the human race at no charge through various outlets, saving the lost at all cost as grace enables us over these years to bring his love and care to the needy world. We care because God cares.</p>
        </div>
      </div>
    </div>
    <div class="bg-blue-100 bg-opacity-25 py-4">
      <div class="mt-16 text-center">
        <h1
          class="text-xl font-normal leading-5 tracking-wider text-blue-500 text-center"
        >Previous Events</h1>
        <!-- <p
          class="lg:max-w-lg mt-4 leading-6 tracking-tight text-gray-600 text-sm mx-auto lg:px-0 px-10 font-light"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti at animi ex aut rerum soluta deserunt voluptate eum</p>-->
      </div>
      <div class="lg:max-w-4xl mx-auto mt-12">
        <carousel
          :per-page="page"
          :centerMode="false"
          :navigationEnabled="width"
          :paginationEnabled="false"
          :loop="true"
        >
          <slide v-for="(img,index) in images" :key="index">
            <div :class="`box-${index}`" class="rounded overflow-hidden shadow-xl h-64 mx-4 p-6">
              <img style="filter:brightness(90%)" class="w-full object-cover" :src="img" alt />
            </div>
          </slide>
        </carousel>
        <div class="w-full flex justify-center mt-8 items-center">
          <button
            class="text-sm font-normal rounded-full bg-transparent hover:bg-blue-500 text-blue-500 hover:text-white outline-none shadow-none focus:outline-none py-2 leading-7 px-12 mt-6 border border-blue-500 hover:border-transparent rounded"
          >View All</button>
        </div>
      </div>
    </div>
    <div
      class="flex lg:flex-row flex-col lg:max-w-4xl justify-between lg:mx-auto lg:mx-0 mx-3 my-8"
    >
      <div class="lg:w-1/2 flex items-center lg:border-r lg:ml-0 ml-3 lg:mb-0 mb-8">
        <div class="flex flex-col items-center">
          <h1 style="color:red" class="text-4xl leading-6 tracking-wider font-black">25</h1>
          <h2 class="text-xl font-black text-blue-700">JUNE</h2>
        </div>
        <div class="ml-4">
          <h1 class="text-blue-700 font-normal text-xl tracking-wide">Upcoming Event</h1>
          <p
            class="text-xs text-gray-600 max-w-xs lg:pr-0 pr-16 font-light"
          >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores suscipit quam excepturi quisquam natus officiis perferendis</p>
        </div>
      </div>
      <div class="lg:w-1/2 flex items-center justify-end lg:ml-0 ml-3">
        <div class="flex flex-col items-center">
          <h1 style="color:red" class="text-4xl leading-6 tracking-wider font-black">25</h1>
          <h2 class="text-xl font-black text-blue-700">JUNE</h2>
        </div>
        <div class="ml-4 flex flex-col justify-end">
          <h1 class="text-blue-700 font-normal text-xl tracking-wide">Upcoming Event</h1>
          <p
            class="text-xs text-gray-600 max-w-xs lg:pr-0 pr-16 font-light"
          >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores suscipit quam excepturi quisquam natus officiis perferendis</p>
        </div>
      </div>
    </div>
    <div class="bg-blue-100 bg-opacity-25 py-16">
      <div class="lg:max-w-4xl lg:mx-auto bg-white rounded-lg shadow-xl lg:mx-0 mx-4">
        <form @submit.prevent="newsletterSubscription" class="py-8">
          <h1
            class="lg:text-xl text-sm font-normal leading-6 tracking-wider text-blue-500 text-center"
          >Subscribe to Our Newsletter</h1>
          <p class="w-64 mx-auto mt-2 text-gray-600 text-xs text-center lg:px-0 px-3">
            Get the latest law events and coferences and also
            updates from God's care mission
          </p>
          <div class="max-w-xl mx-auto lg:px-0 px-6">
            <input
              v-if="showSuccess"
              class="bg-gray-200 mt-6 text-xs rounded-full focus:outline-none focus:shadow-outline border border-blue-300 rounded-lg py-2 px-4 w-full block mx-auto appearance-none leading-6 placeholder-blue-500"
              type="email"
              placeholder="Subscribed to news letter successfully"
              disabled
              required
            />
            <input
              v-else
              class="bg-gray-200 mt-6 text-xs rounded-full focus:outline-none focus:shadow-outline border-0 border-gray-300 rounded-lg py-2 px-4 w-full block mx-auto appearance-none leading-6"
              type="email"
              placeholder="Your Email"
              v-model="email"
              required
            />
          </div>

          <div class="w-full flex items-center mt-4">
            <button
              class="font-normal mx-auto text-sm rounded-full bg-blue-500 hover:bg-blue-500 text-white hover:text-white outline-none shadow-none focus:outline-none py-2 leading-7 px-12 mt-6 border border-blue-500 hover:border-transparent rounded"
            >Subscribe</button>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import Hero from "@/components/Hero";
export default {
  data() {
    return {
      images: [
        "https://godscaremissionsinc.org/wp-content/uploads/2020/02/BONGOR-002.jpg",
        "https://godscaremissionsinc.org/wp-content/uploads/2020/02/PST-DJIMAS-1.jpg",
        "https://godscaremissionsinc.org/wp-content/uploads/2020/02/MAROUA-003.jpg",
        "https://godscaremissionsinc.org/wp-content/uploads/2020/02/NGOUNDERE.jpg",
        "https://godscaremissionsinc.org/wp-content/uploads/2020/02/GAROUA-FLYER-2020-768x1038.png"
      ],
      email: "",
      showSuccess: false
    };
  },
  computed: {
    width() {
      return window.innerWidth > 650 ? true : false;
    },
    page() {
      return window.innerWidth > 650 ? 3 : 1;
    }
  },
  methods: {
    async newsletterSubscription() {
      let res = await this.$store.dispatch("subscribeNewsletter", {
        email: this.email
      });

      if (res.status == 200) {
        this.email = "";
        this.showSuccess = true;
        setTimeout(() => {
          this.showSuccess = false;
        }, 5000);
      }
    }
  },
  components: {
    Carousel,
    Hero,
    Slide
  }
};
</script>

<style>
</style>