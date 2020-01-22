<template>
    <div class="w-full sm:w-1/2 md:w-1/4 mb-4 px-2">
      <div class="relative bg-white rounded border">
        <picture class="block bg-gray-200 border-b">
          <img
            class="block"
            src="@/assets/images/people-woman-coffee-meeting.jpg"
            alt="Card 1"
          >
        </picture>
        <div class="p-4 text-left">
          <h4 class="mb-1 font-semibold text-lg leading-tight truncate">Mathematics crash course</h4>
          <div class="flex items-baseline">
            <span class="inline-block px-2 py-1 leading-none bg-teal-200 text-teal-800 rounded-full font-semibold tracking-wide text-xs">
              Mathematcis
            </span>
          </div>
          <div class="mt-2 flex items-center">
            <img
              class="w-10 h-10 rounded-full mr-4"
              src="@/assets/images/avatar.png"
              alt="Avatar of Jonathan Reinink"
            >
            <div class="text-sm">
              <p class="text-gray-900 leading-none">Jonathan Reinink</p>
            </div>
          </div>
          <div class="mt-2 flex items-center">
            <svg
              v-for="i in 5"
              :key="i"
              viewBox="0 0 24 24"
              class="h-4 w-4 fill-current text-teal-500"
            >
              <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z" />
            </svg>
            <span class="ml-2 text-gray-600 text-sm">44 reviews</span>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<style scoped lang="scss">

</style>
