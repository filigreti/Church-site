<template>
  <main>
    <div class="flex justify-between w-64 items-center mx-auto mt-8">
      <div class="flex items-center justify-center w-full">
        <svg
          @click="zoomCall"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          class="h-12 w-12 mr-2 cursor-pointer"
        >
          <circle cx="24" cy="24" r="20" fill="#2196f3" />
          <path
            fill="#fff"
            d="M29,31H14c-1.657,0-3-1.343-3-3V17h15c1.657,0,3,1.343,3,3V31z"
          />
          <polygon fill="#fff" points="37,31 31,27 31,21 37,17" />
        </svg>
        <svg
          @click="facebook"
          xmlns="http://www.w3.org/2000/svg"
          class="h-10 w-10 cursor-pointer"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
          id="Capa_1"
          x="0px"
          y="0px"
          viewBox="0 0 112.196 112.196"
          style="enable-background:new 0 0 112.196 112.196;"
          xml:space="preserve"
          width="512px"
          height="512px"
        >
          <g>
            <g>
              <circle
                style="fill:#3B5998;"
                cx="56.098"
                cy="56.098"
                r="56.098"
                data-original="#3B5998"
              />
              <path
                style="fill:#FFFFFF"
                d="M70.201,58.294h-10.01v36.672H45.025V58.294h-7.213V45.406h7.213v-8.34   c0-5.964,2.833-15.303,15.301-15.303L71.56,21.81v12.51h-8.151c-1.337,0-3.217,0.668-3.217,3.513v7.585h11.334L70.201,58.294z"
                data-original="#FFFFFF"
                class="active-path"
                data-old_color="#FFFFFF"
              />
            </g>
          </g>
        </svg>
        <svg
          @click="twitter"
          class="h-10 w-10 mx-2 cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
          id="Capa_1"
          x="0px"
          y="0px"
          viewBox="0 0 112.197 112.197"
          style="enable-background:new 0 0 112.197 112.197;"
          xml:space="preserve"
        >
          <g>
            <circle style="fill:#55ACEE;" cx="56.099" cy="56.098" r="56.098" />
            <g>
              <path
                style="fill:#F1F2F2;"
                d="M90.461,40.316c-2.404,1.066-4.99,1.787-7.702,2.109c2.769-1.659,4.894-4.284,5.897-7.417    c-2.591,1.537-5.462,2.652-8.515,3.253c-2.446-2.605-5.931-4.233-9.79-4.233c-7.404,0-13.409,6.005-13.409,13.409    c0,1.051,0.119,2.074,0.349,3.056c-11.144-0.559-21.025-5.897-27.639-14.012c-1.154,1.98-1.816,4.285-1.816,6.742    c0,4.651,2.369,8.757,5.965,11.161c-2.197-0.069-4.266-0.672-6.073-1.679c-0.001,0.057-0.001,0.114-0.001,0.17    c0,6.497,4.624,11.916,10.757,13.147c-1.124,0.308-2.311,0.471-3.532,0.471c-0.866,0-1.705-0.083-2.523-0.239    c1.706,5.326,6.657,9.203,12.526,9.312c-4.59,3.597-10.371,5.74-16.655,5.74c-1.08,0-2.15-0.063-3.197-0.188    c5.931,3.806,12.981,6.025,20.553,6.025c24.664,0,38.152-20.432,38.152-38.153c0-0.581-0.013-1.16-0.039-1.734    C86.391,45.366,88.664,43.005,90.461,40.316L90.461,40.316z"
              />
            </g>
          </g>
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-10 w-10 cursor-pointer"
          height="512pt"
          viewBox="0 0 512 512"
          width="512pt"
        >
          <path
            d="m305 256c0 27.0625-21.9375 49-49 49s-49-21.9375-49-49 21.9375-49 49-49 49 21.9375 49 49zm0 0"
          />
          <path
            d="m370.59375 169.304688c-2.355469-6.382813-6.113281-12.160157-10.996094-16.902344-4.742187-4.882813-10.515625-8.640625-16.902344-10.996094-5.179687-2.011719-12.960937-4.40625-27.292968-5.058594-15.503906-.707031-20.152344-.859375-59.402344-.859375-39.253906 0-43.902344.148438-59.402344.855469-14.332031.65625-22.117187 3.050781-27.292968 5.0625-6.386719 2.355469-12.164063 6.113281-16.902344 10.996094-4.882813 4.742187-8.640625 10.515625-11 16.902344-2.011719 5.179687-4.40625 12.964843-5.058594 27.296874-.707031 15.5-.859375 20.148438-.859375 59.402344 0 39.25.152344 43.898438.859375 59.402344.652344 14.332031 3.046875 22.113281 5.058594 27.292969 2.359375 6.386719 6.113281 12.160156 10.996094 16.902343 4.742187 4.882813 10.515624 8.640626 16.902343 10.996094 5.179688 2.015625 12.964844 4.410156 27.296875 5.0625 15.5.707032 20.144532.855469 59.398438.855469 39.257812 0 43.90625-.148437 59.402344-.855469 14.332031-.652344 22.117187-3.046875 27.296874-5.0625 12.820313-4.945312 22.953126-15.078125 27.898438-27.898437 2.011719-5.179688 4.40625-12.960938 5.0625-27.292969.707031-15.503906.855469-20.152344.855469-59.402344 0-39.253906-.148438-43.902344-.855469-59.402344-.652344-14.332031-3.046875-22.117187-5.0625-27.296874zm-114.59375 162.179687c-41.691406 0-75.488281-33.792969-75.488281-75.484375s33.796875-75.484375 75.488281-75.484375c41.6875 0 75.484375 33.792969 75.484375 75.484375s-33.796875 75.484375-75.484375 75.484375zm78.46875-136.3125c-9.742188 0-17.640625-7.898437-17.640625-17.640625s7.898437-17.640625 17.640625-17.640625 17.640625 7.898437 17.640625 17.640625c-.003906 9.742188-7.898437 17.640625-17.640625 17.640625zm0 0"
          />
          <path
            d="m256 0c-141.363281 0-256 114.636719-256 256s114.636719 256 256 256 256-114.636719 256-256-114.636719-256-256-256zm146.113281 316.605469c-.710937 15.648437-3.199219 26.332031-6.832031 35.683593-7.636719 19.746094-23.246094 35.355469-42.992188 42.992188-9.347656 3.632812-20.035156 6.117188-35.679687 6.832031-15.675781.714844-20.683594.886719-60.605469.886719-39.925781 0-44.929687-.171875-60.609375-.886719-15.644531-.714843-26.332031-3.199219-35.679687-6.832031-9.8125-3.691406-18.695313-9.476562-26.039063-16.957031-7.476562-7.339844-13.261719-16.226563-16.953125-26.035157-3.632812-9.347656-6.121094-20.035156-6.832031-35.679687-.722656-15.679687-.890625-20.6875-.890625-60.609375s.167969-44.929688.886719-60.605469c.710937-15.648437 3.195312-26.332031 6.828125-35.683593 3.691406-9.808594 9.480468-18.695313 16.960937-26.035157 7.339844-7.480469 16.226563-13.265625 26.035157-16.957031 9.351562-3.632812 20.035156-6.117188 35.683593-6.832031 15.675781-.714844 20.683594-.886719 60.605469-.886719s44.929688.171875 60.605469.890625c15.648437.710937 26.332031 3.195313 35.683593 6.824219 9.808594 3.691406 18.695313 9.480468 26.039063 16.960937 7.476563 7.34375 13.265625 16.226563 16.953125 26.035157 3.636719 9.351562 6.121094 20.035156 6.835938 35.683593.714843 15.675781.882812 20.683594.882812 60.605469s-.167969 44.929688-.886719 60.605469zm0 0"
          />
        </svg>
        <svg
          @click="youtube"
          class="h-10 w-10 ml-2 cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          height="512px"
          viewBox="0 0 512 512"
          width="512px"
        >
          <g>
            <path
              d="m224.113281 303.960938 83.273438-47.960938-83.273438-47.960938zm0 0"
              data-original="#000000"
              class="active-path"
              data-old_color="#000000"
              fill="#FF0100"
            />
            <path
              d="m256 0c-141.363281 0-256 114.636719-256 256s114.636719 256 256 256 256-114.636719 256-256-114.636719-256-256-256zm159.960938 256.261719s0 51.917969-6.585938 76.953125c-3.691406 13.703125-14.496094 24.507812-28.199219 28.195312-25.035156 6.589844-125.175781 6.589844-125.175781 6.589844s-99.878906 0-125.175781-6.851562c-13.703125-3.6875-24.507813-14.496094-28.199219-28.199219-6.589844-24.769531-6.589844-76.949219-6.589844-76.949219s0-51.914062 6.589844-76.949219c3.6875-13.703125 14.757812-24.773437 28.199219-28.460937 25.035156-6.589844 125.175781-6.589844 125.175781-6.589844s100.140625 0 125.175781 6.851562c13.703125 3.6875 24.507813 14.496094 28.199219 28.199219 6.851562 25.035157 6.585938 77.210938 6.585938 77.210938zm0 0"
              data-original="#000000"
              class="active-path"
              data-old_color="#000000"
              fill="#FF0100"
            />
          </g>
        </svg>
      </div>
    </div>
    <div class="text-center">
      <h1 class="text-sm font-normal mt-6">Quick Links</h1>
    </div>
    <div
      class="lg:max-w-4xl lg:mx-auto lg:grid-flow-col grid grid-cols-2 ml-3 gap-4 lg:grid mt-6 lg:justify-between lg:grid-cols-6"
    >
      <div>
        <h1
          @click="$router.push('/events')"
          class="cursor-pointer font-black text-lg"
        >
          Events
        </h1>
        <p class="text-xs">Calebites</p>
        <p class="text-xs">Conferences</p>
        <p class="text-xs">Crusades</p>
        <p class="text-xs">Miracle Services</p>
        <p class="text-xs">Retreats</p>
      </div>
      <div>
        <h1
          @click="$router.push('/donations')"
          class="cursor-pointer font-black text-lg"
        >
          Givings
        </h1>
        <p class="text-xs">Local Givings</p>
        <p class="text-xs">International Givings</p>
      </div>
      <div>
        <h1
          @click="$router.push('/media')"
          class="font-black cursor-pointer text-lg"
        >
          Media
        </h1>
        <p class="text-xs">Books</p>
        <p class="text-xs">Audios</p>
        <p class="text-xs">Videos</p>
        <p class="text-xs">Online Radios</p>
      </div>
      <div>
        <h1
          @click="$router.push('/contact-us')"
          class="font-black cursor-pointer text-lg"
        >
          Social Links
        </h1>
        <p class="text-xs">Conferences</p>
        <p class="text-xs">Youtube</p>
        <p class="text-xs">Instagram</p>
        <p class="text-xs">Mixr</p>
      </div>
      <div>
        <h1
          @click="$router.push('/live')"
          class="font-black cursor-pointer text-lg"
        >
          Live
        </h1>
        <p class="text-xs">Youtube redirect Link</p>
        <p class="text-xs">Facebook redirect Link</p>
        <p class="text-xs">Live Radio</p>
      </div>
      <div>
        <h1
          @click="$router.push('/bible-school')"
          class="font-black cursor-pointer text-lg"
        >
          School of
          <br />ministerial excellence
        </h1>
        <p class="text-xs">Enroll</p>
        <p class="text-xs">One-Month Intensive</p>
        <p class="text-xs">One Year Certificate</p>
        <p class="text-xs">Two years Diploma</p>
      </div>
    </div>
    <div class="flex items-center justify-center mt-4 mb-8 w-full">
      <div class="border-r-2 border-black">
        <h1 class="font-black cursor-pointer text-sm mr-4">
          School of
          <br />ministerial excellence
        </h1>
      </div>
      <div>
        <h1 class="font-black cursor-pointer text-sm ml-4">
          +234 080 080 5674
        </h1>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      zoom: null,
    };
  },
  methods: {
    facebook() {
      window.open("https://web.facebook.com/groups/368974059816565", "_blank");
    },
    twitter() {
      window.open("https://twitter.com/MissionsCare", "_blank");
    },
    youtube() {
      window.open(
        "https://www.youtube.com/channel/UCPe9rUAnO_P7AFsswV7E2Qw",
        "_blank"
      );
    },
    zoomCall() {
      window.open(this.zoom.link, "_blank");
    },
  },
  async mounted() {
    let res = await this.$store.dispatch("zoomLive");
    this.zoom = res;
  },
};
</script>

<style></style>
