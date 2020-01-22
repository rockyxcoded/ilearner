<template>
  <div class="home">
    <!-- start hero -->
    <section
      class="bg-blue-600 h-screen"
      style="background-image: url('https://static.skillshare.com/assets/images/homepage/promo-banner/mari-andrew-bg-desktop.jpg'); background-size: cover; background-position: center; background-repeat: no-repeat;"
    >
      <div style="background: linear-gradient(90deg,rgba(0,0,0,0.8) 0%,transparent 100%); height: 100%;">
        <div class="px-4 py-48">
          <div class="flex flex-col md:flex-row">
            <div class="w-full lg:w-4/6 lg:mx-4 lg:pr-8 text-left md:pl-10">
              <h1
                class="text-blue-100 text-4xl md:text-5xl xl:text-6xl font-bold leading-tight"
                style="font-size: 48px; line-height: 52px; font-weight: 700"
              >
                Self Discovery: Learn, Reflect, and Build.
              </h1>
              <p
                class="text-blue-200 text-xl md:text-2xl leading-tight mt-4"
                style="font-weight: 400; line-height: 28px;"
              >
                Join best-selling platform for a series of inspiring creative exercises to unlock your personal vision for the future!
              </p>
              <a
                href="/login"
                class="px-8 py-4 bg-blue-800 text-white rounded inline-block mt-8 font-semibold"
              >Get 1 month free trial</a>
            </div>
            <div class="w-full lg:w-2/6 lg:mx-4 lg:pr-8">
              <div class="h-100">
                <!-- <img
                  src="@/assets/svg/reading.svg"
                  alt=""
                  class="mx-auto"
                > -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- end hero -->
    <section class="bg-gray-100 flex flex-col text-center py-16 px-4 lg:px-16 md:px-8 xl:px-24 xxl:px-40">
      <div>
        <h2 class="text-xl lg:text-3xl font-bold text-gray-900">Lorem ipsum dolor sit amet?</h2>
      </div>

      <div class="mt-12 sm:flex items-start justify-between sm:-mx-2">
        <div class="w-full bg-white rounded-lg shadow-lg py-8 px-4 sm:w-1/3 sm:mx-2 lg:mx-6">
          <div class="h-24">
            <img
              src="@/assets/svg/icon-home-1.svg"
              alt=""
              class="mx-auto"
            >
          </div>
          <h4 class="text-md uppercase text-gray-800 font-bold mt-10">Lorem ipsum dolor sit amet</h4>
          <p class="text-base text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div class="w-full bg-white rounded-lg shadow-lg py-8 px-4 mt-6 sm:mt-0 sm:w-1/3 sm:mx-2 lg:mx-6">
          <div class="h-24">
            <img
              src="@/assets/svg/icon-home-2.svg"
              alt=""
              class="mx-auto"
            >
          </div>
          <h4 class="text-md uppercase text-gray-800 font-bold mt-10">Lorem ipsum dolor sit amet</h4>
          <p class="text-base text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div class="w-full bg-white rounded-lg shadow-lg py-8 px-4 mt-6 sm:mt-0 sm:w-1/3 sm:mx-2 lg:mx-6">
          <div class="h-24">
            <img
              src="@/assets/svg/icon-home-3.svg"
              alt=""
              class="mx-auto"
            >
          </div>
          <h4 class="text-md uppercase text-gray-800 font-bold mt-10">Lorem ipsum dolor sit amet</h4>
          <p class="text-base text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {}
};
</script>
