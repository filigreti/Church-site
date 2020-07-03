<template>
  <main>
    <Hero
      :color="'bg-indigo-800'"
      :bgImage="'https://images.unsplash.com/photo-1571751888410-0c83afb6f3f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'"
    />
    <div
      class="lg:max-w-4xl lg:mx-auto bg-white shadow-xl p-10 rounded-lg flex lg:flex-row flex-col lg:mx-0 mx-3 lg:mt-0 mt-16"
    >
      <div class="bg-gray-300">
        <img
          style="filter:brightness(90%)"
          :src="getCurrentEvent.event_flyer"
          class="h-56 lg:w-64 w-full lg:mb-0 mb-3 object-cover object-top rounded"
          alt
        />
      </div>
      <div class="lg:ml-10 h-full flex-1">
        <h1 class="uppercase text-2xl font-light tracking-wider">{{getCurrentEvent.event_title}}</h1>
        <h1
          class="uppercase text-2xl font-light tracking-wider leading-6"
        >Theme: {{getCurrentEvent.event_theme}}</h1>
        <div v-if="getCurrentEvent.event_time !== null"   class="flex mt-4 w-full lg:flex flex-col">
          <div  class="flex items-center mb-4">
            <svg
              class="lg:h-8 lg:w-8 h-8 w-8"
              xmlns="http://www.w3.org/2000/svg"
              id="Capa_1"
              enable-background="new 0 0 443.294 443.294"
              height="512px"
              viewBox="0 0 443.294 443.294"
              width="512px"
            >
              <g>
                <path
                  d="m221.647 0c-122.214 0-221.647 99.433-221.647 221.647s99.433 221.647 221.647 221.647 221.647-99.433 221.647-221.647-99.433-221.647-221.647-221.647zm0 415.588c-106.941 0-193.941-87-193.941-193.941s87-193.941 193.941-193.941 193.941 87 193.941 193.941-87 193.941-193.941 193.941z"
                  data-original="#000000"
                  class="active-path"
                  data-old_color="#000000"
                  fill="#1273EB"
                />
                <path
                  d="m235.5 83.118h-27.706v144.265l87.176 87.176 19.589-19.589-79.059-79.059z"
                  data-original="#000000"
                  class="active-path"
                  data-old_color="#000000"
                  fill="#1273EB"
                />
              </g>
            </svg>
            <div class="ml-2 lg:block flex">
              <p
                class="text-sm font-light"
              >Arrival time, {{getCurrentEvent.event_start_date }}, {{getCurrentEvent.event_time }}</p>

              <!-- <p class="font-light text-sm">/p> -->
            </div>
          </div>
          <div class="flex items-center lg:mt-0 mt-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8"
              id="Capa_1"
              enable-background="new 0 0 512 512"
              height="512px"
              viewBox="0 0 512 512"
              width="512px"
            >
              <g>
                <g>
                  <path
                    d="m354.32 152.519c-8.289-5.526-81.705-54.47-90-60-5.039-3.358-11.602-3.358-16.641 0-8.291 5.528-81.713 54.476-90 60-6.894 4.596-8.756 13.909-4.16 20.801 4.596 6.894 13.911 8.756 20.801 4.161l6.68-4.453v82.972c0 8.284 6.716 15 15 15h120c8.284 0 15-6.716 15-15v-82.972l6.68 4.453c6.882 4.586 16.198 2.744 20.801-4.161 4.595-6.892 2.733-16.205-4.161-20.801zm-53.32 88.481h-90v-87.972l45-30 45 30z"
                    data-original="#000000"
                    class="active-path"
                    data-old_color="#000000"
                    fill="#1273EB"
                  />
                  <path
                    d="m256 0c-90.981 0-165 74.019-165 165 0 95.322 91.256 218.623 154.323 282.536 2.819 2.856 6.664 4.464 10.677 4.464s7.858-1.608 10.677-4.464c63.983-64.841 154.323-187.696 154.323-282.536 0-90.981-74.019-165-165-165zm-.004 415.075c-33.626-36.834-134.996-155.721-134.996-250.075 0-74.439 60.561-135 135-135s135 60.561 135 135c0 94.248-101.388 213.223-135.004 250.075z"
                    data-original="#000000"
                    class="active-path"
                    data-old_color="#000000"
                    fill="#1273EB"
                  />
                  <path
                    d="m166 482c-8.284 0-15 6.716-15 15s6.716 15 15 15h180c8.284 0 15-6.716 15-15s-6.716-15-15-15z"
                    data-original="#000000"
                    class="active-path"
                    data-old_color="#000000"
                    fill="#1273EB"
                  />
                </g>
              </g>
            </svg>
            <div class="ml-2 lg:flex lg:flex-col flex-row leading-4 lg:leading-5">
              <span class="text-sm font-light">{{getCurrentEvent.address}}</span>
              <span class="font-light text-sm"></span>
            </div>
          </div>
        </div>
        <div class="flex">
          <div
            class="rounded-full w-16 h-16 mt-3 bg-white shadow-2xl flex items-center justify-center"
          >
            <div class="inline-flex flex-col items-center">
              <h1
                style="color:red"
                class="text-2xl font-black leading-none tracking-wider"
              >{{getCurrentEvent.event_start_date | convertDate}}</h1>
              <h2
                class="text-blue-500 font-normal tracking-wide leading-none"
              >{{getCurrentEvent.event_start_date | convertMonth}}</h2>
            </div>
          </div>
          <div
            class="ml-5 rounded-full w-16 h-16 mt-3 bg-white shadow-2xl flex items-center justify-center"
          >
            <div class="inline-flex flex-col items-center">
              <h1
                style="color:red"
                class="text-2xl font-black leading-none tracking-wider"
              >{{getCurrentEvent.event_end_date | convertDate}}</h1>
              <h2
                class="text-blue-500 font-normal tracking-wide leading-none"
              >{{getCurrentEvent.event_end_date | convertMonth}}</h2>
            </div>
          </div>
        </div>
        <div>
          <!-- <p
            class="text-sm text-gray-700 mt-4 leading-5 font-light"
          >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio nam distinctio optio impedit laudantium voluptas enim eligendi, perferendis molestias, reprehenderit iusto vel animi tenetur aperiam aut quaerat! Beatae, deleniti aperiam.</p>-->
        </div>
      </div>
    </div>
    <div class="bg-blue-100 bg-opacity-25 py-16">
      <div class="lg:max-w-4xl lg:mx-auto bg-white rounded-lg shadow-xl mx-3 lg:px-0 px-8">
        <form @submit.prevent="send" class="py-8">
          <h1
            class="text-xl font-light leading-6 tracking-wider font-normal text-blue-500 text-center"
          >Register to Attend</h1>
          <p
            class="mt-3 text-gray-600 text-xs text-center font-light"
          >Fill in your Detail so we can welcome you properly</p>
          <div class="max-w-xl mt-5 mx-auto grid grid-cols-1 lg:grid-cols-2 lg:gap-5 gap-2">
            <input
              class="bg-gray-200 text-xs rounded-full font-light focus:outline-none focus:shadow-outline border-0 border-gray-300 rounded-lg py-2 px-4 w-full block mx-auto appearance-none leading-6"
              type="string"
              placeholder="First name"
              v-model="info.attendee_first_name"
              required
            />
            <input
              class="bg-gray-200 text-xs rounded-full font-light focus:outline-none focus:shadow-outline border-0 border-gray-300 rounded-lg py-2 px-4 w-full block mx-auto appearance-none leading-6"
              type="string"
              placeholder="Last name"
              v-model="info.attendee_last_name"
              required
            />
          </div>
          <div class="max-w-xl mx-auto">
            <input
              class="bg-gray-200 mt-3 text-xs rounded-full font-light focus:outline-none focus:shadow-outline border-0 border-gray-300 rounded-lg py-2 px-4 w-full block mx-auto appearance-none leading-6"
              type="email"
              placeholder="Email Address"
              v-model="info.attendee_email_address"
              required
            />
          </div>
          <div class="max-w-xl mx-auto">
            <input
              class="bg-gray-200 mt-3 text-xs rounded-full font-light focus:outline-none focus:shadow-outline border-0 border-gray-300 rounded-lg py-2 px-4 w-full block mx-auto appearance-none leading-6"
              type="string"
              placeholder="Mobile Number"
              v-model="info.attendee_mobile_number"
              required
            />
          </div>

          <div class="max-w-xl mt-3 mx-auto grid grid-cols-1 lg:grid-cols-2 lg:gap-5 gap-2">
            <input
              class="bg-gray-200 text-xs rounded-full font-light focus:outline-none focus:shadow-outline border-0 border-gray-300 rounded-lg py-2 px-4 w-full block mx-auto appearance-none leading-6"
              type="string"
              placeholder="Country"
              v-model="info.attendee_country"
              required
            />
            <input
              class="bg-gray-200 text-xs rounded-full font-light focus:outline-none focus:shadow-outline border-0 border-gray-300 rounded-lg py-2 px-4 w-full block mx-auto appearance-none leading-6"
              type="string"
              placeholder="State"
              v-model="info.attendee_state"
            />
          </div>
          <div class="max-w-xl mx-auto">
            <input
              class="bg-gray-200 mt-3 text-xs rounded-full font-light focus:outline-none focus:shadow-outline border-0 border-gray-300 rounded-lg py-2 px-4 w-full block mx-auto appearance-none leading-6"
              type="string"
              placeholder="Church Name"
              v-model="info.attendee_church_name"
            />
          </div>
          <div
            class="max-w-xl mt-3 mx-auto grid grid-cols-1 lg:grid-cols-2 lg:gap-5 gap-2 lg:items-center"
          >
            <div
              class="text-xs font-light text-gray-800 lg:mr-24 lowercase"
            >Is this your first time attending {{getCurrentEvent.event_title}}</div>
            <div class="relative flex items-center">
              <select
                v-model="info.attendee_first_time_attending"
                class="text-gray-500 bg-gray-200 text-xs rounded-full font-light focus:outline-none focus:shadow-outline border-0 border-gray-300 rounded-lg py-2 px-4 w-full block mx-auto appearance-none leading-6"
                type="string"
              >
                <option :value="Boolean(true)">Yes</option>
                <option :value="Boolean(false)">No</option>
              </select>
              <svg
                class="absolute w-4 h-4 right-0 mr-5 text-gray-500 pointer-events-none"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          <div
            class="max-w-xl mt-3 mx-auto grid grid-cols-1 lg:grid-cols-2 lg:gap-5 gap-2 lg:items-center"
          >
            <div
              class="text-xs font-light text-gray-800 lg:mr-24 lowercase"
            >How many times have you attended {{getCurrentEvent.event_title}} ?</div>
            <div class="relative flex items-center">
              <input
                v-model="info.no_of_times_attended"
                class="bg-gray-200 text-xs rounded-full font-light focus:outline-none focus:shadow-outline border-0 border-gray-300 rounded-lg py-2 px-4 w-full block mx-auto appearance-none leading-6"
                type="number"
                placeholder="No of Times"
              />
            </div>
          </div>
          <div
            class="max-w-xl mt-3 mx-auto grid grid-cols-1 lg:grid-cols-2 lg:gap-5 gap-2 lg:items-center"
          >
            <div
              class="text-xs font-light text-gray-800 lg:mr-24"
            >Choose a workshop class you like to join ?</div>
            <div class="relative flex items-center">
              <select
                v-model="info.workshop_class"
                class="text-gray-500 bg-gray-200 text-xs rounded-full font-light focus:outline-none focus:shadow-outline border-0 border-gray-300 rounded-lg py-2 px-4 w-full block mx-auto appearance-none leading-6"
                type="string"
                required
              >
                <option value selected>Select Workshop</option>
                <option v-for="(workshop,i) in allWorkshops" :key="i">{{workshop}}</option>
              </select>
              <svg
                class="absolute w-4 h-4 right-0 mr-5 text-gray-500 pointer-events-none"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          <div v-if="error">
              <div class="bg-red-900 max-w-xl mt-6 rounded mx-auto text-center">
              <p class="py-3 text-white text-sm">{{errorValue}}</p>
            </div>
          </div>
          <div v-show="show">
            <div class="bg-gray-900 max-w-xl mt-4 rounded mx-auto text-center">
              <p class="py-3 text-white text-sm">Your registeration number is {{bibleStudy}}</p>
            </div>
            <div class="bg-gray-900 max-w-xl mt-4 rounded mx-auto text-center">
              <p class="py-3 text-white text-sm">Your Bible Group number is {{reg}}</p>
            </div>
            <div class="mx-auto max-w-xl mt-4 ">
              <div @click="download" class=" cursor-pointer text-xs text-red-600" :href="pdf">Pdf Download</div>
            </div>
            <div class="mx-auto max-w-xl mt-4">
              <p class="text-xs text-gray-600">*Please keep this information with you</p>
            </div>
          </div>

          <div class="w-full flex items-center mt-4">
            <button
              type="submit"
              :class="{'cursor-not-allowed pointer-events-none':show}"
              class="font-light mx-auto text-sm rounded-full bg-blue-500 hover:bg-blue-500 text-white hover:text-white outline-none shadow-none focus:outline-none py-2 leading-7 px-12 mt-6 border border-blue-500 hover:border-transparent rounded"
            >
              <p>{{!show ? 'Register' : 'Applied'}}</p>
            </button>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
