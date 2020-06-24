<template>
  <main>
    <Hero
      :position="'object-center'"
      :color="'bg-gray-900'"
      :buttonText="'Enroll Now'"
      :button="'bg-blue-500 border-none'"
      :screen="'bible-school'"
      :mainText="'Bible School'"
      :subText="`Learn about our Bible School, the durations and certification type. Do you want to enroll in any of the programs, just click on the enroll button to start. Your Journey on a wonderful study process and learn more about God's word.`"
      :bgImage="'https://images.pexels.com/photos/3118214/pexels-photo-3118214.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'"
    />
    <div class="lg:mt-32 mt-32 bg-d bg-blue-100 bg-opacity-25 max-w-4xl mx-auto py-4">
      <div class="grid lg:grid-cols-3 gap-6 justify-between">
        <div class="shadow-xl rounded-lg py-4 px-8 bg-white lg:mx-0 mx-4 lg:max-w-xs lg:mb-0 mb-6">
          <div class="border-b pb-2 border-gray-300">
            <h2
              class="text-lg font-black uppercase text-blue-500 tracking-wide text-center"
            >ONE MONTH INTENSIVE</h2>
          </div>
          <p
            class="mt-4 leading-6 tracking-tight text-gray-600 font-light text-xs"
          >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis quo repellendus delectus voluptas, perferendis ex suscipit velit tempore excepturi, quasi non quam quas ullam totam repudiandae doloremque mollitia? Maiores culpa illo quia velit recusandae blanditiis magnam nisi odit quibusdam. Consectetur aliquid magni deserunt perferendis autem doloremque architecto aut recusandae non?</p>
        </div>
        <div class="shadow-xl rounded-lg py-4 px-8 bg-white lg:mx-0 mx-4 lg:max-w-xs lg:mb-0 mb-6">
          <div class="border-b pb-2 border-gray-300">
            <h2
              class="text-lg font-bold uppercase text-red-500 tracking-wider text-center"
            >ONE YEAR CERTIFICATE</h2>
          </div>
          <p
            class="mt-4 leading-6 tracking-tight text-gray-600 font-light text-xs"
          >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis quo repellendus delectus voluptas, perferendis ex suscipit velit tempore excepturi, quasi non quam quas ullam totam repudiandae doloremque mollitia? Maiores culpa illo quia velit recusandae blanditiis magnam nisi odit quibusdam. Consectetur aliquid magni deserunt perferendis autem doloremque architecto aut recusandae non?</p>
        </div>
        <div class="shadow-xl rounded-lg py-4 px-8 bg-white lg:mx-0 mx-4 lg:max-w-xs lg:mb-0 mb-6">
          <div class="border-b pb-2 border-gray-300">
            <h2
              class="text-lg font-bold uppercase text-purple-800 tracking-wider text-center"
            >TWO YEARS DIPLOMA</h2>
          </div>
          <p
            class="mt-4 leading-6 tracking-tight text-gray-600 font-light text-xs"
          >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis quo repellendus delectus voluptas, perferendis ex suscipit velit tempore excepturi, quasi non quam quas ullam totam repudiandae doloremque mollitia? Maiores culpa illo quia velit recusandae blanditiis magnam nisi odit quibusdam. Consectetur aliquid magni deserunt perferendis autem doloremque architecto aut recusandae non?</p>
        </div>
      </div>
    </div>
    <div class="bg-blue-100 bg-opacity-25 pt-4 pb-12">
      <div class="mt-12 text-center">
        <h1 class="text-xl font-bold leading-5 tracking-wider text-blue-500 text-center">GALLERY</h1>
        <p
          class="lg:max-w-lg mt-4 leading-6 tracking-tight text-gray-600 font-light text-sm mx-auto lg:px-0 px-10"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti at animi ex aut rerum soluta deserunt voluptate eum</p>
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
  computed: {
    width() {
      return window.innerWidth > 650 ? true : false;
    },
    page() {
      return window.innerWidth > 650 ? 3 : 1;
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