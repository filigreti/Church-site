<template>
  <div
    class="z-10 lg:mx-16 lg:mt-8 lg:text-black lg:justify-between lg:items-center lg:flex flex justify-between m-8"
  >
    <div class>
      <h2
        class="lg:uppercase lg:tracking-wide text-gray-200 lg:leading-3 play lg:text-2xl text-xl leading-3"
      >Gods care missions</h2>
      <p class="text-xs capitalize text-gray-200 lg:mt-2 lg:pt-1 pt-2">We care, because God Cares</p>
    </div>
    <div class="lg:hidden">
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
        <router-link to="/" class="text-gray-500 hover:text-white text-xs">Home</router-link>
      </li>
      <router-link
        to="/events"
        class="ml-16 text-gray-500 hover:text-white text-xs events"
        :class="[$route.name == 'MainTheme' ? 'all-white' :'']"
      >
        <span class="flex items-center hover:text-white">
          <div>Events</div>
          <svg
            :class="[$route.name == 'MainTheme' ? 'all-white' :'']"
            class="w-3 h-3 ml-1 text-gray-500"
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
        <router-link to="/live" class="text-gray-500 hover:text-white text-xs">Live</router-link>
      </li>
      <li class="ml-16">
        <router-link to="/contact-us" class="text-gray-500 hover:text-white text-xs">Contact Us</router-link>
      </li>
      <li class="ml-16">
        <router-link to="/about-us" class="text-gray-500 hover:text-white text-xs">About Us</router-link>
      </li>
      <li class="ml-16">
        <router-link to="/carts" class="text-gray-500 hover:text-white text-xs">Carts</router-link>
      </li>
    </ul>
  </div>
</template>

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