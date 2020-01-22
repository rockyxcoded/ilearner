<template>
  <div id="home">
    <div class="bg-gray">
      <div class="-mt-1 bg-grey-lighter">
        <div class="container mx-auto">
          <div class="px-16">
            <ul class="list-reset flex">
              <li class="text-center py-3 px-8 border-b-2 border-solid border-grey-dark"><a
                  href="#"
                  class="text-black"
                >Home</a></li>
              <li class="text-center py-3 px-8"><a
                  href="#"
                  class="hover:text-black"
                >Maths</a></li>
              <li class="text-center py-3 px-8"><a
                  href="#"
                  class="hover:text-black"
                >English Lang</a></li>
              <li class="text-center py-3 px-8"><a
                  href="#"
                  class="hover:text-black"
                >Physics</a></li>
              <li class="text-center py-3 px-8"><a
                  href="#"
                  class="hover:text-black"
                >Chemistry</a></li>
              <li class="text-center py-3 px-8"><a
                  href="#"
                  class="hover:text-black"
                >Biology</a></li>
              <li class="text-center py-3 px-8"><i class="fa fa-search fa-lg text-grey-dark"></i></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="container mx-auto flex">
        <!-- <div class="w-3/4 mx-16 py-6"> -->
          <div class="border-b pb-8">
            <div class="container mx-auto p-8 text-left">
              <div class="">
                <h3 class="text-gray-900 text-xl">Lorem ipsum dolor sit amet</h3>
                <p class="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cupiditate molestias, id nisi delectus necessit</p>
              </div>
              <div class="flex flex-row flex-wrap -mx-2">
                <Card v-for="nun in 4" />
              </div>
            </div>
          <!-- </div>
          <div class="border-b"> -->
            <div class="container mx-auto p-8 text-left">
              <div class="">
                <h3 class="text-gray-900 text-xl">Lorem ipsum dolor sit amet</h3>
                <p class="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cupiditate molestias, id nisi delectus necessit</p>
              </div>
              <div class="flex flex-row flex-wrap -mx-2">
                <Card v-for="nun in 4" />
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="w-1/4 py-6">
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import axios from "@/axios";
import Card from "@/components/Card";

export default {
  name: "home",
  methods: {
    getUserInfo() {
      axios({
        method: "GET",
        url: "/users/self"
      })
        .then(response => {
          console.log(response.data);
          const user = response.data.data;
          this.$store.dispatch("user", user);
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mounted() {
    this.getUserInfo();
  },
  components: {
    Card
  }
};
</script>
