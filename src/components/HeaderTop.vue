<template>
  <div
    class="z-10 lg:mx-16 lg:mt-8 lg:text-black lg:justify-between lg:items-center lg:flex flex justify-between m-8"
  >
    <div class="cursor-pointer" @click="$router.push('/')">
      <h2
        class="lg:uppercase lg:tracking-wide text-gray-200 lg:leading-3 play lg:text-2xl text-xl leading-3 font-light"
      >Gods care missions</h2>
      <p
        class="text-xs capitalize text-gray-200 lg:mt-2 lg:pt-1 pt-2 font-light"
      >We care, because God Cares</p>
    </div>
    <div @click="toggle = true" class="lg:hidden">
      <svg
        class="h-8 w-8 text-gray-300"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </div>
    <ul class="lg:flex lg:text-white lg:items-center hidden">
      <li class="ml-16">
        <router-link to="/" class="text-gray-500 font-hairline hover:text-white text-xs">Home</router-link>
      </li>
      <router-link
        to="/events"
        class="ml-16 text-gray-500 font-hairline hover:text-white text-xs events"
        :class="[$route.name == 'MainTheme' ? 'all-white' :'']"
      >
        <span class="flex items-center hover:text-white">
          <div>Events</div>
          <svg
            :class="[$route.name == 'MainTheme' ? 'all-white' :'']"
            class="w-3 h-3 ml-1 text-gray-500 font-hairline"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </router-link>
      <li class="ml-16">
        <router-link to="/live" class="text-gray-500 font-hairline hover:text-white text-xs">Live</router-link>
      </li>
      <li class="ml-16">
        <router-link
          to="/contact-us"
          class="text-gray-500 font-hairline hover:text-white text-xs"
        >Contact Us</router-link>
      </li>
      <li class="ml-16">
        <router-link
          to="/about-us"
          class="text-gray-500 font-hairline hover:text-white text-xs"
        >About Us</router-link>
      </li>
      <li v-if="!isSignedIn" class="ml-16">
        <router-link
          to="/auth/login"
          class="text-gray-500 font-hairline hover:text-white text-xs"
        >SignIn</router-link>
      </li>
      <li v-if="isSignedIn" class="ml-16">
        <router-link
          to
          class="text-gray-500 font-hairline hover:text-white text-xs"
        >{{getDetails.full_name}}</router-link>
      </li>
      <li class="ml-16">
        <router-link
          to="/media/books/cart"
          class="text-gray-500 font-hairline hover:text-white text-xs"
        >Cart</router-link>
      </li>
    </ul>
    <div v-show="toggle" class="fixed lg:hidden inset-0 bg-black flex h-screen box-border z-50">
      <div class="absolute inset-0 w-full h-full">
        <img
          class="w-full h-full object-cover opacity-75"
          src="https://images.unsplash.com/photo-1542042179-03efeb269b35?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
          alt
        />
      </div>
      <div class="m-8 w-full relative">
        <div class="justify-between flex w-full">
          <div class="z-20 cursor-pointer" @click="$router.push('/')">
            <h2
              class="lg:uppercase lg:tracking-wide text-white lg:leading-3 play lg:text-2xl text-xl leading-3"
            >Gods care missions</h2>
            <p class="text-xs capitalize text-white lg:mt-2 lg:pt-1 pt-2">We care, because God Cares</p>
          </div>
          <div class="z-20">
            <svg
              :style="toggle ? 'filter:blur(0px); z-index:80' :''"
              class="h-8 w-8 text-white z-30 cursor-pointer"
              @click="toggle = false"
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
        <div class="flex justify-end flex-col items-end z-50 absolute right-0">
          <router-link
            @click.native="toggle= false"
            to="/"
            class="text-gray-100 font-light hover:text-white text-lg mt-8 ease-in duration-75"
          >Home</router-link>
          <router-link
            @click.native="toggle= false"
            to="/events"
            class="text-gray-100 font-light hover:text-white text-lg mt-6"
          >Events</router-link>
          <router-link
            @click.native="toggle= false"
            to="/live"
            class="text-gray-100 font-light hover:text-white text-lg mt-6"
          >Live</router-link>
          <router-link
            @click.native="toggle= false"
            to="/contact-us"
            class="text-gray-100 font-light hover:text-white text-lg mt-6"
          >Contact Us</router-link>
          <router-link
            @click.native="toggle= false"
            to="/about-us"
            class="text-gray-100 font-light hover:text-white text-lg mt-6"
          >About Us</router-link>
          <router-link
            @click.native="toggle= false"
            to="/media/books/cart"
            class="text-gray-100 font-light hover:text-white text-lg mt-6"
          >Cart</router-link>
          <router-link
            v-if="isSignedIn"
            @click.native="toggle= false"
            to
            class="text-gray-100 font-light hover:text-white text-lg mt-6"
          >{{getDetails.full_name}}</router-link>
          <router-link
            v-if="!isSignedIn"
            @click.native="toggle= false"
            to="/auth/login"
            class="text-gray-100 font-light hover:text-white text-lg mt-6"
          >Login</router-link>
          <router-link
            v-if="!isSignedIn"
            @click.native="toggle= false"
            to="/auth/register"
            class="text-gray-100 font-light hover:text-white text-lg mt-6"
          >Register</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      toggle: false
    };
  },
  computed: {
    ...mapGetters(["getUserDetails", "checkAuth"]),
    isSignedIn() {
      return this.checkAuth;
    },
    getDetails() {
      return this.getUserDetails;
    }
  },
  watch: {
    $route(x, y) {
      if (x) {
        this.toggle = false;
      }
    },
    toggle(x) {
      if (x) {
        document.body.style.setProperty("overflow", "hidden");
      } else {
        document.body.style.removeProperty("overflow");
      }
    }
  }
};
</script>

<style>
.router-link-exact-active,
.router-link-exact-active svg {
  color: white !important;
}

.events:hover svg {
  color: white;
}
.all-white {
  color: white !important;
}
</style>