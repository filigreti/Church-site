<template>
  <main>
    <div>
      <Hero
        @open="modal = true"
        :position="'object-center'"
        :color="'bg-black bg-opacity-90'"
        :buttonText="'Donate Now'"
        :button="'bg-blue-500 border-none'"
        :screen="'testimonies'"
        :mainText="'Donations'"
        :subText="`Support God's Care mission Inc`"
        :subTextClass="'leading-6 text-white text-base tracking-wide font-light'"
        :donations="`Feel free to give to give your support to God's Care Missions Inc.`"
        :bgImage="'https://images.pexels.com/photos/3833052/pexels-photo-3833052.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'"
      />
      <div class="flex justify-center lg:flex-row flex-col items-center w-full mt-40 lg:mx-0 px-3">
        <div
          class="shadow-xl bg-white lg:w-56 w-full px-3 lg:mb-0 mb-3 text-center rounded py-4 flex flex-col justify-center items-center"
        >
          <h1 class="text-sm font-black text-gray-900">Local Donations</h1>
          <div class="my-5">
            <svg
              class="w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -28 512.00002 512"
              width="512px"
              height="512px"
            >
              <g>
                <path
                  d="m471.382812 44.578125c-26.503906-28.746094-62.871093-44.578125-102.410156-44.578125-29.554687 0-56.621094 9.34375-80.449218 27.769531-12.023438 9.300781-22.917969 20.679688-32.523438 33.960938-9.601562-13.277344-20.5-24.660157-32.527344-33.960938-23.824218-18.425781-50.890625-27.769531-80.445312-27.769531-39.539063 0-75.910156 15.832031-102.414063 44.578125-26.1875 28.410156-40.613281 67.222656-40.613281 109.292969 0 43.300781 16.136719 82.9375 50.78125 124.742187 30.992188 37.394531 75.535156 75.355469 127.117188 119.3125 17.613281 15.011719 37.578124 32.027344 58.308593 50.152344 5.476563 4.796875 12.503907 7.4375 19.792969 7.4375 7.285156 0 14.316406-2.640625 19.785156-7.429687 20.730469-18.128907 40.707032-35.152344 58.328125-50.171876 51.574219-43.949218 96.117188-81.90625 127.109375-119.304687 34.644532-41.800781 50.777344-81.4375 50.777344-124.742187 0-42.066407-14.425781-80.878907-40.617188-109.289063zm0 0"
                  data-original="#000000"
                  class="active-path"
                  data-old_color="#000000"
                  fill="#FB5252"
                />
              </g>
            </svg>
          </div>
          <h1 class="text-xl font-black text-blue-600">Donate Now</h1>
          <p class="text-sm text-black font-light tracking-wide">Pay In Naira</p>
        </div>

        <div
          class="shadow-xl bg-white lg:w-56 w-full px-3 text-center py-4 rounded lg:ml-12 flex flex-col justify-center items-center"
        >
          <h1 class="text-sm font-black text-gray-900">International Donations</h1>
          <div class="my-5">
            <svg
              class="w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -28 512.00002 512"
              width="512px"
              height="512px"
            >
              <g>
                <path
                  d="m471.382812 44.578125c-26.503906-28.746094-62.871093-44.578125-102.410156-44.578125-29.554687 0-56.621094 9.34375-80.449218 27.769531-12.023438 9.300781-22.917969 20.679688-32.523438 33.960938-9.601562-13.277344-20.5-24.660157-32.527344-33.960938-23.824218-18.425781-50.890625-27.769531-80.445312-27.769531-39.539063 0-75.910156 15.832031-102.414063 44.578125-26.1875 28.410156-40.613281 67.222656-40.613281 109.292969 0 43.300781 16.136719 82.9375 50.78125 124.742187 30.992188 37.394531 75.535156 75.355469 127.117188 119.3125 17.613281 15.011719 37.578124 32.027344 58.308593 50.152344 5.476563 4.796875 12.503907 7.4375 19.792969 7.4375 7.285156 0 14.316406-2.640625 19.785156-7.429687 20.730469-18.128907 40.707032-35.152344 58.328125-50.171876 51.574219-43.949218 96.117188-81.90625 127.109375-119.304687 34.644532-41.800781 50.777344-81.4375 50.777344-124.742187 0-42.066407-14.425781-80.878907-40.617188-109.289063zm0 0"
                  data-original="#000000"
                  class="active-path"
                  data-old_color="#000000"
                  fill="#FB5252"
                />
              </g>
            </svg>
          </div>
          <h1 class="text-xl font-black text-blue-600">Donate Now</h1>
          <p class="text-sm text-black font-light tracking-wide">Pay In Dollars</p>
        </div>
      </div>
      <div class="mt-32 max-w-4xl mx-auto">
        <div class="inline-flex w-full lg:flex-row flex-col lg:px-0 px-3">
          <div class="lg:max-w-xs">
            <img
              class="w-full object-cover h-full"
              src="https://images.unsplash.com/photo-1580152343511-80ef2e53f1c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1614&q=80"
              alt
            />
          </div>
          <div class="flex-1 lg:ml-12">
            <div class="w-full">
              <h2 class="text-3xl font-bold tracking-wide leading-9 text-gray-900 lg:mt-0 mt-5">
                You can make a
                <br />difference, so why
                <br />don't you ?
              </h2>
            </div>
            <div class="grid lg:grid-cols-2 gap-5 mt-5">
              <div
                class="text-xs text-gray-500 leading-6 font-light"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quaerat accusantium quod autem vitae est? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, tempora. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ipsa labore quaerat sit fugit, a culpa alias? Voluptate, sequi aliquid accusamus, dicta iste expedita voluptas rerum ullam cupiditate vel, debitis asperiores ipsam! Ipsum dignissimos porro necessitatibus quisquam id, consequuntur ea! Accusantium ducimus atque corrupti nesciunt animi sunt alias ad dignissimos.</div>
              <div
                class="text-xs text-gray-500 leading-6 font-light"
              >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim dolor dolores omnis perspiciatis laboriosam cumque magni temporibus aliquam adipisci iste excepturi ullam molestiae nisi sit illum maiores, libero illo vitae voluptatibus quis ipsam perferendis esse dolorem aliquid. Error similique quod officia, distinctio placeat deleniti voluptates eius nihil quam ut odit.</div>
            </div>
          </div>
        </div>
        <div class="mt-20 max-w-4xl mx-auto h-48 bg-black relative">
          <img
            class="object-center opacity-75 object-cover w-full h-full absolute"
            src="https://images.unsplash.com/photo-1506506637031-5e2cabd00f30?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
            alt
          />
        </div>
      </div>
      <div class="max-w-4xl mx-auto mt-20 mb-20">
        <div class="bg-blue-400 w-full h-32 flex items-center justify-center leading-6">
          <h1
            class="lg:text-2xl text-white tracking-wider"
          >Support God's Care Missions, Donate Now !</h1>
        </div>
      </div>
    </div>

    <DonationsModal v-show="modal" @close="modal = false" />
  </main>
</template>

<script>
import DonationsModal from "@/components/DonationsModal";
import { Carousel, Slide } from "vue-carousel";
import Hero from "@/components/Hero";
export default {
  data() {
    return {
      modal: false,
      images: [
        "https://godscaremissionsinc.org/wp-content/uploads/2020/02/BONGOR-002.jpg",
        "https://godscaremissionsinc.org/wp-content/uploads/2020/02/PST-DJIMAS-1.jpg",
        "https://godscaremissionsinc.org/wp-content/uploads/2020/02/MAROUA-003.jpg",
        "https://godscaremissionsinc.org/wp-content/uploads/2020/02/NGOUNDERE.jpg",
        "https://godscaremissionsinc.org/wp-content/uploads/2020/02/GAROUA-FLYER-2020-768x1038.png"
      ]
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
    Slide,
    DonationsModal
  }
};
</script>

<style>
</style>