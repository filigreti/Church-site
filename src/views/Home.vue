<template>
  <main>
    <Hero
      :color="'bg-blue-900'"
      :buttonText="'About Us'"
      :screen="'Home'"
      :mainText="'Gods Care Missions'"
      :subText="`God's care mission (GCM) is a rural mission based work, commited to reaching the lost,depopulating hell to populate heaven. It is also commited to encouraging the saints,labouring for restoration in the body of christ and bringing help to the less privileged. It is purely an evangelistic outfit`"
      :bgImage="'https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'"
    />
    <div class="mt-16 text-center">
      <h1
        class="text-xl font-bold leading-5 tracking-wider text-blue-500 text-center"
      >We Care, Because God Cares</h1>
      <p
        class="max-w-lg mt-4 leading-6 tracking-tight text-gray-600 text-sm mx-auto"
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti at animi ex aut rerum soluta deserunt voluptate eum</p>
    </div>
    <div>
      <div class="mt-16 max-w-4xl mx-auto flex text-center justify-between">
        <div class="shadow-2xl rounded-lg py-4 px-8 bg-white max-w-xs">
          <div class="border-b pb-2 border-blue-400">
            <h2
              class="text-lg font-bold uppercase text-blue-500 tracking-wider text-center"
            >Our Genesis</h2>
          </div>
          <p
            class="mt-4 leading-6 tracking-normal text-gray-600 text-xs"
          >At God's Insurance and clear direction, 25 years ago i came into Okpo with my late wife. Evang. Esther Omojo Oguche and son, Joshua! To the glory of God, today i have five biological children and other adopted children living with me, and a great number of spiritual children world over unto God's glory, and also a lovely wife, co-partner,heler,encourager,adviser and supporter. Pastor (Mrs) Rose Ojone Oguche</p>
        </div>
        <div class="shadow-2xl rounded-lg py-4 px-8 bg-white max-w-xs">
          <div class="border-b pb-2 border-blue-400">
            <h2
              class="text-lg font-bold uppercase text-blue-500 tracking-wider text-center"
            >Our Commission</h2>
          </div>
          <p class="leading-6 tracking-wider mt-4 leading-6 text-gray-600 text-xs">
            Our Commission is to bring God's loving
            care and intervention
            <br />to the human race at no charge through various outlets,
            <br />saving the lost at all cost as grace enables us. he has helped us over these years to bring his love and care to the needy world. We care because God cares
          </p>
        </div>
      </div>
    </div>
    <div class="bg-blue-100 bg-opacity-25 py-4">
      <div class="mt-16 text-center">
        <h1 class="text-xl font-bold leading-5 tracking-wider text-blue-500 text-center">Events</h1>
        <p
          class="max-w-lg mt-4 leading-6 tracking-tight text-gray-600 text-sm mx-auto"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti at animi ex aut rerum soluta deserunt voluptate eum</p>
      </div>
      <div class="max-w-4xl mx-auto mt-12">
        <carousel
          :per-page="3"
          :centerMode="false"
          :navigationEnabled="true"
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
            class="text-sm rounded-full bg-transparent hover:bg-blue-500 text-blue-500 font-semibold hover:text-white outline-none shadow-none focus:outline-none py-2 leading-7 px-12 mt-6 border border-blue-500 hover:border-transparent rounded"
          >View All</button>
        </div>
      </div>
    </div>
    <div class="flex max-w-4xl mx-auto my-12">
      <div class="flex items-center border-r w-6/12">
        <div class="flex flex-col items-center">
          <h1 style="color:red" class="text-3xl leading-6 tracking-wider font-black">25</h1>
          <h2 class="text-lg font-black text-blue-700">JUNE</h2>
        </div>
        <div class="ml-4">
          <h1 class="text-blue-700 font-black text-xl tracking-wide">Upcoming Event</h1>
          <p
            class="text-xs text-gray-600 w-9/12"
          >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores suscipit quam excepturi quisquam natus officiis perferendis</p>
        </div>
      </div>
      <div class="flex items-center pl-4 w-6/12 justify-end">
        <div class="flex flex-col items-center">
          <h1 style="color:red" class="text-3xl leading-6 tracking-wider font-black">04</h1>
          <h2 class="text-lg font-black text-blue-700">JUNE</h2>
        </div>
        <div class="ml-4 w-9/12">
          <h1 class="text-blue-700 font-black text-xl tracking-wide">Upcoming Event</h1>
          <p
            class="text-xs text-gray-600 mr-12"
          >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores suscipit quam excepturi quisquam natus officiis perferendis</p>
        </div>
      </div>
    </div>
    <div class="bg-blue-100 bg-opacity-25 py-16">
      <div class="max-w-4xl mx-auto bg-white rounded-lg shadow-xl">
        <div class="py-8">
          <h1
            class="text-xl font-bold leading-6 tracking-wider text-blue-500 text-center"
          >Subscribe to Our Newsletter</h1>
          <p class="mt-2 text-gray-600 text-xs text-center">
            Get the latest law events and coferences and also
            <br />updates from God's care mission
          </p>
          <div class="max-w-xl mx-auto">
            <input
              class="bg-gray-200 mt-6 text-xs rounded-full focus:outline-none focus:shadow-outline border-0 border-gray-300 rounded-lg py-2 px-4 w-full block mx-auto appearance-none leading-6"
              type="email"
              placeholder="Your Email"
            />
          </div>

          <div class="w-full flex items-center mt-4">
            <button
              class="font-bold mx-auto text-sm rounded-full bg-blue-500 hover:bg-blue-500 text-white font-semibold hover:text-white outline-none shadow-none focus:outline-none py-2 leading-7 px-12 mt-6 border border-blue-500 hover:border-transparent rounded"
            >Subscribe</button>
          </div>
        </div>
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
      ]
    };
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