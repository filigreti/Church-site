<template>
  <main>
    <div>
      <Hero
        @open="modal = true"
        :position="'object-center'"
        :color="'bg-black bg-opacity-90'"
        :buttonText="'Submit'"
        :button="'bg-blue-500 border-none'"
        :screen="'testimonies'"
        :mainText="'Testimonies'"
        :subText="`God has always been faithful to his children, take your time to read Through our faith strengthing testimonies and the wonderful miracles that God is doing. Do you have a testimony, use the submit button and submit to us your testimony`"
        :bgImage="'https://images.pexels.com/photos/2351721/pexels-photo-2351721.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'"
      />

      <div
        v-for="(testimony,i) in allTestimonies.results"
        :key="i"
        :class="i == 0 ? 'lg:mt-40 mt-24' : 'lg:mt-6 '"
        class="lg:max-w-4xl lg:mx-auto mx-3 py-4"
      >
        <div :class="(i % 2 == 0) ? 'lg:flex flex-row lg:flex-row-reverse ' : 'lg:flex'">
          <div class="h-48 max-w-sm">
            <img
              class="object-top shadow-xl rounded-lg object-cover w-full h-full"
              src="https://images.unsplash.com/photo-1580152343511-80ef2e53f1c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1614&q=80"
              alt
            />
          </div>
          <div :class="(i % 2 == 0) ? ' w-full lg:pr-20 lg:flex flex-col ' : '   w-full lg:pl-20'">
            <div
              :class="(i % 2 == 0) ? ' lg:flex-row-reverse  ':'lg:flex-row'"
              class="flex justify-between w-full flex-col lg:mt-0 mt-5"
            >
              <div
                :class="(i % 2 == 0) ? ' flex flex-row justify-between lg:items-end lg:flex-col':'flex lg:block justify-between'"
              >
                <div v-if="testimony.full_name !== null">
                  <h1
                    class="text-blue-800 font-light leading-none lg:text-2xl tracking-wide"
                  >Melody Sandra</h1>
                  <p
                    class="text-gray-600 text-xs items-start leading-5 font-normal"
                  >Olamaboro, Kogi State</p>
                </div>
                <div v-else>
                  <h1
                    class="text-blue-800 font-light leading-none lg:text-2xl tracking-wide"
                  >Ananymous</h1>
                </div>
              </div>
              <div>
                <p v-if="testimony.date" class="text-gray-500 text-xs">January 20th, 2020</p>
              </div>
            </div>
            <div
              :class="(i % 2 == 0) ? ' lg:text-right':''"
              class="text-xs text-gray-600 w-full mt-3 leading-6 font-light"
            >{{testimony.testimony}}</div>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-center mt-10 mb-20">
        <button
          v-if="allTestimonies.next !== null"
          @click="loadMore"
          class="text-sm rounded-full bg-transparent hover:bg-blue-500 text-blue-500 font-light hover:text-white outline-none shadow-none focus:outline-none py-2 leading-7 px-12 mt-6 border border-blue-500 hover:border-transparent rounded"
        >Load More</button>
      </div>
    </div>

    <TestimonialModal v-show="modal" @close="modal = false" />
  </main>
</template>

<script>
import TestimonialModal from "@/components/TestimonialModal";
import { mapGetters } from "vuex";
import Hero from "@/components/Hero";
export default {
  data() {
    return {
      modal: false
    };
  },
  watch: {
    modal(x) {
      if (x) {
        document.body.style.setProperty("overflow", "hidden");
      } else {
        document.body.style.removeProperty("overflow");
      }
    }
  },
  computed: {
    ...mapGetters(["getAllTestimonies"]),
    allTestimonies() {
      return this.getAllTestimonies;
    }
  },
  methods: {
    async loadMore(x) {
      this.$store.commit("setcurrentPage");
      await this.$store.dispatch("getTestimonies");
    }
  },
  components: {
    Hero,
    TestimonialModal
  }
};
</script>

<style>
</style>