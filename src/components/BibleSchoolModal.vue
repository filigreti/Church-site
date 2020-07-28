<template>
  <main>
    <div class="fixed inset-0 w-full lg:px-0 px-3 z-20 bg-black bg-opacity-75 overflow-y-auto flex justify-center items-center pt-8">
      <div class="lg:max-w-3xl w-full p-5 bg-white relative">
        <div @click="close">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 absolute top-0 right-0 mt-5 mr-5" viewBox="0 0 512 512">
            <path d="m256 512c-141.160156 0-256-114.839844-256-256s114.839844-256 256-256 256 114.839844 256 256-114.839844 256-256 256zm0-475.429688c-120.992188 0-219.429688 98.4375-219.429688 219.429688s98.4375 219.429688 219.429688 219.429688 219.429688-98.4375 219.429688-219.429688-98.4375-219.429688-219.429688-219.429688zm0 0" />
            <path d="m347.429688 365.714844c-4.679688 0-9.359376-1.785156-12.929688-5.359375l-182.855469-182.855469c-7.144531-7.144531-7.144531-18.714844 0-25.855469 7.140625-7.140625 18.714844-7.144531 25.855469 0l182.855469 182.855469c7.144531 7.144531 7.144531 18.714844 0 25.855469-3.570313 3.574219-8.246094 5.359375-12.925781 5.359375zm0 0" />
            <path d="m164.570312 365.714844c-4.679687 0-9.355468-1.785156-12.925781-5.359375-7.144531-7.140625-7.144531-18.714844 0-25.855469l182.855469-182.855469c7.144531-7.144531 18.714844-7.144531 25.855469 0 7.140625 7.140625 7.144531 18.714844 0 25.855469l-182.855469 182.855469c-3.570312 3.574219-8.25 5.359375-12.929688 5.359375zm0 0" />
          </svg>
        </div>
        <h1 class="text-blue-500 text-2xl text-center">Registration Successfull</h1>
        <p class="text-xs text-center text-gray-600 font-light lg:px-24 py-2">Please save your Registration Number and your Bible Study group to be requested during the program</p>
        <div class="mx-10 p-3 border border-black my-5  rounded-lg text-center">
          <h1 class="text-xl">{{ newdata.firstName }} {{ newdata.lastName }}</h1>
          <h1 class="text-xl">{{ newdata.number }}</h1>
          <h1 class="text-xl">{{ newdata.email }}</h1>
          <h1 class="text-xl">{{ newdata.state }}, {{ newdata.country }}</h1>
          <h1 class="text-xl">WorkShop Class: {{ newdata.workshop }}</h1>
          <div class="bg-gray-900 max-w-xl mt-4 rounded mx-auto text-center">
            <p class="py-3 text-white text-sm">Your registeration number is {{ newdata.reg }}</p>
          </div>
          <div class="bg-gray-900 max-w-xl mt-4 rounded mx-auto text-center">
            <p class="py-3 text-white text-sm">Your Bible Group number is {{ newdata.bibleStudy }}</p>
          </div>
          <div class="mx-auto max-w-xl mt-4">
            <div @click="download" class="cursor-pointer text-xs text-red-600" :href="newdata.pdf">Pdf Download</div>
          </div>
          <div class="mx-auto max-w-xl mt-4">
            <p class="text-xs text-gray-600">*Please keep this information with you</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";
export default {
  methods: {
    close() {
      this.$emit("closemodal");
    },
    forceFileDownload(response) {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `GodsCareMission.pdf`); //or any other extension
      document.body.appendChild(link);
      link.click();
    },
    download() {
      axios({
        method: "get",
        url: this.newdata.pdf,
        responseType: "arraybuffer",
      })
        .then((response) => {
          this.forceFileDownload(response);
        })
        .catch((e) => console.log(e, "error occured"));
    },
  },
  //   mounted() {
  //     document.body.style.setProperty("overflow", "hidden");
  //   },
  //   destroyed() {
  //     document.body.style.removeProperty("overflow");
  //   },
};
</script>

<style></style>
