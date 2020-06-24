<template>
  <main>
    <div class="fixed inset-0 bg-white flex h-screen box-border">
      <div class="lg:w-1/2 hidden lg:block f-full bg-blue-900 relative p-12 overflow-hidden">
        <div class="justify-between flex w-full">
          <div class="z-20 cursor-pointer" @click="$router.push('/')">
            <h2
              :style="toggle ? 'filter:blur(1.3px); z-index:5' :''"
              class="lg:uppercase lg:tracking-wide text-white lg:leading-3 play lg:text-2xl text-xl leading-3"
            >Gods care missions</h2>
            <p
              :style="toggle ? 'filter:blur(1.3px); z-index:5' :''"
              class="text-xs capitalize text-white lg:mt-2 lg:pt-1 pt-2"
            >We care, because God Cares</p>
          </div>
          <div class="z-20">
            <svg
              @click="toggle = true"
              v-if="!toggle"
              class="h-8 w-8 text-white cursor-pointer"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg
              :style="toggle ? 'filter:blur(0px); z-index:80' :''"
              class="h-8 w-8 text-white z-30 cursor-pointer"
              @click="toggle = false"
              v-else
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        </div>
        <div class="relative">
          <transition>
            <div v-show="toggle" class="flex justify-end flex-col items-end z-50 absolute right-0">
              <router-link
                to="/"
                class="text-gray-100 font-light hover:text-white text-lg mt-8 ease-in duration-75"
              >Home</router-link>
              <router-link
                to="/events"
                class="text-gray-100 font-light hover:text-white text-lg mt-6"
              >Events</router-link>
              <router-link
                to="/live"
                class="text-gray-100 font-light hover:text-white text-lg mt-6"
              >Live</router-link>
              <router-link
                to="/contact-us"
                class="text-gray-100 font-light hover:text-white text-lg mt-6"
              >Contact Us</router-link>
              <router-link
                to="/about-us"
                class="text-gray-100 font-light hover:text-white text-lg mt-6"
              >About Us</router-link>

              <router-link
                v-if="$route.name == 'Register'"
                to="/auth/login"
                class="text-gray-100 font-light hover:text-white text-lg mt-6"
              >Login</router-link>
              <router-link
                v-else
                to="/auth/register"
                class="text-gray-100 font-light hover:text-white text-lg mt-6"
              >Register</router-link>
            </div>
          </transition>
        </div>

        <img
          :style="toggle ? 'filter:blur(1.3px); z-index:5' :''"
          class="object-cover object-top absolute h-full w-full opacity-50 inset-0"
          :src="$route.name == 'Login' ? login : register"
          alt
        />
      </div>
      <div class="flex-1">
        <div class="absolute top-0 lg:hidden w-full z-50">
          <div class="m-8 relative">
            <div class="lg:hidden relative w-full flex justify-between top-0">
              <div class="cursor-pointer" @click="$router.push('/')">
                <h2
                  class="lg:uppercase lg:tracking-wide text-gray-900 lg:leading-3 play lg:text-2xl text-xl leading-3 font-light"
                >Gods care missions</h2>
                <p
                  class="text-xs capitalize text-gray-900 lg:mt-2 lg:pt-1 pt-2 font-light"
                >We care, because God Cares</p>
              </div>
              <div @click="active = true" class="lg:hidden">
                <svg
                  class="h-8 w-8 text-gray-900"
                  fill="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </div>
            </div>
            <div
              v-show="active"
              class="fixed lg:hidden inset-0 bg-black flex h-screen box-border z-50"
            >
              <div class="absolute inset-0 w-full h-full">
                <img
                  class="w-full h-full object-cover opacity-75"
                  src="https://images.unsplash.com/photo-1542042179-03efeb269b35?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                  alt
                />
              </div>
              <div class="m-8 w-full relative">
                <div class="justify-between flex w-full">
                  <div class="z-50 cursor-pointer" @click="$router.push('/')">
                    <h2
                      class="lg:uppercase lg:tracking-wide text-white lg:leading-3 play lg:text-2xl text-xl leading-3"
                    >Gods care missions</h2>
                    <p
                      class="text-xs capitalize text-white lg:mt-2 lg:pt-1 pt-2"
                    >We care, because God Cares</p>
                  </div>
                  <div class="z-50">
                    <svg
                      :style="active ? 'filter:blur(0px); z-index:80' :''"
                      class="h-8 w-8 text-white z-30 cursor-pointer"
                      @click="active = false"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                </div>
                <div class="flex justify-end flex-col items-end z-10 absolute right-0">
                  <router-link
                    @click.native="active= false"
                    to="/"
                    class="text-gray-100 font-light hover:text-white text-lg mt-8 ease-in duration-75"
                  >Home</router-link>
                  <router-link
                    @click.native="active= false"
                    to="/events"
                    class="text-gray-100 font-light hover:text-white text-lg mt-6"
                  >Events</router-link>
                  <router-link
                    @click.native="active= false"
                    to="/live"
                    class="text-gray-100 font-light hover:text-white text-lg mt-6"
                  >Live</router-link>
                  <router-link
                    @click.native="active= false"
                    to="/contact-us"
                    class="text-gray-100 font-light hover:text-white text-lg mt-6"
                  >Contact Us</router-link>
                  <router-link
                    @click.native="active= false"
                    to="/about-us"
                    class="text-gray-100 font-light hover:text-white text-lg mt-6"
                  >About Us</router-link>
                  <router-link
                    @click.native="active= false"
                    to="/auth/login"
                    class="text-gray-100 font-light hover:text-white text-lg mt-6"
                  >Login</router-link>
                  <router-link
                    @click.native="active= false"
                    to="/auth/register"
                    class="text-gray-100 font-light hover:text-white text-lg mt-6"
                  >Register</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <router-view :toggle="toggle" />
      </div>
    </div>
  </main>
</template>

<script>
import VueTailwindModal from "vue-tailwind-modal";

export default {
  data() {
    return {
      active: false,
      toggle: false,
      showModal: true,
      register:
        "https://images.unsplash.com/photo-1515531470634-49308b99ab90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      login:
        "https://images.pexels.com/photos/2774570/pexels-photo-2774570.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    };
  },
  components: {
    VueTailwindModal
  },
  watch: {
    $route(x) {
      if (x) {
        this.toggle = false;
      }
    }
  },
  mounted() {
    document.body.style.setProperty("overflow", "hidden");
  },
  destroyed() {
    document.body.style.removeProperty("overflow");
  }
};
</script>

<style>
</style>