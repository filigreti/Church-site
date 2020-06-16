<template>
  <div class="z-10 mx-16 mt-8 text-black flex justify-between items-center">
    <div>
      <h2 class="uppercase tracking-wide text-gray-200 leading-3 play text-2xl">Gods care missions</h2>
      <p class="text-xs capitalize text-gray-200 mt-2 pt-1">We care, because God Cares</p>
    </div>
    <ul class="flex text-white items-center">
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