import Hero from "@/components/Hero";
import { mapGetters } from "vuex";
import axios from 'axios'
export default {
  components: {
    Hero
  },
  data() {
    return {
      getCurrentEvent: "",
      info: {
        attendee_first_name: "",
        attendee_last_name: "",
        event_name: "",
        event_start_date: "",
        attendee_email_address: "",
        attendee_mobile_number: "",
        attendee_state: "",
        attendee_country: "",
        workshop_class: "",
        attendee_church_name: "",
        attendee_first_time_attending: "",
        no_of_times_attended: ""
      },
      show: false,
      error:false,
      errorValue:'',
      bibleStudy: "",
      reg: "",
      pdf:''
    };
  },

  computed: {
    ...mapGetters(["getAllWorkshops", "getAllEvents"]),
    allWorkshops() {
      return this.getAllWorkshops;
    }
  },
  methods: {
    async send() {
      try {
      let res = await this.$store.dispatch("postEventRegistration", this.info);
      if (res.status == 201) {
        console.log(res.data);
        let { bible_study_group_no, reg_no,event_pdf_file } = res.data;
        this.show = true;
        this.bibleStudy = bible_study_group_no;
        this.reg = reg_no;
        this.pdf = event_pdf_file
      }
       if(res.status == 400){
       this.error = true 
       this.errorValue = res.data.non_field_errors[0]
       setTimeout(() =>{
         this.error = false;
         this.errorValue = ''
       }, 5000)
      }
      } catch(e){
        console.log(e);
      }
     
      
    },
      forceFileDownload(response){
      const url = window.URL.createObjectURL(new Blob([response.data]))
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', `GodsCareMission.pdf`) //or any other extension
      document.body.appendChild(link)
      link.click()
    },
    download(){
      axios({
        method: 'get',
        url: this.pdf,
        responseType: 'arraybuffer'
      })
      .then(response => {
        
        this.forceFileDownload(response)
        
      })
      .catch((e) => console.log(e,'error occured'))
    }
  },

  mounted() {
    if (this.$store.state.events.results) {
      this.getCurrentEvent = this.getAllEvents.results.find(
        x => x.slug == this.$route.params.theme
      );
    }
    this.info.event_name = this.getCurrentEvent.event_title;
    this.info.event_start_date = this.getCurrentEvent.event_start_date;
  }
};
</script>

<style>
</style>